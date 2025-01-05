const core = require('@actions/core');
const core = require('@actions/github');
const core = require('@actions/exec');

function run(){
    core.notice('Hello From my cusotm Javascript Action')
}
run();