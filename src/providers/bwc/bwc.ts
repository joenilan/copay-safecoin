import { Injectable } from '@angular/core';

import { Logger } from '../../providers/logger/logger';

import * as COREBTC from 'bitcore-lib';
import * as COREBCH from 'bitcore-lib-cash';

import * as COREANON from 'bitcore-lib-anon-mini';
import * as COREBTCZ from 'bitcore-lib-btcz-mini';

import * as CORELTC from 'bitcore-lib-ltc-mini';
import * as CORERVN from 'bitcore-lib-rvn-mini';
import * as CORESAFE from 'bitcore-lib-safecoin';

import * as CORERITO from 'bitcore-lib-rito-mini';

import * as COREZCL from 'bitcore-lib-zcl-mini';
import * as COREZEL from 'bitcore-lib-zel';
import * as COREZEN from 'bitcore-lib-zen-mini';

import * as BWC from 'bitcore-wallet-client-safecoin';

@Injectable()
export class BwcProvider {
  public buildTx = BWC.buildTx;
  public parseSecret = BWC.parseSecret;
  public Client = BWC;
  constructor(private logger: Logger) {
    this.logger.info('BwcProvider initialized.');
  }
  public getBitcore() {
//    return BWC.Bitcore;
      return COREBTC;
  }

  public getBitcoreCash() {
//  return BWC.BitcoreCash;
    return COREBCH;
  }

  public getBitcoreSafe() {
    return CORESAFE;
  }

  public getBitcoreBtcz() {
    return COREBTCZ;
  }

  public getBitcoreZcl() {
    return COREZCL;
  }

  public getBitcoreRito() {
    return CORERITO;
  }

  public getBitcoreAnon() {
    return COREANON;
  }

  public getBitcoreZel() {
    return COREZEL;
  }

  public getBitcoreZen() {
    return COREZEN;
  }

  public getBitcoreRvn() {
    return CORERVN;
  }

  public getBitcoreLtc() {
    return CORELTC;
  }
  
  public getErrors() {
    return BWC.errors;
  }

  public getSJCL() {
    return BWC.sjcl;
  }

  public getUtils() {
    return BWC.Utils;
  }

  public getClient(walletData?, opts?) {
    opts = opts || {};

    // note opts use `bwsurl` all lowercase;
    let bwc = new BWC({
//      baseUrl: opts.bwsurl || 'http://192.168.91.209:3233/bwss/api',
      baseUrl: opts.bwsurl || 'https://bwss.safecoin.org/bwss/api', 
      verbose: opts.verbose,
      timeout: 100000,
      transports: ['polling']
    });
    if (walletData) bwc.import(walletData, opts);
    return bwc;
  }
}
