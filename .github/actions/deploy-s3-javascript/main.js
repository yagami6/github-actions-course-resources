const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    core.notice('Hello From my cusotm Javascript Action');
}
run();