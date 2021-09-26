let startup = document.getElementById("begin");
let count = 0;
startup.addEventListener("click",function(e) {
    if(count%2 == 0)
    {   count++;
        startmenu(e);
        
    }
    else if(count%2 != 0) {
        count++;
        console.log(e.target.ownerDocument.body.childNodes[7].remove());
        
        
        
    }
});

function startmenu() {
    let menu = document.createElement("div");
    menu.classList.add("startmenu");
    menu.innerHTML=`<div class="pinned"><p>Pinned<button class="button-pin">All apps ></button></p>
    <table>
        <tbody>
<tr>
    <tb class="microsft-ege text-setting"><span style="
    position: absolute;
    margin-top: 62px;
    ">Microsoft Edge</span></tb>
    <tb class="mail text-setting">
        <span style="    position: absolute;
        margin-top: 62px;
        width: 123px;
        margin-left: 19px;">Mail</span>
    </tb>
    <tb class="calender text-setting">
        <span style="    position: absolute;
        margin-top: 61px;
        width: 123px;
        margin-left: 6px;">Calendar</span>
    </tb>
    <tb class="photos text-setting">
        <span style="    position: absolute;
        margin-top: 61px;
        width: 123px;
        margin-left: 7px;">Photos</span>
    </tb>
    <tb class="xobox text-setting">
        <span style="    position: absolute;
        margin-top: 61px;
        width: 123px;
        margin-left: 14px;">Xbox</span>
    </tb>
    <tb class="settings text-setting">
        <span style="    position: absolute;
        margin-top: 61px;
        width: 123px;
        margin-left: 14px;">Settings</span>
</tb>
</tr>
<tr>
    <tb class="office text-setting"><span style="
            position: absolute;
            margin-top: 61px;
            width: 123px;
            margin-left: 8px;"
            >Office</span></tb>
        <tb class="calculator text-setting">
            <span style="    position: absolute;
            margin-top: 55px;
            width: 123px;
            margin-left: 0px;">Calculator</span>
        </tb>
        <tb class="notepad text-setting">
            <span style="    position: absolute;
            margin-top: 60px;
            width: 123px;
            margin-left: 4px;">Notepad</span>
        </tb>
        <tb class="filexplore text-setting">
            <span style="    position: absolute;
            margin-top: 61px;
            width: 123px;
            margin-left: 0px;">File Explore</span>
        </tb>
        <tb class="tips text-setting">
            <span style="    position: absolute;
            margin-top: 61px;
            width: 123px;
            margin-left: 23px;">Tips</span>
        </tb>
</tr>
       
        </tbody>
    </table>
    </div>
    <div class="recommeded"><p>Recommeded<button class="button-rec">More ></button></p>
    <table>
        <tbody>
            <tr>
                <td class="cmd"><p class="aligment"><b>Node.js command Prompt</b></br>Recently added</p></td>
                <td class="mongodb"><p class="aligment"><b>Mongodb</b></br>Recently added</p></td>
            </tr>
            <tr>
                <td class="git"><p class="aligment"><b>GitHub</b></br>Recently added</p></td>
                <td class="node"><p class="aligment"><b>Node.js</b></br>Recently added</p></td>
            </tr>
            <tr>
                <td class="teams"><p class="aligment"><b>Teams</b></br>Recently added</p></td>
                <td class="githbash"><p class="aligment"><b>Git</b></br>Recently added</p></td>
            </tr>
            
        </tbody>
    </table>
    </div>
    <div class="login-info">
        <table>
            <tbody>
                <tr>
                    <td class="user" ></td>
                    <p class="user-info">Nitesh</p>
                    <td class="shutdown"></td>
                </tr>
            </tbody>
        </table>
    </div>`;
    document.querySelector("body").append(menu);
}