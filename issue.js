/*
var Slack = require('./lib/node-slack-client');

var token = 'xoxb-17446158322-rLcOkPlQSVUcDNQDQ195Ozzy';
var autoReconnect = true;
var autoMark = true;

var slack = new Slack(token, autoReconnect, autoMark);

// create_issue
// title: hoge
// body: hogehogehoge
slack.on('message', function(message){
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  var user = slack.getUserByID(message.user);
  var text = message.txt;
  if(/^create_issue/.test(text)){
    text = text.split('create_issue')[1];
    postIssue(channel, user, text);
  }
});
*/

function postIssue(channel, user, text){
  var content = parseText(text);
  var title = content[0];
  var body = content[1];
  return content;
}

function parseText(text){
  var content = text.split('title: ')[1];
  content = content.split(' body: ');
  return content;
}

module.exports = function(robot) {
  return robot.hear(/hoge$/, function(msg){
    return msg.send('foo');
  });
  /*return robot.hear(/^create_issue (.+)/, function(msg){
    var text = msg.match[1];
    var user = msg.message.user.name;
    var channel = msg.message.room;
    var content = postIssue(channel, user, text);
    return msg.send(content[0] + '||' +  content[1]);
  });*/
}
