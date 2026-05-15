//footer is a functional component that returns a JSX element representing the footer section of a webpage. 
//It uses Tailwind CSS classes to style the footer with a background color, text color, padding, and flexbox layout to arrange the content. 
//The footer contains two sections: one with the location information and another with contact details.
    
    

function Footer(){
    return(
            <div className="flex justify-between bg-slate-500 text-amber-50 p-7">
                <div>
                    <p>Hyderabad, Telangana,</p>
                    <p>India.</p>
                </div>
                <div>
                    <p>mail@gmail.com</p>
                    <p>384942389823</p>
                </div>
            </div>
    )
}
export default Footer
