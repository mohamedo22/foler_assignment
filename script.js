var users=[{name:"gana",password:123456}]

function resetpass()
{
    let user_name = document.getElementById("username");
    let pass = document.getElementById("password");
    let look = false;
    for(let i=0; i<users.length ;i++)
    {
        if(users[i].name == user_name.value)
        {
            users[i].password = pass.value;
            alert('the password has changed');
            look = true
        }
    }
    if(look == false)
    {
        alert('this is not user');
    }
}






// function validate_signupp()
// {
//     var username=document.getElementById("username_").value;
//     var email=document.getElementById("email_").value;
//     var password=document.getElementById("password_").value;
//     var age=document.getElementById("age_").value;
//     var phone=document.getElementById("phone_").value;
//     var confirm=document.getElementById("confirmpassword_").value;
//     var smallchar=false;
//     var capitalchar=false;
//     var num=false;
//     var regex=/[@#$%^&*()]/;
//     var look=false;

//     if(username==""||age==""||phone=="")
//     {
//         alert("please enter your username,age and phone")
//     }
//     else
//     {
//         if(username.length<5||username.length>15)
//         {
//             alert("please enter your username between 5 and 15 char");
//         }
//         else
//         {
//             if (phone.length!=11)
//             {
//                 alert("please enter your phone=11");
//             }
//             else
//             {
//                 if(password.value!=confirm.value)
//                 {
//                     alert("thepasswrd not match");
//                 }
//                 else
//                 {
//                     for(var i=0;i<password.value.length;i++)
//                     {
//                         if(password[i]>'a'&&password[i]<'z')
//                         {
//                             smallchar=true;
//                         }
//                         else if(password[i]>'A'&&password[i]<'Z')
//                         {
//                             capitalchar=true;
//                         }
//                         else if(password[i]>'0'&&password[i]<'9')
//                         {
//                             num=true;
//                         }
//                         else if(regex.test(password[i]))
//                         {
//                             look=true;
//                         }
//                     }
//                     if(smallchar == true && capitalchar == true && num== true && look == true)
//                     {
//                                 users.push({name:username,password:password})
//                                 alert("register sucess!")
//                     }
//                     else
//                     {
//                         alert('your password not strong');
//                     }
//                 }
//             }
//         }
//     }
// }
// function validate_signinn()
// {
//     var usernamee=document.getElementById("username__");
//     var passwordd=document.getElementById("password__");
//     for(var i=0;i<users.length;i++)
//     {
//         if(users[i].name==usernamee&&users[i].password==passwordd)
//         { alert("login successfully")}
//     }
// }