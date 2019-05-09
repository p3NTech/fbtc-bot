var CONFIG_SPEED=1
var CONFIG_DEFAULT_BET=0.00000001
var CONFIG_INTELLIGENT_BET=false

function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
function bet_hi(){document.getElementById('double_your_btc_bet_hi_button').click()}
function bet_lo(){document.getElementById('double_your_btc_bet_lo_button').click()}
function is_win(){return document.getElementById('double_your_btc_bet_win').style.display=='block'}
function get_code(){return document.getElementsByClassName('large-1 small-1 columns center lottery_winner_table_box lottery_winner_table_second_cell')[6].innerHTML}
function reset_bet_amount(){document.getElementById('double_your_btc_stake').value=(CONFIG_INTELLIGENT_BET?document.getElementById('balance').innerHTML/30000:CONFIG_DEFAULT_BET)}
function double_bet_amount(){document.getElementById('double_your_btc_2x').click()}

function RefreshPageAfterFreePlayTimerEnds(){}
while(true){
	last=get_code()
	if(Math.round(Math.random())){bet_hi()}
	else{bet_lo()}
	while(last==get_code()){await sleep(1000/CONFIG_SPEED)}
	if(is_win()){reset_bet_amount()}
	else{double_bet_amount()}
}
