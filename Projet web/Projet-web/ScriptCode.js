  const maForme = document.getElementById('form');
const Nom = document.getElementById('Nom');
const Prenom =document.getElementById('Prenom');
const Email = document.getElementById('Email');
const Adresse = document.getElementById('Adresse');
const Téléphone = document.getElementById('Téléphone:');
const Ville = document.getElementById('Ville');
const profil = document.getElementById('profil');
const Lieu = document.getElementById('Lieu');
const Datdebut = document.getElementById('Datdebut');
const Datfin = document.getElementById('Datfin');
const desc = document.getElementById('desc');
const Etabl = document.getElementById('Etabl');
const Datdebur2 = document.getElementById('Datdebur2');
const Datfin2 = document.getElementById('Datfin2');
const comp = document.getElementById('comp');
const niv = document.getElementById('niv');
const centIn = document.getElementById('centIn');
form.addEventListener('submit',(e) =>
 {
      e.preventDefault();

      checkInput()
 });
    function checkInput() {
    //obtenir la valeur à partir des inputs
    const NomValue=Nom.value.trim();
    const PrenomValue= Prenom.value.trim();
    const AdresseValue=Adresse.value.trim();
    const EmailValue=Email.value.trim();
    const TéléphoneValue=Téléphone.value.trim();
    const VilleValue= Ville.value.trim();
    const profilValue=profil.value.trim();
    const LieuValue=Lieu.value.trim();
    const DatdebutValue =Datdebut.value.trim();
    const DatfinValue=Datfin.value.trim();
    const descValue=desc.value.trim();
    const EtablValue=Etabl.value.trim();
    const Datdebur2Value=Datdebur2.value.trim();
    const Datfin2Value= Datfin2.value.trim();
    const compValue=comp.value.trim();
    const nivValue=niv.value.trim();
    const centInValue=centIn.value.trim();
   
    if(NomValue==='')
    {
        
        //afficher erreur
         //Ajouter error class
         setErrorFor(Nom,'Veuillez sasir votre nom');
    }else{
        //ajouter success class
        setSuccessFor(Nom);
    }
 }       
 

function setErrorFor(input,message){
    const formControl = input.parentElement;//.form-control
    const small=formControl.querySelector('small');
     small.innerText = message;
  formControl.className = 'form-control error';
}

