function myFunction() {
document.getElementById("psw").pattern = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
document.getElementById("psw").title = "false";

document.getElementById("psw-repeat").pattern = document.getElementById("psw").value;
document.getElementById("psw-repeat").title = "false";
}
	
