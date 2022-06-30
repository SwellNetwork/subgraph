import { 
  LogStake as LogStakeEvent
} from '../generated/SWNFTUpgrade/SWNFTUpgrade'
import { LogStake, User, Referral } from '../generated/schema'

export function handleLogStake(event: LogStakeEvent): void{
  let user = User.load(event.params.user);
  if(!user) {
    user = new User(event.params.user);
  }
  user.totalStakeAmount += event.params.deposit;
  user.itemIds.push(event.params.itemId);
  user.save();

  let referral = Referral.load(event.params.referral);
  if(!referral) {
    referral = new Referral(event.params.referral);
  }
  referral.totalAmount += event.params.deposit;
  referral.save();

  let log_stake = LogStake.load(event.params.itemId.toString());
  if(!log_stake) {
    log_stake = new LogStake(event.params.itemId.toString());
    log_stake.user = user;
    log_stake.itemId = event.params.itemId;
    log_stake.pubKey = event.params.pubKey;
    log_stake.deposit = event.params.deposit;
    log_stake.timeStamp = event.params.timeStamp;
    log_stake.referral = referral;
  }
  log_stake.save();
}