function Contact(){
    return(
        <>
            <form style={{textAlign:"center", marginTop:"12vw"}}>
                <h2> Contact Me!😊</h2>
                <label class="label" for="name" >NAME</label> <br/> 
                <input class="input" type="text" id="name"></input> <br/><br/>
                <label class="label" for="email">EMAIL</label> <br/> 
                <input class="input" type="email" id="email"></input> <br/><br/>
                <label class="label" for="message">MESSAGE</label> <br/>
                <input class="input" type="text" id="message"></input> <br/><br/>
                <input class="submit" type="submit" value="SEND"/>
            </form>

        </>
    );
}

export default Contact;