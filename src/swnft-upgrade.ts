import { BigInt } from '@graphprotocol/graph-ts'
import { 
  LogStake as LogStakeEvent,
  SWNFTUpgrade
} from '../generated/SWNFTUpgrade/SWNFTUpgrade'
import { LogStake, User, Referral, Stats } from '../generated/schema'

export function handleLogStake(event: LogStakeEvent): void{
  let swNFTContract = SWNFTUpgrade.bind(event.address);

  let stats = Stats.load("Swell-Stats");
  if(!stats) {
    stats = new Stats("Swell-Stats");
    stats.userCounter = BigInt.zero();
    stats.tvl = BigInt.zero();
  }

  let user = User.load(event.params.user);
  if(!user) {
    user = new User(event.params.user);
    user.totalStakeAmount = BigInt.zero();
    user.nodeOperator = swNFTContract.positions(event.params.itemId).getOperator();
    user.itemIds = [event.params.itemId];
    stats.userCounter = stats.userCounter.plus(BigInt.fromI32(1));
  } else {
    if(!user.nodeOperator) {
      user.nodeOperator = swNFTContract.positions(event.params.itemId).getOperator();
    }
    user.itemIds.push(event.params.itemId);
  }
  user.totalStakeAmount = user.totalStakeAmount.plus(event.params.deposit);
  stats.tvl = stats.tvl.plus(event.params.deposit);
//  
  user.save();
  stats.save();

  let referral = Referral.load(event.params.referral);
  if(!referral) {
    referral = new Referral(event.params.referral);
    referral.totalAmount = BigInt.zero();
  }
  referral.totalAmount = referral.totalAmount.plus(event.params.deposit);
  referral.save();

  let log_stake = LogStake.load(event.params.itemId.toString());
  if(!log_stake) {
    log_stake = new LogStake(event.params.itemId.toString());
    //log_stake.user = user;
    log_stake.itemId = event.params.itemId;
    log_stake.pubKey = event.params.pubKey;
    log_stake.deposit = event.params.deposit;
    log_stake.timeStamp = event.params.timeStamp;
    log_stake.tvl = stats.tvl;
    //log_stake.referral = referral;
  }
  log_stake.save();
}