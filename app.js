// Inisialisasi Firebase Auth & Firestore
const auth = firebase.auth();
const db = firebase.firestore();

// Kirim link login ke email
function sendLoginLink(){
  const email = document.getElementById("email").value;
  const actionCodeSettings = {
    url: window.location.href,
    handleCodeInApp: true,
  };
  auth.sendSignInLinkToEmail(email, actionCodeSettings)
    .then(()=>{
      document.getElementById("authMsg").innerText = "Link login sudah dikirim ke email.";
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch(err=>{
      document.getElementById("authMsg").innerText = "Error: " + err.message;
    });
}

// Cek jika link login dibuka
if(auth.isSignInWithEmailLink(window.location.href)){
  let email = window.localStorage.getItem("emailForSignIn");
  if(!email){
    email = window.prompt("Masukkan email untuk konfirmasi");
  }
  auth.signInWithEmailLink(email, window.location.href)
    .then(()=>{
      window.localStorage.removeItem("emailForSignIn");
      checkUser(email);
    });
}

function checkUser(email){
  // Ambil NIK user berdasarkan email (disesuaikan dengan Firestore data)
  db.collection("penduduk").where("email","==",email).get().then(snap=>{
    let status = "Tamu Domisili";
    let nama = email;
    snap.forEach(doc=>{
      nama = doc.data().nama;
      status = "Warga Terdaftar";
    });
    document.getElementById("authSection").style.display="none";
    document.getElementById("portalSection").style.display="block";
    document.getElementById("userName").innerText = nama;
    document.getElementById("userStatus").innerText = status;
  });
}

function logout(){
  auth.signOut().then(()=>{
    location.reload();
  });
}
