//Form validation..
const form = document.querySelector('#form');
const uname = document.querySelector('#username');
const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');
const pwd =  	 document.querySelector('#password');
const cpwd =  	document.querySelector('#confirm_password');
const small = document.querySelector('small');

form.addEventListener('submit',(e)=>{
	e.preventDefault();

	checkInput();

});

function checkInput(){

	//Get the Values of the input..

	const unameValue = uname.value.trim();
	const emailValue = email.value.trim();
	const mobileValue = mobile.value.trim();
	const pwdValue = pwd.value.trim();
	const cpwdValue = cpwd.value.trim();

// Name.................
if(unameValue === '')
{
	setError(uname, '*Username cannot be blank.');
	
}
else if(unameValue.length<=2 || unameValue.length>21)
{
	setError(uname, '*Username must be between 4 to 20 character.');
	
}
else
{
	setSuccess(uname);
}


// email........
const emailReg1 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-z]){2,8}$/;
const emailReg2 = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-z]){2,3}\.[a-zA-z]{1,3}$/;
if(emailValue === '')
{
	setError(email, '*Email cannot be blank.');
	
}
else if(!emailReg1.test(emailValue) && !emailReg2.test(emailValue))
{
	setError(email, '*Please enter valid email address.');
	
}
else
{
	setSuccess(email);
}


//mobile..........

const mobReg = /^[0-9]{10}$/;
if(mobileValue === '')
{
	setError(mobile, '*Mobile cannot be blank.');
	
}
else if(!mobReg.test(mobileValue))
{
	setError(mobile, '*Please enter valid mobile number');
	
}
else
{
	setSuccess(mobile);
}

//password.......
if(pwdValue === '')
{
	setError(pwd, '*Password cannot be blank.');
	
}
else if(pwdValue.length<6)
{
	setError(pwd, '*Password required atleast 6 characters.');
	
}
else if(pwdValue.length>14)
{
	setError(pwd, '*Password required maximum 14 characters.');
	
}
else
{
	setSuccess(pwd);
}

//Confirm password...............
if(cpwdValue === '')
{
	setError(cpwd, '*Confirm password cannot be blank');
	
}
else if(pwdValue !== cpwdValue)
{
	setError(cpwd, '*Password does not matched.');
	
}
else
{
	setSuccess(cpwd);
}

}

//function for error message

function setError(input,msg)
{
	const main = input;
	const small = main.parentElement.querySelector('small');

	//add error msg for inside small
	small.innerText = msg ;

	main.classList.add("error");
	return;

}

//function for success message

function setSuccess(input)
{
	const main = input;
	const small = main.parentElement.querySelector('small');

	//add error msg for inside small
	small.innerText = '';

	main.classList.add("success");
	return;
}

// keyup event for immidiate change...

form.addEventListener('keyup', function(){
	checkInput();
});




