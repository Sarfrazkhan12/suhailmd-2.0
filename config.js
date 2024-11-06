const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_18_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmQ2aTZ3Z3FoTnZUL1lMWFFwYXhlNm9McU5QYkk0S2xyQ1RZRnlXeGVZdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLTJsVU9oSGNSeldqMjJISDFMcHNFd1wiLFxuICBcInBob25lSWRcIjogXCJmYjkyMWUwZi1hOGNmLTQ2ZDItOWM2MS0wYThlODgxNjI2ODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxNjUsXG4gICAgICA4LFxuICAgICAgMjM3LFxuICAgICAgMzIsXG4gICAgICAxNDAsXG4gICAgICAzNSxcbiAgICAgIDE3MCxcbiAgICAgIDIyNyxcbiAgICAgIDgyLFxuICAgICAgOTEsXG4gICAgICAxNDAsXG4gICAgICAxMSxcbiAgICAgIDE0LFxuICAgICAgMjA0LFxuICAgICAgMjQ0LFxuICAgICAgNjgsXG4gICAgICAyMjMsXG4gICAgICA0OCxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgODUsXG4gICAgICAyMjQsXG4gICAgICA2MCxcbiAgICAgIDg2LFxuICAgICAgMTA4LFxuICAgICAgMTMxLFxuICAgICAgMTA2LFxuICAgICAgODIsXG4gICAgICAxNDUsXG4gICAgICAyMTYsXG4gICAgICAxMDEsXG4gICAgICA4MixcbiAgICAgIDEwNCxcbiAgICAgIDY4LFxuICAgICAgMTE4LFxuICAgICAgMjksXG4gICAgICAyMjksXG4gICAgICAxODgsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlpOR0JTV0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA1MjAwNDYwMDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkZhcmFhelwiLFxuICAgIFwibGlkXCI6IFwiODU4NTY4MTU3MTQzMTA6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEc2ek5zSEVLdXdyTGtHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKTEdvRWJDRzNTZ21FQzRQdkF3YWxwRGVNTkhjREJCYzRNdUNTd3Rpc0hVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpMTXpLb1RsK3B5MGdjQnlFRWxwMm92bTExZkFQRDBpaG5ncEZQUjZodzdTNWVERFByQngvNnlHVmRQb2QyZjlsQjVacEV5VFBDRkttL2tMbWltWkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9KZUVyaWhsdFczN09vdFlubGtvWXo2djNMMnBSQ0lRaXNXSWs2dzN5blBCSVFiTWNsWHVwb0h1Vk4xWXhKbzdoRG9aZUZPVEZzSWlHeklscVAvdGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA1MjAwNDYwMDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODc3NDg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
