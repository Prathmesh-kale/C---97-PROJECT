function NextT()
{
    window.location = "index.html";
}

function logout()
    {
        localStorage.removeItem("user_name");

        window.location.replace("login.html");
    }

function BackS()
{
    window.location = "hyundai.html";
}