//document.getElementById(''); document.getElementsByName('');
const Email = document.getElementById('_Email');
const Tel = document.getElementById('_Tel');
const Datee = document.getElementById('_Date');
const Url = document.getElementById('_Url');
const Study = document.getElementById('_Study');
const locationSelect = document.getElementById('locationSelect');

const contactRadio = document.getElementsByName('svaz');


Email.classList.add('hidden');
Tel.classList.add('hidden');
Datee.classList.add('hidden');
Url.classList.add('hidden');
Study.classList.add('hidden');

for(let i = 0; i<contactRadio.length;i++){
    contactRadio[i].addEventListener('change', function(){
        print('asdasdasd');
        switch(this.value){
            case 'meet_':
                Email.classList.add('hidden');
                Tel.classList.add('hidden');
                Datee.classList.remove('hidden');
                Url.classList.add('hidden');
                break;
            case 'tel_':
                Email.classList.add('hidden');
                Tel.classList.remove('hidden');
                Datee.classList.add('hidden');
                Url.classList.add('hidden');
                break;
            case 'email_':
                Email.classList.remove('hidden');
                Tel.classList.add('hidden');
                Datee.classList.add('hidden');
                Url.classList.add('hidden');
                break;
            case 'other_':
                Email.classList.add('hidden');
                Tel.classList.add('hidden');
                Datee.classList.add('hidden');
                Url.classList.remove('hidden');
                break;
            case 'none_':
                Email.classList.add('hidden');
                Tel.classList.add('hidden');
                Datee.classList.add('hidden');
                Url.classList.add('hidden');
                break;
        }
    });
}

locationSelect.addEventListener('change', function(){
    if(this.value === 'study_select'){
        Study.classList.remove('hidden');
    } else {
        Study.classList.add('hidden');
    }
});

