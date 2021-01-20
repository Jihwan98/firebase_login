(function() {
const firebaseConfig = {
    apiKey: "AIzaSyDzgN2nyPbJtrzXRT_PgHSdeRKLGmsRzsY",
    authDomain: "test-e59ea.firebaseapp.com",
    projectId: "test-e59ea",
    storageBucket: "test-e59ea.appspot.com",
    messagingSenderId: "311169056902",
    appId: "1:311169056902:web:e8ccff8023014e4e67d107",
    measurementId: "G-NNWX6LKNBV"
};

firebase.initializeApp(firebaseConfig);

//firebase를 전역 변수로 설정
console.log(firebase)

//인증 서비스 제공 업체
var provider = new firebase.auth.GoogleAuthProvider();

//사용자 인증
const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const container = document.getElementById('container');


const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');




// Add login event
btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => {
        console.log(e.message)
        alert("PASSWORD incorrect")
    });
});

// Add signup event
btnSignUp.addEventListener('click', e => {
    // Get email and pass
    // TODO: CHECK 4 REAL EMAILZ
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
    promise
        .catch(e => console.log(e.message));
});












//인증 이벤트 처리
signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        //sing in
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        container.hidden = true;
        userDetails.innerHTML = '<p>user.displayName : ' + name + '<p>user.email : ' + email + '<p>user.photoURL : ' + photoUrl + '<p>user.emailVerified : ' + emailVerified + '<p>user.uid : ' + uid;
    } else{
        //sign out
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        container.hidden = false;
        userDetails.innerHTML = '';
    }
});

}());










