/** Import component build files */
import { catsopinion } from "./postBuilders/catsopinionBuilder";
import { catquiz } from "./postBuilders/catquizBuilder";
import { catvision } from "./postBuilders/catvisionBuilder";
import { footkin } from "./postBuilders/footkinBuilder";
import { virtualLibrary } from "./postBuilders/virtualLibraryBuilder";
import { raytrace } from "./postBuilders/raytracingBuilder";
import { koivikkolisala } from "./postBuilders/koivikkolisala";
import { vr } from "./postBuilders/vr";

/** Object of all available posts */
export const postList = {
  catsopinion,
  catquiz,
  catvision,
  footkin,
  virtualLibrary,
  raytrace,
  koivikkolisala,
  vr,
};
