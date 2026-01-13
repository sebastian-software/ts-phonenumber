/**
 * European Union countries metadata bundle.
 * All 27 EU member states.
 */

import AT from "../countries/AT.js"
import BE from "../countries/BE.js"
import BG from "../countries/BG.js"
import HR from "../countries/HR.js"
import CY from "../countries/CY.js"
import CZ from "../countries/CZ.js"
import DK from "../countries/DK.js"
import EE from "../countries/EE.js"
import FI from "../countries/FI.js"
import FR from "../countries/FR.js"
import DE from "../countries/DE.js"
import GR from "../countries/GR.js"
import HU from "../countries/HU.js"
import IE from "../countries/IE.js"
import IT from "../countries/IT.js"
import LV from "../countries/LV.js"
import LT from "../countries/LT.js"
import LU from "../countries/LU.js"
import MT from "../countries/MT.js"
import NL from "../countries/NL.js"
import PL from "../countries/PL.js"
import PT from "../countries/PT.js"
import RO from "../countries/RO.js"
import SK from "../countries/SK.js"
import SI from "../countries/SI.js"
import ES from "../countries/ES.js"
import SE from "../countries/SE.js"
import type { RegionMetadata } from "../types.js"

export const regions: RegionMetadata[] = [
  AT,
  BE,
  BG,
  HR,
  CY,
  CZ,
  DK,
  EE,
  FI,
  FR,
  DE,
  GR,
  HU,
  IE,
  IT,
  LV,
  LT,
  LU,
  MT,
  NL,
  PL,
  PT,
  RO,
  SK,
  SI,
  ES,
  SE
]

export const regionCodes = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE"
] as const

export default regions
