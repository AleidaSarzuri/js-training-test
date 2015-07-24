/**
 * Created by aleidasarzuri on 7/24/2015.
 */

var MyForm = function(){

    this.name = {
      //'fullname':''
      // 'email': ''
    };

    this.genderMF = {
        'genderM':'M',
        'genderF':'F'
    };

    this.hobbies = {
        'hobby1':'ski',
        'hobby2':'run',
        'hobby3':'eat',
        'hobby4':'sleep',
        'hobby5':'read',
        'hobby6':'code'
    };
    this.choose= {
        'Press':'press',
        'Internet':'net',
        'Word of mouth':'mouth',
        'Other':'other'

    };



};

MyForm.prototype.create = function(nameTest,emailTest,genderMF,hobbies,choose){

    this.fullname(nameTest);
    this.email(emailTest);
    this.myhobbies(hobbies.hobby3);
    this.gender(genderMF.genderF);
    this.heard(choose.net);

};
//options
//('option[value="press"]')
MyForm.prototype.fullname = function(name){
//$('input[name="fullname"]').val("hola")
    $('input[name="fullname"]').val(name);
};
MyForm.prototype.email = function(email){
//$('input[name="email"]').val("hola")
    $('input[name="email"]').val(email);
};

 MyForm.prototype.gender = function(gender){
    $('input[type="radio"][name="gender"][value="' + this.genderMF[gender] + '"]').click()
};


 MyForm.prototype.myhobbies= function(hobby){
    //checkbox

   //$('input[type="checkbox"][value="' + this.hobbies[hobbies] + '"]').click();
    //$('input[type="checkbox"][id="hobby1"]').click()
     $('input[type="checkbox"][value="' + this.hobbies[hobby] + '"]').click();
};

//$('[name=""]').val(this.beans[bean]);
MyForm.prototype.heard = function(option) {
    // $('select[id="heard"]').val("net")
    $('select[id="heard"]').val(this.choose[option]).click();
};
