// Description:
//   Messing around with the today API.
// Commands:
//   hubot today  - Return today at random.

function parseText(text){
  var content = text.split(/[\s]*title:\s?/)[1];
  content = content.split(/[\s]*body:\s?/);
  return content;
}

function postIssue(text){
  var content = parseText(text);
  var title = content[0];
  var body = content[1];
  return content;
}

module.exports = function(robot) {
  /*return robot.hear(/hoge$/, function(msg){
    return msg.send('foo');
  });*/
  return robot.hear(/create_issue([\s\S]*)/, function(msg){
    //return msg.send(msg.match[1]);
    var text = msg.match[1].replace(/\n/g, '');
    //return msg.send(text);
    //var user = msg.message.user.name;
    //var channel = msg.message.room;
    var content = postIssue(text);
    return msg.send(content[0] + ' || ' +  content[1]);
  });
}
