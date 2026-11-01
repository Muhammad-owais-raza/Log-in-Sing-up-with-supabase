
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const show_error = document.querySelector("#showError");

const supabase_url = "https://psnqnowucksxifaohozm.supabase.co";
const supabase_key = "sb_publishable_U0i005ON69VmOylpp1AiPQ_q3uO1S4S";

const connectDb = supabase.createClient(supabase_url,supabase_key);

const loginUser = async (event) => {
    event.preventDefault();

    const response = await connectDb.auth.signInWithPassword({
        email : emailInput.value,
        password : passwordInput.value,
    })
    
    // console.log("response: ", response);
    // console.log("response: " , response.error.message);

    if(response.error){
        show_error.innerHTML = response.error.message;
    } else {
        console.log("Welcome back! You have successfully logged in.");

        window.location.href = "../auth/welcome.html";

    }


    

}