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
}

export class User extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type User must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): User | null {
    return changetype<User | null>(store.get("User", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get totalStakeAmount(): BigInt {
    let value = this.get("totalStakeAmount");
    return value!.toBigInt();
  }

  set totalStakeAmount(value: BigInt) {
    this.set("totalStakeAmount", Value.fromBigInt(value));
  }

  get nodeOperator(): boolean {
    let value = this.get("nodeOperator");
    return value!.toBoolean();
  }

  set nodeOperator(value: boolean) {
    this.set("nodeOperator", Value.fromBoolean(value));
  }

  get itemIds(): Array<BigInt> {
    let value = this.get("itemIds");
    return value!.toBigIntArray();
  }

  set itemIds(value: Array<BigInt>) {
    this.set("itemIds", Value.fromBigIntArray(value));
  }
}

export class Referral extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Referral entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Referral must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Referral", id.toString(), this);
    }
  }

  static load(id: string): Referral | null {
    return changetype<Referral | null>(store.get("Referral", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalAmount(): BigInt {
    let value = this.get("totalAmount");
    return value!.toBigInt();
  }

  set totalAmount(value: BigInt) {
    this.set("totalAmount", Value.fromBigInt(value));
  }
}

export class Stats extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Stats entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Stats must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Stats", id.toString(), this);
    }
  }

  static load(id: string): Stats | null {
    return changetype<Stats | null>(store.get("Stats", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userCounter(): BigInt {
    let value = this.get("userCounter");
    return value!.toBigInt();
  }

  set userCounter(value: BigInt) {
    this.set("userCounter", Value.fromBigInt(value));
  }
}
