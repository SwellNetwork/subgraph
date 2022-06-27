// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class LogStake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LogStake entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LogStake must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LogStake", id.toString(), this);
    }
  }

  static load(id: string): LogStake | null {
    return changetype<LogStake | null>(store.get("LogStake", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get itemId(): BigInt {
    let value = this.get("itemId");
    return value!.toBigInt();
  }

  set itemId(value: BigInt) {
    this.set("itemId", Value.fromBigInt(value));
  }

  get pubKey(): Bytes {
    let value = this.get("pubKey");
    return value!.toBytes();
  }

  set pubKey(value: Bytes) {
    this.set("pubKey", Value.fromBytes(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    return value!.toBigInt();
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }

  get referral(): string {
    let value = this.get("referral");
    return value!.toString();
  }

  set referral(value: string) {
    this.set("referral", Value.fromString(value));
  }
}

export class Staker extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Staker entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Staker must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Staker", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Staker | null {
    return changetype<Staker | null>(store.get("Staker", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }
}
