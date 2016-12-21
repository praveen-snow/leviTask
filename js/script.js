(function () {
  "use strict";
  var messages = [
    {
      type:'receiver',
      messager:"Friend",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time:"5 min"
    },{
      type:'sender',
      messager:"Me",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time:"4 min"
    },{
      type:'receiver',
      messager:"Friend",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time:"3 min"
    }
  ];

  function createMessage(){
    var mainDiv = document.getElementById("mainDiv");
    var myDivs = [];
    var divs = null;
    for (var index in messages){
      divs = createMessageContainer(messages[index]);
      console.log(divs);
      mainDiv.appendChild(divs);
    }
  }

  function createMessageContainer(obj){
      var messageDiv = document.createElement("div");
      messageDiv.className = "msgContainer";
      messageDiv.appendChild(createMessageIcon(obj));
      messageDiv.appendChild(addMessage(obj));
    return messageDiv;
  }

  function createMessageIcon(obj){
    var iconDiv = document.createElement("div");
    iconDiv.className = "msgIcon"
    if(obj.type === 'receiver'){
      iconDiv.appendChild(createCircle(obj));
      iconDiv.appendChild(createListDiv(obj));
    }else{
      iconDiv.appendChild(createListDiv(obj));
      iconDiv.appendChild(createCircle(obj));
    }
    return iconDiv;
  }

  function createListDiv(obj){
    var listDiv = document.createElement("div");
    listDiv.className = "listView";
    if(obj.type !== 'receiver'){
      listDiv.className = "listView meListView";
    }
    listDiv.appendChild(createUl(obj));
    return listDiv;
  }

  function createUl(obj){
    var list = document.createElement("ul");
    list.appendChild(createLi(obj.messager));
    list.appendChild(createLi(obj.time));
    return list;
  }

  function createLi(obj){
    var li = document.createElement("li");
    li.innerText = obj;
    return li;
  }

  function createCircle(obj){
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.innerText = "50 x 58"
    return circle;
  }

  function addMessage(obj){
    var message = document.createElement("div");
    message.className = "toMessage"
    if(obj.type !== 'receiver'){
      message.className = "fromMessage";
    }
    message.innerText = obj.message;
    return message;
  }

  createMessage();
}());




  // var messages = {
  //   friend:[
  //     {
  //       message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       time:"5 min"
  //     },
  //     {
  //       message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       time:"3 min"
  //     }
  //   ],
  //   me:[
  //     {
  //       message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //       time:"4 min"
  //     }
  //   ]
  // }


  // for(var key in messages){
  //   var i = 0;
  //   var divs=null;
  //   if(messages.hasOwnProperty(key)){
  //     divs = createMessageContainer(messages[key],key);
  //   }
  //   mainDiv.appendChild(divs[i]);
  //   i = 1+i;
  // }

  //arr.push(messageDiv);
//}
// var messageDiv = document.createElement("div");
// messageDiv.className = "msgContainer";

//var arr = [];
//for(var index in obj){
