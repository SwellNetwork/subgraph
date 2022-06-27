import { 
  LogStake as LogStakeEvent
} from '../generated/SWNFTUpgrade/SWNFTUpgrade'
import { LogStake, Staker } from '../generated/schema'

export function handleLogStake(event: LogStakeEvent): void{
  let log_stake = LogStake.load(event.params.itemId.toString());
  if(!log_stake) {
    log_stake = new LogStake(event.params.itemId.toString());
    log_stake.user = event.params.user;
    log_stake.itemId = event.params.itemId;
    log_stake.pubKey = event.params.pubKey;
    log_stake.deposit = event.params.deposit;
    log_stake.timeStamp = event.params.timeStamp;
    log_stake.referral = event.params.referral;
  }
  log_stake.save();

  let staker = Staker.load(event.params.user);
  if(!staker) {
    staker = new Staker(event.params.user);
    staker.save();
  }
}