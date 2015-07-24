/**
 * Created by aleidasarzuri on 7/24/2015.
 */

var MyForm = function(){

    this.name = {
      //'fullname':''
      // 'email': ''
    };

    this.genderMF = {
        'gender':'genderM',
        'gender':'genderF'
    };

    this.hobbies = {
        'hobbies':'sky',
        'hobbies':'run',
        'hobbies':'eat',
        'hobbies':'sleep',
        'hobbies':'read',
        'hobbies':'code'
    };



};
//options
//('option[value="press"]')
MyForm.prototype.gender = function(gender){
    $('input[type="radio"][name="gender"][id="' + this.gender[gender] + '"]').click()
};


MyForm.prototype.myhobbies= function(hobie){
    //checkbox

   // $('input[type="checkbox"][value="' + this.hobbies[hobbies] + '"]').click();
    $('input[type="checkbox"][name="hobbies"][value="' + this.hobbies[hobbies] + '"]').click();
};

//$('[name=""]').val(this.beans[bean]);
