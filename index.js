function TemprayName() {
   return(
   
       <div>
     <nav>
            
            <h1>
                <ul>
                    <li>
                    <a href="#info-person" >yuor info</a> 
                    </li>
                    <li>
                    <a href="#majors" >majors</a> 
                    </li>
                    <li>
                    <a href="#send" >send</a> 
                    </li>
                </ul>
            </h1>
            
        </nav>
    <form>
       
        <h1 id="info-person" class="name">Determine your career preferences</h1>
        <h3>You will be able to define your passions and inclinations</h3>
        <fieldset  >
            <label for="name" >
                Enter Your frist name<input id="name" type="text" />
            </label>
        </fieldset>
        <fieldset>
            <label for="last-name">
                Enter Your last name<input id="last-namr" type="text" />
            </label>
        </fieldset>
        <fieldset>
            <label for="age">
                Input your age<input id="age" type="number" min="15" max="25" />
            </label>
        </fieldset>
        <fieldset>
            <label for="yourself" >talk about yourself:
                <textarea rows="3" cols="30" type="text" id="yourself"  placeholder="Introduce yourself in three lines, what do you like, what is your favorite place" required></textarea></label>
        </fieldset>
        <fieldset>
            <label>How do you like to spend your time
            <select>
                <option value="">(select one)</option>
                <option value="1">reading</option>
                <option value="2">in the computer and the Internet</option>
                <option value="3">drawing</option>
                <option value="4">making Viedo on Social Media</option>
                <option value="4">Meeting with people and talking to them</option>

            </select>
            </label>
            </fieldset>
            <fieldset>
            <label>What environment do you prefer to work in?
                <select>
                    <option value="">(select one)</option>
                <option value="1">work with other</option>
                <option value="2">in the computer and the Internet</option>
                <option value="3">Mixed work environment, men and women</option>
                <option value="4">Noisy and social work environment</option>
                <option value="4">Work alone</option>
                </select>
            </label>
            </fieldset>
       
        <hr></hr>
        <section id="majors">

            <div class="majors" >
        <div class="img">        
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGqnlvEY1ydKvkKpmQElt8LV1V41VTCFNgVj6VLyYdAMZP60CWkYWeFfmxg2vbD3cpDI&usqp=CAU" />
                <p>Computer majors for those who prefer writing codes,
                 sitting at the computer,
                discovering and innovating  <a href="https://www.mtu.edu/cs/what/"  >to learn more about this click here</a> </p>
        </div>
<div class="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAE-oE-Ck6ORIndIB_aR-LDmGQQSZ_0TCBmrmoSvuKuw&s" />
                <p>majors Science and medicine for
                 those who prefer science,
                 love learning and the ability to memorize  <a href="https://medicalstudyguide.com/" >to learn more about this click here</a> </p>
</div>
<div class="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTM9jNQl0K9oRStXdtM6tofgyao26KdHi4g&usqp=CAU" />
               <p> Engineering majors for those who love to 
                solve problems and think of innovative and new solutions   <a href="https://en.wikipedia.org/wiki/Engineer" >to learn more about this click here</a></p>
</div>
            </div>
            
        </section>
        <hr></hr>
        <button id="send">send</button>
        <footer>
        it has been Editing by <em>Asrar</em> 2030
        </footer>
       
        
    </form>
      
   </div>
  
   )

};
ReactDOM.render(<TemprayName />, document.getElementById("root"));
