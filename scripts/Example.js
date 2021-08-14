//This is an example of using EasyCommands
import * as GameTest from "GameTest";
import { BlockLocation } from "Minecraft";
import * as Minecraft from 'Minecraft';
import { EasyCommands } from "scripts/EasyCommands.js";
    
//const tickCallback = Minecraft.World.events.tick;
//const entityCallback = Minecraft.World.events.createEntity;
const chatCallback = Minecraft.World.events.beforeChat;

//tickCallback.subscribe(onTick);
chatCallback.subscribe(beforeChat);
//entityCallback.subscribe(entityCreated);	
  
function beforeChat(entityData) 
{
	var str = "";
	
	try{
	switch(entityData.message){
		case "!taglist":
		let tags = EasyCommands.getTags(`tag @e[name=${entityData.sender.name},type=player] list`);
			for(var c in tags){
				str = str + tags[c] + ",";
			}			
				str = "Tags:" + str;
			Minecraft.Commands.run(`tellraw ${entityData.sender.name} {"rawtext":[{"text":"${str}"}]}`);
			//output: all of the tags of the player
		break;
		
		case "!victim":
		let victims = EasyCommands.getPlayers(`testfor @e[type=player]`);
			for(var c in victims){
			str = str + victims[c] + ",";
			}
			str = "Victims:" + str;
			Minecraft.Commands.run(`tellraw ${entityData.sender.name} {"rawtext":[{"text":"${str}"}]}`);
			//output: all of the names of the player affected by testfor
		break;
		
		case "!playercount":
		let count = "Count: " + EasyCommands.playerCount();
			Minecraft.Commands.run(`tellraw ${entityData.sender.name} {"rawtext":[{"text":"${count}"}]}`);
		break;
		
		case "!maxplayers":
		let max = "Max Count: " + EasyCommands.playerCountMax();
			Minecraft.Commands.run(`tellraw ${entityData.sender.name} {"rawtext":[{"text":"${max}"}]}`);
		break;
		
		case "!getplayers":
		let players = EasyCommands.getPlayers(`list`);
			for(var c in players){
				str = str + players[c] + ",";
			}
			str = "players: " + str;
			Minecraft.Commands.run(`tellraw ${entityData.sender.name} {"rawtext":[{"text":"${str}"}]}`);
		break;
		
		case "!clearedplayers":
		let cplayers = EasyCommands.getPlayers(`clear @a`);
			for(var c in cplayers){
				str = str + cplayers[c] + ",";
			}
			str = "players: " + str;
			Minecraft.Commands.run(`tellraw ${entityData.sender.name} {"rawtext":[{"text":"${str}"}]}`);
		break;
		
		//this is for testing
		case "!test":
		let test = Minecraft.Commands.run(`execute @a[name=${entityData.sender.name}] ~ ~ ~ testforblock ~ ~-1 ~ grass 0`);
			if(test){
			Minecraft.Commands.run(`say success!`);
			}
		break;
	}
	}catch(e){
		Minecraft.Commands.run(`say ${e}`);
	}
}

/*function entityCreated(entityData)
{	
	
}

function onTick()
{
	
	
}
*/
