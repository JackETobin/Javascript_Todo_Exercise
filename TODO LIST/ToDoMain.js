function KeystrokeListener()
{
    document.getElementById("NewMessage").addEventListener("keyup", KeySifter);
}

function KeySifter(keyPressed)
{    
    if(keyPressed.key === "Enter")
    {
        AddElement();
    }
}

function SetAccessTime()
{
    let TimeOfAccess = Date.now();
    sessionStorage.setItem("AccessTime", TimeOfAccess);
}

function AddElement()
{
    const Wrapper = document.getElementById("wrapper");
    let MessageContent = document.getElementById("NewMessage");
    if(!MessageContent.value.replace(/\s/g, ""))
    {
        MessageContent.value = "";
        return;
    }
    
    let AccessPoint = sessionStorage.getItem("AccessTime");
    let UniqueID = Date.now() + (Date.now() - AccessPoint);

    let NewElement = document.createElement("div");
    NewElement.setAttribute("class", "FontandColor Alignment Element");
    NewElement.setAttribute("id", UniqueID.toString());

    let NewMessage = document.createElement("p");
    let MessageInput = document.createTextNode(MessageContent.value);
    NewMessage.appendChild(MessageInput);

    let CompleteButton = document.createElement("button");
    let CompleteImg = document.createElement("img");
    
    CompleteImg.setAttribute("class", "CompleteImg");
    CompleteImg.setAttribute("src", "images/Complete.png");
    CompleteImg.setAttribute("alt", "Item Complete");
    CompleteButton.setAttribute("class", "CompleteButton");
    CompleteButton.setAttribute("id", UniqueID.toString());
    CompleteButton.setAttribute("onclick", "CompleteElement(id)");
    CompleteButton.appendChild(CompleteImg);

    let DeleteButton = document.createElement("button");
    let DeleteImg = document.createElement("img");    
    
    DeleteImg.setAttribute("class", "DeleteImg");
    DeleteImg.setAttribute("src", "images/Delete.png");
    DeleteImg.setAttribute("alt", "Delete Item");
    DeleteButton.setAttribute("class", "DeleteButton");
    DeleteButton.setAttribute("id", UniqueID.toString());
    DeleteButton.setAttribute("onclick", "DeleteElement(id)");
    DeleteButton.appendChild(DeleteImg);

    NewElement.appendChild(NewMessage);
    NewElement.appendChild(CompleteButton);
    NewElement.appendChild(DeleteButton);

    Wrapper.appendChild(NewElement);
    MessageContent.value = "";
}

function CompleteElement(buttonID)
{
    let DefaultColor = document.getElementById("Body").style.backgroundColor;
    let ElementToComplete = document.getElementById(buttonID);
    if(ElementToComplete.style.backgroundColor == DefaultColor)
    {
        ElementToComplete.style.backgroundColor = '#33ffbd';
        ElementToComplete.style.opacity = '0.4';
        ElementToComplete.style.transition = '0.7s';
    }
    else
    {
        ElementToComplete.style.backgroundColor = DefaultColor;
        ElementToComplete.style.opacity = '1';
        ElementToComplete.style.transition = '0.7s';
    }
}

function DeleteElement(buttonID)
{
    let ElementToDelete = document.getElementById(buttonID);
    ElementToDelete.style.opacity = '0';
    ElementToDelete.style.transition = '0.6s';
    setTimeout(() => ElementToDelete.remove(), 600);
}