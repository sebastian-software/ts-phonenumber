/**
 * G20 countries metadata bundle.
 * Includes the 19 member countries (EU is also a member but not a country).
 */

import AR from "../countries/AR.js"
import AU from "../countries/AU.js"
import BR from "../countries/BR.js"
import CA from "../countries/CA.js"
import CN from "../countries/CN.js"
import FR from "../countries/FR.js"
import DE from "../countries/DE.js"
import IN from "../countries/IN.js"
import ID from "../countries/ID.js"
import IT from "../countries/IT.js"
import JP from "../countries/JP.js"
import MX from "../countries/MX.js"
import RU from "../countries/RU.js"
import SA from "../countries/SA.js"
import ZA from "../countries/ZA.js"
import KR from "../countries/KR.js"
import TR from "../countries/TR.js"
import GB from "../countries/GB.js"
import US from "../countries/US.js"
import type { RegionMetadata } from "../types.js"

export const regions: RegionMetadata[] = [
  AR,
  AU,
  BR,
  CA,
  CN,
  FR,
  DE,
  IN,
  ID,
  IT,
  JP,
  MX,
  RU,
  SA,
  ZA,
  KR,
  TR,
  GB,
  US
]

export const regionCodes = [
  "AR",
  "AU",
  "BR",
  "CA",
  "CN",
  "FR",
  "DE",
  "IN",
  "ID",
  "IT",
  "JP",
  "MX",
  "RU",
  "SA",
  "ZA",
  "KR",
  "TR",
  "GB",
  "US"
] as const

export default regions
