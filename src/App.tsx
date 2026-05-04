import React, { useState, useEffect, useRef, useEffectEvent } from 'react';
import { Sword, Heart, RotateCcw, Play, Sparkles, Star, ChevronDown, Check, History, Lock, X, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VisualCalculator, type VisualControlSound } from './components/VisualCalculator';
import { ErrorBoundary } from './components/ErrorBoundary';
import startHeroImage from './assets/start-hero-math-adventure.png';
import readingActivityWarningImage from './assets/reading-activity-warning.png';
import stage1DefeatSceneImage from './assets/stage1-defeat-scene-cutout.png';
import stage1ChurusigiDefeatSceneImage from './assets/stage1-churusigi-defeat-scene.jpeg';
import stage2DefeatSceneImage from './assets/stage2-defeat-scene.jpeg';
import stage2JjangpalDefeatSceneImage from './assets/stage2-jjangpal-defeat-scene.jpeg';
import stage3DefeatSceneImage from './assets/stage3-defeat-scene-cutout.png';
import stage3GamjaanigumaDefeatSceneImage from './assets/stage3-gamjaaniguma-defeat-scene-cutout.png';
import stage4DefeatSceneImage from './assets/stage4-defeat-scene-cutout.png';
import stage4BaekgeurigoaDefeatSceneImage from './assets/stage4-baekgeurigoa-defeat-scene-cutout.png';
import stage5DefeatSceneImage from './assets/stage5-defeat-scene-cutout.png';
import stage5JurdiDefeatSceneImage from './assets/stage5-jurdi-defeat-scene-cutout.png';
import stage6DefeatSceneImage from './assets/stage6-defeat-scene-cutout.png';
import stage6AnheunhanDefeatSceneImage from './assets/stage6-anheunhan-defeat-scene.jpeg';
import stage7DefeatSceneImage from './assets/stage7-defeat-scene-cutout.png';
import stage7ArnyaDefeatSceneImage from './assets/stage7-arnya-defeat-scene-cutout.png';
import stage8DefeatSceneImage from './assets/stage8-defeat-scene-cutout.png';
import stage9DefeatSceneImage from './assets/stage9-defeat-scene-cutout.png';
import playerAttackImage from './assets/player-attack.png';
import playerBabyPotatoAttackImage from './assets/player-baby-potato-attack.png';
import playerBabyPotatoDefaultImage from './assets/player-baby-potato-default.png';
import playerBabyPotatoHitImage from './assets/player-baby-potato-hit.png';
import playerDefaultImage from './assets/player-default.png';
import playerHitImage from './assets/player-hit.png';
import playerChampionAttackImage from './assets/player-champion-attack.png';
import playerChampionDefaultImage from './assets/player-champion-default.png';
import playerChampionHitImage from './assets/player-champion-hit.png';
import playerWizardAttackImage from './assets/player-wizard-attack.png';
import playerWizardDefaultImage from './assets/player-wizard-default.png';
import playerWizardHitImage from './assets/player-wizard-hit.png';
import playerCapeAttackImage from './assets/player-cape-attack.png';
import playerCapeDefaultImage from './assets/player-cape-default.png';
import playerCapeHitImage from './assets/player-cape-hit.png';
import playerCatpajamaAttackImage from './assets/player-catpajama-attack.png';
import playerCatpajamaDefaultImage from './assets/player-catpajama-default.png';
import playerCatpajamaHitImage from './assets/player-catpajama-hit.png';
import playerCatAttackImage from './assets/player-cat-attack.png';
import playerCatDefaultImage from './assets/player-cat-default.png';
import playerCatHitImage from './assets/player-cat-hit.png';
import playerChefAttackImage from './assets/player-chef-attack.png';
import playerChefDefaultImage from './assets/player-chef-default.png';
import playerChefHitImage from './assets/player-chef-hit.png';
import playerDetectiveAttackImage from './assets/player-detective-attack.png';
import playerDetectiveDefaultImage from './assets/player-detective-default.png';
import playerDetectiveHitImage from './assets/player-detective-hit.png';
import playerDuckAttackImage from './assets/player-duck-attack.png';
import playerDuckDefaultImage from './assets/player-duck-default.png';
import playerDuckHitImage from './assets/player-duck-hit.png';
import playerEraserAttackImage from './assets/player-eraser-attack.png';
import playerEraserDefaultImage from './assets/player-eraser-default.png';
import playerEraserHitImage from './assets/player-eraser-hit.png';
import playerFairyAttackImage from './assets/player-fairy-attack.png';
import playerFairyDefaultImage from './assets/player-fairy-default.png';
import playerFairyHitImage from './assets/player-fairy-hit.png';
import playerFoxAttackImage from './assets/player-fox-attack.png';
import playerFoxDefaultImage from './assets/player-fox-default.png';
import playerFoxHitImage from './assets/player-fox-hit.png';
import playerFirefighterAttackImage from './assets/player-firefighter-attack.png';
import playerFirefighterDefaultImage from './assets/player-firefighter-default.png';
import playerFirefighterHitImage from './assets/player-firefighter-hit.png';
import playerFishAttackImage from './assets/player-fish-attack.png';
import playerFishDefaultImage from './assets/player-fish-default.png';
import playerFishHitImage from './assets/player-fish-hit.png';
import playerGhostAttackImage from './assets/player-ghost-attack.png';
import playerGhostDefaultImage from './assets/player-ghost-default.png';
import playerGhostHitImage from './assets/player-ghost-hit.png';
import playerGogumaAttackImage from './assets/player-goguma-attack.png';
import playerGogumaDefaultImage from './assets/player-goguma-default.png';
import playerGogumaHitImage from './assets/player-goguma-hit.png';
import playerGumihoAttackImage from './assets/player-gumiho-attack.png';
import playerGumihoDefaultImage from './assets/player-gumiho-default.png';
import playerGumihoHitImage from './assets/player-gumiho-hit.png';
import playerHeartwizardAttackImage from './assets/player-heartwizard-attack.png';
import playerHeartwizardDefaultImage from './assets/player-heartwizard-default.png';
import playerHeartwizardHitImage from './assets/player-heartwizard-hit.png';
import playerHoneyAttackImage from './assets/player-honey-attack.png';
import playerHoneyDefaultImage from './assets/player-honey-default.png';
import playerHoneyHitImage from './assets/player-honey-hit.png';
import playerHamsterAttackImage from './assets/player-hamster-attack.png';
import playerHamsterDefaultImage from './assets/player-hamster-default.png';
import playerHamsterHitImage from './assets/player-hamster-hit.png';
import playerKnightAttackImage from './assets/player-knight-attack.png';
import playerKnightDefaultImage from './assets/player-knight-default.png';
import playerKnightHitImage from './assets/player-knight-hit.png';
import playerPatissierAttackImage from './assets/player-patissier-attack.png';
import playerPatissierDefaultImage from './assets/player-patissier-default.png';
import playerPatissierHitImage from './assets/player-patissier-hit.png';
import playerPrincessAttackImage from './assets/player-princess-attack.png';
import playerPrincessDefaultImage from './assets/player-princess-default.png';
import playerPrincessHitImage from './assets/player-princess-hit.png';
import playerPizzaAttackImage from './assets/player-pizza-attack.png';
import playerPizzaDefaultImage from './assets/player-pizza-default.png';
import playerPizzaHitImage from './assets/player-pizza-hit.png';
import playerPirateAttackImage from './assets/player-pirate-attack.png';
import playerPirateDefaultImage from './assets/player-pirate-default.png';
import playerPirateHitImage from './assets/player-pirate-hit.png';
import playerPoliceAttackImage from './assets/player-police-attack.png';
import playerPoliceDefaultImage from './assets/player-police-default.png';
import playerPoliceHitImage from './assets/player-police-hit.png';
import playerRainbowartistAttackImage from './assets/player-rainbowartist-attack.png';
import playerRainbowartistDefaultImage from './assets/player-rainbowartist-default.png';
import playerRainbowartistHitImage from './assets/player-rainbowartist-hit.png';
import playerRibbonAttackImage from './assets/player-ribbon-attack.png';
import playerRibbonDefaultImage from './assets/player-ribbon-default.png';
import playerRibbonHitImage from './assets/player-ribbon-hit.png';
import playerSpaceAttackImage from './assets/player-space-attack.png';
import playerSpaceDefaultImage from './assets/player-space-default.png';
import playerSpaceHitImage from './assets/player-space-hit.png';
import playerSpainAttackImage from './assets/player-spain-attack.png';
import playerSpainDefaultImage from './assets/player-spain-default.png';
import playerSpainHitImage from './assets/player-spain-hit.png';
import playerSafetyAttackImage from './assets/player-safety-attack.png';
import playerSafetyDefaultImage from './assets/player-safety-default.png';
import playerSafetyHitImage from './assets/player-safety-hit.png';
import playerSillyAttackImage from './assets/player-silly-attack.png';
import playerSillyDefaultImage from './assets/player-silly-default.png';
import playerSillyHitImage from './assets/player-silly-hit.png';
import playerSmartAttackImage from './assets/player-smart-attack.png';
import playerSmartDefaultImage from './assets/player-smart-default.png';
import playerSmartHitImage from './assets/player-smart-hit.png';
import playerStudentAttackImage from './assets/player-student-attack.png';
import playerStudentDefaultImage from './assets/player-student-default.png';
import playerStudentHitImage from './assets/player-student-hit.png';
import playerTeacherAttackImage from './assets/player-teacher-attack.png';
import playerTeacherDefaultImage from './assets/player-teacher-default.png';
import playerTeacherHitImage from './assets/player-teacher-hit.png';
import playerClockAttackImage from './assets/player-clock-attack.png';
import playerClockDefaultImage from './assets/player-clock-default.png';
import playerClockHitImage from './assets/player-clock-hit.png';
import playerMomAttackImage from './assets/player-mom-attack.png';
import playerMomDefaultImage from './assets/player-mom-default.png';
import playerMomHitImage from './assets/player-mom-hit.png';
import playerThiefAttackImage from './assets/player-thief-attack.png';
import playerThiefDefaultImage from './assets/player-thief-default.png';
import playerThiefHitImage from './assets/player-thief-hit.png';
import playerDiverAttackImage from './assets/player-diver-attack.png';
import playerDiverDefaultImage from './assets/player-diver-default.png';
import playerDiverHitImage from './assets/player-diver-hit.png';
import playerWingAttackImage from './assets/player-wing-attack.png';
import playerWingDefaultImage from './assets/player-wing-default.png';
import playerWingHitImage from './assets/player-wing-hit.png';
import playerScientistAttackImage from './assets/player-scientist-attack.png';
import playerScientistDefaultImage from './assets/player-scientist-default.png';
import playerScientistHitImage from './assets/player-scientist-hit.png';
import playerRainbowDyeAttackImage from './assets/player-rainbow-dye-attack.png';
import playerRainbowDyeDefaultImage from './assets/player-rainbow-dye-default.png';
import playerRainbowDyeHitImage from './assets/player-rainbow-dye-hit.png';
import playerTaegeukgiAttackImage from './assets/player-taegeukgi-attack.png';
import playerTaegeukgiDefaultImage from './assets/player-taegeukgi-default.png';
import playerTaegeukgiHitImage from './assets/player-taegeukgi-hit.png';
import playerTireAttackImage from './assets/player-tire-attack.png';
import playerTireDefaultImage from './assets/player-tire-default.png';
import playerTireHitImage from './assets/player-tire-hit.png';
import playerBaldAttackImage from './assets/player-bald-attack.png';
import playerBaldDefaultImage from './assets/player-bald-default.png';
import playerBaldHitImage from './assets/player-bald-hit.png';
import playerMohawkAttackImage from './assets/player-mohawk-attack.png';
import playerMohawkDefaultImage from './assets/player-mohawk-default.png';
import playerMohawkHitImage from './assets/player-mohawk-hit.png';
import playerTigerAttackImage from './assets/player-tiger-attack.png';
import playerTigerDefaultImage from './assets/player-tiger-default.png';
import playerTigerHitImage from './assets/player-tiger-hit.png';
import playerTornadopotatoAttackImage from './assets/player-tornadopotato-attack.png';
import playerTornadopotatoDefaultImage from './assets/player-tornadopotato-default.png';
import playerTornadopotatoHitImage from './assets/player-tornadopotato-hit.png';
import playerWolfAttackImage from './assets/player-wolf-attack.png';
import playerWolfDefaultImage from './assets/player-wolf-default.png';
import playerWolfHitImage from './assets/player-wolf-hit.png';
import playerSoccerPlayerAttackImage from './assets/player-soccer-player-attack.png';
import playerSoccerPlayerDefaultImage from './assets/player-soccer-player-default.png';
import playerSoccerPlayerHitImage from './assets/player-soccer-player-hit.png';
import playerBaseballPlayerAttackImage from './assets/player-baseball-player-attack.png';
import playerBaseballPlayerDefaultImage from './assets/player-baseball-player-default.png';
import playerBaseballPlayerHitImage from './assets/player-baseball-player-hit.png';
import playerBasketballPlayerAttackImage from './assets/player-basketball-player-attack.png';
import playerBasketballPlayerDefaultImage from './assets/player-basketball-player-default.png';
import playerBasketballPlayerHitImage from './assets/player-basketball-player-hit.png';
import playerTaekwondoAttackImage from './assets/player-taekwondo-attack.png';
import playerTaekwondoDefaultImage from './assets/player-taekwondo-default.png';
import playerTaekwondoHitImage from './assets/player-taekwondo-hit.png';
import playerSwimmerAttackImage from './assets/player-swimmer-attack.png';
import playerSwimmerDefaultImage from './assets/player-swimmer-default.png';
import playerSwimmerHitImage from './assets/player-swimmer-hit.png';
import playerGardenerAttackImage from './assets/player-gardener-attack.png';
import playerGardenerDefaultImage from './assets/player-gardener-default.png';
import playerGardenerHitImage from './assets/player-gardener-hit.png';
import playerMusicianAttackImage from './assets/player-musician-attack.png';
import playerMusicianDefaultImage from './assets/player-musician-default.png';
import playerMusicianHitImage from './assets/player-musician-hit.png';
import playerDoctorAttackImage from './assets/player-doctor-attack.png';
import playerDoctorDefaultImage from './assets/player-doctor-default.png';
import playerDoctorHitImage from './assets/player-doctor-hit.png';
import playerPilotAttackImage from './assets/player-pilot-attack.png';
import playerPilotDefaultImage from './assets/player-pilot-default.png';
import playerPilotHitImage from './assets/player-pilot-hit.png';
import playerNinjaAttackImage from './assets/player-ninja-attack.png';
import playerNinjaDefaultImage from './assets/player-ninja-default.png';
import playerNinjaHitImage from './assets/player-ninja-hit.png';
import playerRobotAttackImage from './assets/player-robot-attack.png';
import playerRobotDefaultImage from './assets/player-robot-default.png';
import playerRobotHitImage from './assets/player-robot-hit.png';
import opponentLevel1AttackImage from './assets/opponent-level1-attack.png';
import opponentLevel1ChurusigiAttackImage from './assets/opponent-level1-churusigi-attack-cutout.png';
import opponentLevel1DefaultImage from './assets/opponent-level1-default.png';
import opponentLevel1ChurusigiDefaultImage from './assets/opponent-level1-churusigi-default-cutout.png';
import opponentLevel1HitImage from './assets/opponent-level1-hit.png';
import opponentLevel1ChurusigiHitImage from './assets/opponent-level1-churusigi-hit-cutout.png';
import opponentLevel2AttackImage from './assets/opponent-level2-attack.png';
import opponentLevel2JjangpalAttackImage from './assets/opponent-level2-jjangpal-attack-cutout.png';
import opponentLevel2DefaultImage from './assets/opponent-level2-default.png';
import opponentLevel2JjangpalDefaultImage from './assets/opponent-level2-jjangpal-default-cutout.png';
import opponentLevel2HitImage from './assets/opponent-level2-hit.png';
import opponentLevel2JjangpalHitImage from './assets/opponent-level2-jjangpal-hit-cutout.png';
import opponentLevel3AttackImage from './assets/opponent-level3-attack.png';
import opponentLevel3GamjaanigumaAttackImage from './assets/opponent-level3-gamjaaniguma-attack-cutout.png';
import opponentLevel3DefaultImage from './assets/opponent-level3-default.png';
import opponentLevel3GamjaanigumaDefaultImage from './assets/opponent-level3-gamjaaniguma-default-cutout.png';
import opponentLevel3HitImage from './assets/opponent-level3-hit.png';
import opponentLevel3GamjaanigumaHitImage from './assets/opponent-level3-gamjaaniguma-hit-cutout.png';
import opponentLevel4AttackImage from './assets/opponent-level4-attack.png';
import opponentLevel4BaekgeurigoaAttackImage from './assets/opponent-level4-baekgeurigoa-attack-cutout.png';
import opponentLevel4DefaultImage from './assets/opponent-level4-default.png';
import opponentLevel4BaekgeurigoaDefaultImage from './assets/opponent-level4-baekgeurigoa-default-cutout.png';
import opponentLevel4HitImage from './assets/opponent-level4-hit.png';
import opponentLevel4BaekgeurigoaHitImage from './assets/opponent-level4-baekgeurigoa-hit-cutout.png';
import opponentLevel5AttackImage from './assets/opponent-level5-attack.png';
import opponentLevel5JurdiAttackImage from './assets/opponent-level5-jurdi-attack-cutout.png';
import opponentLevel5DefaultImage from './assets/opponent-level5-default.png';
import opponentLevel5JurdiDefaultImage from './assets/opponent-level5-jurdi-default-cutout.png';
import opponentLevel5HitImage from './assets/opponent-level5-hit.png';
import opponentLevel5JurdiHitImage from './assets/opponent-level5-jurdi-hit-cutout.png';
import opponentLevel6AttackImage from './assets/opponent-level6-attack.png';
import opponentLevel6AnheunhanAttackImage from './assets/opponent-level6-anheunhan-attack-cutout.png';
import opponentLevel6DefaultImage from './assets/opponent-level6-default.png';
import opponentLevel6AnheunhanDefaultImage from './assets/opponent-level6-anheunhan-default-cutout.png';
import opponentLevel6HitImage from './assets/opponent-level6-hit.png';
import opponentLevel6AnheunhanHitImage from './assets/opponent-level6-anheunhan-hit-cutout.png';
import opponentLevel7AttackImage from './assets/opponent-level7-attack.png';
import opponentLevel7ArnyaAttackImage from './assets/opponent-level7-arnya-attack-cutout.png';
import opponentLevel7DefaultImage from './assets/opponent-level7-default.png';
import opponentLevel7ArnyaDefaultImage from './assets/opponent-level7-arnya-default-cutout.png';
import opponentLevel7HitImage from './assets/opponent-level7-hit.png';
import opponentLevel7ArnyaHitImage from './assets/opponent-level7-arnya-hit-cutout.png';
import opponentLevel8AttackImage from './assets/opponent-level8-attack.png';
import opponentLevel8DefaultImage from './assets/opponent-level8-default.png';
import opponentLevel8HitImage from './assets/opponent-level8-hit.png';
import unit1Level1OlrapoAttackImage from './assets/unit1-level1-olrapo-attack.png';
import unit1Level1OlrapoDefaultImage from './assets/unit1-level1-olrapo-default.png';
import unit1Level1OlrapoDefeatSceneImage from './assets/unit1-level1-olrapo-defeat-scene.jpeg';
import unit1Level1OlrapoHitImage from './assets/unit1-level1-olrapo-hit.png';
import unit1Level2MarimarioAttackImage from './assets/unit1-level2-marimario-attack.png';
import unit1Level2MarimarioDefaultImage from './assets/unit1-level2-marimario-default.png';
import unit1Level2MarimarioDefeatSceneImage from './assets/unit1-level2-marimario-defeat-scene.jpeg';
import unit1Level2MarimarioHitImage from './assets/unit1-level2-marimario-hit.png';
import unit1Level3HoppangboyAttackImage from './assets/unit1-level3-hoppangboy-attack.png';
import unit1Level3HoppangboyDefaultImage from './assets/unit1-level3-hoppangboy-default.png';
import unit1Level3HoppangboyDefeatSceneImage from './assets/unit1-level3-hoppangboy-defeat-scene.jpeg';
import unit1Level3HoppangboyHitImage from './assets/unit1-level3-hoppangboy-hit.png';
import unit1Level4DogPigToastAttackImage from './assets/unit1-level4-dog-pig-toast-attack.png';
import unit1Level4DogPigToastDefaultImage from './assets/unit1-level4-dog-pig-toast-default.png';
import unit1Level4DogPigToastDefeatSceneImage from './assets/unit1-level4-dog-pig-toast-defeat-scene.jpeg';
import unit1Level4DogPigToastHitImage from './assets/unit1-level4-dog-pig-toast-hit.png';
import unit1Level5PenguinsuAttackImage from './assets/unit1-level5-penguinsu-attack.png';
import unit1Level5PenguinsuDefaultImage from './assets/unit1-level5-penguinsu-default.png';
import unit1Level5PenguinsuDefeatSceneImage from './assets/unit1-level5-penguinsu-defeat-scene.jpeg';
import unit1Level5PenguinsuHitImage from './assets/unit1-level5-penguinsu-hit.png';
import unit1Level6MetamonAttackImage from './assets/unit1-level6-metamon-attack.png';
import unit1Level6MetamonDefaultImage from './assets/unit1-level6-metamon-default.png';
import unit1Level6MetamonDefeatSceneImage from './assets/unit1-level6-metamon-defeat-scene.jpeg';
import unit1Level6MetamonHitImage from './assets/unit1-level6-metamon-hit.png';
import unit1Level6MetamonTransformImage from './assets/unit1-level6-metamon-transform.png';
import unit1Level7MetagomaAttackImage from './assets/unit1-level7-metagoma-attack.png';
import unit1Level7MetagomaDefaultImage from './assets/unit1-level7-metagoma-default.png';
import unit1Level7MetagomaDefeatSceneImage from './assets/unit1-level7-metagoma-defeat-scene.jpeg';
import unit1Level7MetagomaHitImage from './assets/unit1-level7-metagoma-hit.png';
import unit1Level8CaterpillarAttackImage from './assets/unit1-level8-caterpillar-attack.png';
import unit1Level8CaterpillarDefaultImage from './assets/unit1-level8-caterpillar-default.png';
import unit1Level8CaterpillarDefeatSceneImage from './assets/unit1-level8-caterpillar-defeat-scene.png';
import unit1Level8CaterpillarHitImage from './assets/unit1-level8-caterpillar-hit.png';
import opponentLevel9AttackImage from './assets/opponent-level9-attack.png';
import opponentLevel9DefaultImage from './assets/opponent-level9-default.png';
import opponentLevel9HitImage from './assets/opponent-level9-hit.png';
import unit1Level9ButterflyAttackImage from './assets/unit1-level9-butterfly-attack.png';
import unit1Level9ButterflyDefaultImage from './assets/unit1-level9-butterfly-default.png';
import unit1Level9ButterflyDefeatSceneImage from './assets/unit1-level9-butterfly-defeat-scene.png';
import unit1Level9ButterflyHitImage from './assets/unit1-level9-butterfly-hit.png';
import unit3Level1YorsiAttackImage from './assets/unit3-level1-yorsi-attack.png';
import unit3Level1YorsiDefaultImage from './assets/unit3-level1-yorsi-default.png';
import unit3Level1YorsiDefeatSceneImage from './assets/unit3-level1-yorsi-defeat-scene.png';
import unit3Level1YorsiHitImage from './assets/unit3-level1-yorsi-hit.png';
import unit3Level2JjeojjeomiAttackImage from './assets/unit3-level2-jjeojjeomi-attack.png';
import unit3Level2JjeojjeomiDefaultImage from './assets/unit3-level2-jjeojjeomi-default.png';
import unit3Level2JjeojjeomiDefeatSceneImage from './assets/unit3-level2-jjeojjeomi-defeat-scene.png';
import unit3Level2JjeojjeomiHitImage from './assets/unit3-level2-jjeojjeomi-hit.png';
import unit3Level3BbangAttackImage from './assets/unit3-level3-bbang-attack.png';
import unit3Level3BbangDefaultImage from './assets/unit3-level3-bbang-default.png';
import unit3Level3BbangDefeatSceneImage from './assets/unit3-level3-bbang-defeat-scene.png';
import unit3Level3BbangHitImage from './assets/unit3-level3-bbang-hit.png';
import unit3Level4HeartpingAttackImage from './assets/unit3-level4-heartping-attack.png';
import unit3Level4HeartpingDefaultImage from './assets/unit3-level4-heartping-default.png';
import unit3Level4HeartpingDefeatSceneImage from './assets/unit3-level4-heartping-defeat-scene.png';
import unit3Level4HeartpingHitImage from './assets/unit3-level4-heartping-hit.png';
import unit3Level5TraleroAttackImage from './assets/unit3-level5-tralero-attack.png';
import unit3Level5TraleroDefaultImage from './assets/unit3-level5-tralero-default.png';
import unit3Level5TraleroDefeatSceneImage from './assets/unit3-level5-tralero-defeat-scene.png';
import unit3Level5TraleroHitImage from './assets/unit3-level5-tralero-hit.png';
import unit3Level6DeongdeongiDetectiveAttackImage from './assets/unit3-level6-deongdeongi-detective-attack.png';
import unit3Level6DeongdeongiDetectiveDefaultImage from './assets/unit3-level6-deongdeongi-detective-default.png';
import unit3Level6DeongdeongiDetectiveDefeatSceneImage from './assets/unit3-level6-deongdeongi-detective-defeat-scene.png';
import unit3Level6DeongdeongiDetectiveHitImage from './assets/unit3-level6-deongdeongi-detective-hit.png';
import unit3Level7MochiengelAttackImage from './assets/unit3-level7-mochiengel-attack.png';
import unit3Level7MochiengelDefaultImage from './assets/unit3-level7-mochiengel-default.png';
import unit3Level7MochiengelDefeatSceneImage from './assets/unit3-level7-mochiengel-defeat-scene.png';
import unit3Level7MochiengelHitImage from './assets/unit3-level7-mochiengel-hit.png';
import unit3Level8LabulabuAttackImage from './assets/unit3-level8-labulabu-attack.png';
import unit3Level8LabulabuDefaultImage from './assets/unit3-level8-labulabu-default.png';
import unit3Level8LabulabuDefeatSceneImage from './assets/unit3-level8-labulabu-defeat-scene.png';
import unit3Level8LabulabuHitImage from './assets/unit3-level8-labulabu-hit.png';
import unit3Level9GimgangrimAttackImage from './assets/unit3-level9-gimgangrim-attack.jpeg';
import unit3Level9GimgangrimDefaultImage from './assets/unit3-level9-gimgangrim-default.jpeg';
import unit3Level9GimgangrimDefeatSceneImage from './assets/unit3-level9-gimgangrim-defeat-scene.jpeg';
import unit3Level9GimgangrimHitImage from './assets/unit3-level9-gimgangrim-hit.jpeg';
import unit3Level10RobloxAttackImage from './assets/unit3-level10-roblox-attack.jpeg';
import unit3Level10RobloxDefaultImage from './assets/unit3-level10-roblox-default.jpeg';
import unit3Level10RobloxDefeatSceneImage from './assets/unit3-level10-roblox-defeat-scene.jpeg';
import unit3Level10RobloxHitImage from './assets/unit3-level10-roblox-hit.jpeg';
import unit3Level11EnglishBirdAttackImage from './assets/unit3-level11-english-bird-attack.jpeg';
import unit3Level11EnglishBirdDefaultImage from './assets/unit3-level11-english-bird-default.jpeg';
import unit3Level11EnglishBirdDefeatSceneImage from './assets/unit3-level11-english-bird-defeat-scene.jpeg';
import unit3Level11EnglishBirdHitImage from './assets/unit3-level11-english-bird-hit.jpeg';
import unit3Level12AkmagomaAttackImage from './assets/unit3-level12-akmagoma-attack.jpeg';
import unit3Level12AkmagomaDefaultImage from './assets/unit3-level12-akmagoma-default.jpeg';
import unit3Level12AkmagomaDefeatSceneImage from './assets/unit3-level12-akmagoma-defeat-scene.jpeg';
import unit3Level12AkmagomaHitImage from './assets/unit3-level12-akmagoma-hit.jpeg';
import { installReadingActivityBlocker } from './readingActivityBlocker';

installReadingActivityBlocker();

const READING_ACTIVITY_START_HOUR = 8;
const READING_ACTIVITY_START_MINUTE = 0;
const READING_ACTIVITY_END_HOUR = 8;
const READING_ACTIVITY_END_MINUTE = 50;

const READING_ACTIVITY_BLOCK_WINDOWS = [
  {
    startHour: READING_ACTIVITY_START_HOUR,
    startMinute: READING_ACTIVITY_START_MINUTE,
    endHour: READING_ACTIVITY_END_HOUR,
    endMinute: READING_ACTIVITY_END_MINUTE,
  },
] as const;

function isReadingActivityTime(date = new Date()) {
  const minutesFromMidnight = date.getHours() * 60 + date.getMinutes();
  return READING_ACTIVITY_BLOCK_WINDOWS.some((blockWindow) => {
    const startMinutes = blockWindow.startHour * 60 + blockWindow.startMinute;
    const endMinutes = blockWindow.endHour * 60 + blockWindow.endMinute;
    return minutesFromMidnight >= startMinutes && minutesFromMidnight < endMinutes;
  });
}

function getMillisecondsUntilNextReadingActivityBoundary(date = new Date()) {
  const nextBoundaries = READING_ACTIVITY_BLOCK_WINDOWS.flatMap((blockWindow) => [
    [blockWindow.startHour, blockWindow.startMinute],
    [blockWindow.endHour, blockWindow.endMinute],
  ] as const)
    .map(([hour, minute]) => {
      const boundary = new Date(date);
      boundary.setHours(hour, minute, 0, 0);
      if (boundary.getTime() <= date.getTime()) {
        boundary.setDate(boundary.getDate() + 1);
      }
      return boundary.getTime() - date.getTime();
    })
    .sort((a, b) => a - b);

  return Math.max(1_000, nextBoundaries[0] ?? 60_000);
}

type GameState = 'start' | 'unitSelect' | 'playing' | 'win' | 'lose';

type BattleDifficulty = 'easy' | 'normal' | 'hard';

type LearningUnitId = 'unit1' | 'unit2' | 'unit3';

type ProblemKind = 'equation' | 'story' | 'builder' | 'measurement' | 'distanceMap' | 'distanceWorksheet' | 'clockReading' | 'timeAddition' | 'shapeDraw' | 'shapeRain';
type MeasurementObjectKind =
  | 'seed'
  | 'rice'
  | 'eraser'
  | 'leaf'
  | 'paperStrip'
  | 'stick'
  | 'pencil'
  | 'paperClip'
  | 'toothpick'
  | 'crayon'
  | 'chalk'
  | 'chocolate';
type DistanceEstimationStrategy = 'compare' | 'chunk' | 'unitize';

interface BuildSlotConfig {
  id: string;
  label: string;
  digits: string[];
}

interface BuilderProblemData {
  title: string;
  instruction: string;
  helperText: string;
  badge?: string;
  op: '+' | '-';
  topTemplate: string;
  bottomTemplate: string;
  slots: BuildSlotConfig[];
  invalidMessage: string;
  validate: (left: number, right: number) => boolean;
}

interface BuilderTemplate extends BuilderProblemData {
  templateId: string;
}

interface Problem {
  text: string;
  prompt: string;
  answer: number;
  kind: ProblemKind;
  answerUnit?: string;
  requiresUnitSelection?: boolean;
  storyTable?: StoryPromptTableData;
  builder?: BuilderProblemData;
  measurement?: MeasurementProblemData;
  distanceMap?: DistanceMapProblemData;
  distanceWorksheet?: DistanceWorksheetProblemData;
  clockReading?: ClockReadingProblemData;
  timeAddition?: TimeAdditionProblemData;
  shapeDraw?: ShapeDrawProblemData;
  shapeRain?: ShapeRainProblemData;
}

interface EstimationProblem {
  prompt: string;
  question: string;
  options: number[];
  answer: number;
}

interface UnitSelectionChallenge {
  badge: string;
  prompt: string;
  options: string[];
  answer: string;
}

type ShapeDrawMode =
  | 'segment'
  | 'line'
  | 'ray'
  | 'angle'
  | 'rightAngle'
  | 'triangle'
  | 'rightTriangle'
  | 'quadrilateral'
  | 'rectangle'
  | 'square';

type ShapeDrawTask = 'draw' | 'identify';

interface ShapeDrawProblemData {
  mode: ShapeDrawMode;
  task: ShapeDrawTask;
  title: string;
  answerToken: string;
  identifyVariant?: 'fold' | 'definition' | 'rightAngleMark' | 'rightAngleCount' | 'rightAngleNames' | 'clockRightAngles' | 'rightTriangleClassify' | 'rightTriangleDefinition' | 'shapeClassify' | 'shapeDefinition';
  drawVariant?: 'point' | 'ray' | 'twoRightTriangles' | 'threeRightTriangles' | 'twoPolygons' | 'threePolygons' | 'mixedPolygons' | 'lineCompletion' | 'gacha';
  figureVariant?: number;
}

type ShapeRainShapeKind =
  | 'segment'
  | 'line'
  | 'ray'
  | 'angle'
  | 'rightAngle'
  | 'rightTriangle'
  | 'rectangle'
  | 'square';

interface ShapeRainProblemData {
  title: string;
  wave: number;
  targetCount: number;
  fallDurationMs: number;
  maxActiveDrops: number;
  spawnIntervalMs: number;
  initialDropCount: number;
  pairSpawnEvery?: number;
  shapes: ShapeRainShapeKind[];
}

const SHAPE_DRAW_MIXED_TOKEN = '__shape_draw_mixed__';
const RIGHT_ANGLE_FOLD_ANSWER_ENABLE_DELAY_MS = 8200;

const SHAPE_DRAW_ANSWER_LABELS: Record<ShapeDrawMode, string> = {
  segment: '선분',
  line: '직선',
  ray: '반직선',
  angle: '각',
  rightAngle: '직각',
  triangle: '삼각형',
  rightTriangle: '직각삼각형',
  quadrilateral: '사각형',
  rectangle: '직사각형',
  square: '정사각형',
};

const SHAPE_RAIN_LABELS: Record<ShapeRainShapeKind, string> = {
  segment: '선분',
  line: '직선',
  ray: '반직선',
  angle: '각',
  rightAngle: '직각',
  rightTriangle: '직각삼각형',
  rectangle: '직사각형',
  square: '정사각형',
};

const SHAPE_RAIN_SHAPES: ShapeRainShapeKind[] = [
  'segment',
  'line',
  'ray',
  'angle',
  'rightAngle',
  'rightTriangle',
  'rectangle',
  'square',
];

const withObjectParticle = (word: string) => {
  const lastCode = word.charCodeAt(word.length - 1);
  const hangulOffset = lastCode - 0xac00;
  const hasFinalConsonant = hangulOffset >= 0 && hangulOffset <= 11171 && hangulOffset % 28 !== 0;
  return `${word}${hasFinalConsonant ? '을' : '를'}`;
};

const UNIT1_LEVEL8_GACHA_MODES: ShapeDrawMode[] = [
  'segment',
  'line',
  'ray',
  'angle',
  'rightAngle',
  'rightTriangle',
  'rectangle',
  'square',
];
const UNIT1_LEVEL8_GACHA_ROULETTE_TICK_MS = 90;
const UNIT1_LEVEL8_GACHA_ROULETTE_DURATION_MS = 1000;

const SHAPE_READ_COMPOUND_JAMO_EXPANSIONS: Record<string, string> = {
  '\u3132': '\u3131\u3131',
  '\u3133': '\u3131\u3145',
  '\u3135': '\u3134\u3148',
  '\u3136': '\u3134\u314e',
  '\u3138': '\u3137\u3137',
  '\u313a': '\u3139\u3131',
  '\u313b': '\u3139\u3141',
  '\u313c': '\u3139\u3142',
  '\u313d': '\u3139\u3145',
  '\u313e': '\u3139\u314c',
  '\u313f': '\u3139\u314d',
  '\u3140': '\u3139\u314e',
  '\u3143': '\u3142\u3142',
  '\u3144': '\u3142\u3145',
  '\u3146': '\u3145\u3145',
};

const normalizeShapeReadAnswer = (value: string) => value
  .replace(/번/g, '')
  .replace(/[\s,，、./;:|·]+/g, '')
  .trim()
  .replace(/[ㄲㄳㄵㄶㄸㄺㄻㄼㄽㄾㄿㅀㅃㅄㅆ]/g, (char) => SHAPE_READ_COMPOUND_JAMO_EXPANSIONS[char] ?? char);

const normalizeShapeRainAnswer = (value: string) => normalizeShapeReadAnswer(value)
  .replace(/도형$/g, '');

const SHAPE_READ_FIRST_POINT_LABEL = '\u3131';
const SHAPE_READ_SECOND_POINT_LABEL = '\u3134';
const SHAPE_READ_LINE_LABEL_SETS = [
  ['\u3131', '\u3134'],
  ['\u3137', '\u3139'],
  ['\u3141', '\u3142'],
  ['\u3145', '\u3147'],
  ['\u3134', '\u3141'],
  ['\u3131', '\u3137'],
  ['\u3139', '\u3142'],
  ['\u3141', '\u3145'],
  ['\u3142', '\u3147'],
  ['\u3134', '\u3139'],
  ['\u3137', '\u3145'],
  ['\u3131', '\u3141'],
] as const;
const SHAPE_READ_DEFAULT_ANGLE_LABELS = ['\u3131', '\u3134', '\u3137'] as const;
const SHAPE_READ_ANGLE_LABEL_SETS = [
  ['\u3131', '\u3134', '\u3137'],
  ['\u3137', '\u3134', '\u3131'],
  ['\u3134', '\u3137', '\u3139'],
  ['\u3131', '\u3137', '\u3141'],
  ['\u3139', '\u3141', '\u3131'],
  ['\u3141', '\u3139', '\u3134'],
  ['\u3142', '\u3145', '\u3147'],
  ['\u3131', '\u3141', '\u3142'],
  ['\u3137', '\u3142', '\u3145'],
  ['\u3139', '\u3134', '\u3147'],
  ['\u3141', '\u3137', '\u3131'],
  ['\u3145', '\u3142', '\u3139'],
] as const;

const getShapeReadLineLabels = (figureVariant = 0) => SHAPE_READ_LINE_LABEL_SETS[figureVariant % SHAPE_READ_LINE_LABEL_SETS.length];
const getShapeReadAngleLabels = (figureVariant = 0) => SHAPE_READ_ANGLE_LABEL_SETS[figureVariant % SHAPE_READ_ANGLE_LABEL_SETS.length];

const getShapeReadAnswerOptions = (mode: ShapeDrawMode, figureVariant = 0) => {
  const label = SHAPE_DRAW_ANSWER_LABELS[mode];
  const [firstPointLabel, secondPointLabel] = getShapeReadLineLabels(figureVariant);
  const forward = `${firstPointLabel}${secondPointLabel}`;
  const backward = `${secondPointLabel}${firstPointLabel}`;

  if (mode === 'segment' || mode === 'line') {
    return [`${label}${forward}`, `${label}${backward}`];
  }

  if (mode === 'ray') {
    return [`${label}${forward}`];
  }

  if (mode === 'angle') {
    const [first, vertex, last] = getShapeReadAngleLabels(figureVariant) ?? SHAPE_READ_DEFAULT_ANGLE_LABELS;
    return [`${label}${first}${vertex}${last}`, `${label}${last}${vertex}${first}`];
  }

  return [label];
};

const getShapeReadAnswerToken = (mode: ShapeDrawMode, figureVariant = 0) => getShapeReadAnswerOptions(mode, figureVariant).join('|');

const RIGHT_ANGLE_MARK_ANSWER_TOKENS = [
  '8|8개',
  '10|10개',
  '7|7개',
  '9|9개',
  '11|11개',
  '6|6개',
  '12|12개',
  '5|5개',
  '13|13개',
  '14|14개',
  '4|4개',
  '15|15개',
  '16|16개',
  '3|3개',
] as const;

const RIGHT_ANGLE_COUNT_ANSWERS = [
  [1, 2, 4],
  [4, 1, 2],
  [2, 4, 1],
  [4, 2, 1],
  [1, 4, 2],
  [2, 1, 4],
  [0, 1, 4],
  [4, 0, 2],
  [2, 3, 4],
  [3, 1, 0],
  [4, 3, 1],
  [0, 2, 3],
  [3, 4, 0],
  [1, 3, 2],
] as const;

const RIGHT_ANGLE_NAME_PROBLEM_VARIANTS = [
  {
    vertex: { x: 320, y: 178, label: '\u3142' },
    rays: [
      { x: 252, y: 64, label: '\u3131' },
      { x: 192, y: 144, label: '\u3134' },
      { x: 288, y: 296, label: '\u3137' },
      { x: 446, y: 102, label: '\u3139' },
      { x: 430, y: 252, label: '\u3141' },
    ],
    answerGroups: [
      ['각ㄱㅂㄹ', '각ㄹㅂㄱ'],
      ['각ㄴㅂㄷ', '각ㄷㅂㄴ'],
    ],
  },
  {
    vertex: { x: 320, y: 178, label: '\u3145' },
    rays: [
      { x: 320, y: 54, label: '\u3131' },
      { x: 456, y: 178, label: '\u3134' },
      { x: 184, y: 178, label: '\u3137' },
      { x: 320, y: 302, label: '\u3139' },
      { x: 432, y: 80, label: '\u3141' },
    ],
    answerGroups: [
      ['각ㄱㅅㄴ', '각ㄴㅅㄱ'],
      ['각ㄴㅅㄹ', '각ㄹㅅㄴ'],
      ['각ㄹㅅㄷ', '각ㄷㅅㄹ'],
      ['각ㄷㅅㄱ', '각ㄱㅅㄷ'],
    ],
  },
  {
    vertex: { x: 320, y: 178, label: '\u3137' },
    rays: [
      { x: 188, y: 178, label: '\u3131' },
      { x: 320, y: 54, label: '\u3134' },
      { x: 452, y: 178, label: '\u3141' },
      { x: 320, y: 302, label: '\u3139' },
      { x: 430, y: 82, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㄷㄴ', '각ㄴㄷㄱ'],
      ['각ㄴㄷㅁ', '각ㅁㄷㄴ'],
      ['각ㅁㄷㄹ', '각ㄹㄷㅁ'],
      ['각ㄹㄷㄱ', '각ㄱㄷㄹ'],
    ],
  },
  {
    vertex: { x: 300, y: 186, label: '\u3134' },
    rays: [
      { x: 300, y: 58, label: '\u3131' },
      { x: 428, y: 186, label: '\u3137' },
      { x: 168, y: 186, label: '\u3139' },
      { x: 300, y: 314, label: '\u3141' },
      { x: 408, y: 84, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㄴㄷ', '각ㄷㄴㄱ'],
      ['각ㄷㄴㅁ', '각ㅁㄴㄷ'],
      ['각ㅁㄴㄹ', '각ㄹㄴㅁ'],
      ['각ㄹㄴㄱ', '각ㄱㄴㄹ'],
    ],
  },
  {
    vertex: { x: 332, y: 178, label: '\u3139' },
    rays: [
      { x: 210, y: 68, label: '\u3131' },
      { x: 442, y: 56, label: '\u3134' },
      { x: 454, y: 288, label: '\u3137' },
      { x: 220, y: 300, label: '\u3141' },
      { x: 168, y: 180, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㄹㄴ', '각ㄴㄹㄱ'],
      ['각ㄴㄹㄷ', '각ㄷㄹㄴ'],
      ['각ㄷㄹㅁ', '각ㅁㄹㄷ'],
      ['각ㅁㄹㄱ', '각ㄱㄹㅁ'],
    ],
  },
  {
    vertex: { x: 312, y: 178, label: '\u3141' },
    rays: [
      { x: 196, y: 76, label: '\u3131' },
      { x: 414, y: 62, label: '\u3134' },
      { x: 428, y: 280, label: '\u3137' },
      { x: 210, y: 294, label: '\u3139' },
      { x: 480, y: 178, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㅁㄴ', '각ㄴㅁㄱ'],
      ['각ㄴㅁㄷ', '각ㄷㅁㄴ'],
      ['각ㄷㅁㄹ', '각ㄹㅁㄷ'],
      ['각ㄹㅁㄱ', '각ㄱㅁㄹ'],
    ],
  },
  {
    vertex: { x: 318, y: 182, label: '\u3142' },
    rays: [
      { x: 318, y: 46, label: '\u3131' },
      { x: 466, y: 182, label: '\u3134' },
      { x: 318, y: 318, label: '\u3137' },
      { x: 170, y: 182, label: '\u3139' },
      { x: 438, y: 76, label: '\u3145' },
    ],
    answerGroups: [
      ['각ㄱㅂㄴ', '각ㄴㅂㄱ'],
      ['각ㄴㅂㄷ', '각ㄷㅂㄴ'],
      ['각ㄷㅂㄹ', '각ㄹㅂㄷ'],
      ['각ㄹㅂㄱ', '각ㄱㅂㄹ'],
    ],
  },
  {
    vertex: { x: 328, y: 174, label: '\u3145' },
    rays: [
      { x: 238, y: 54, label: '\u3131' },
      { x: 448, y: 84, label: '\u3134' },
      { x: 418, y: 294, label: '\u3137' },
      { x: 208, y: 264, label: '\u3139' },
      { x: 506, y: 174, label: '\u3141' },
    ],
    answerGroups: [
      ['각ㄱㅅㄴ', '각ㄴㅅㄱ'],
      ['각ㄴㅅㄷ', '각ㄷㅅㄴ'],
      ['각ㄷㅅㄹ', '각ㄹㅅㄷ'],
      ['각ㄹㅅㄱ', '각ㄱㅅㄹ'],
    ],
  },
  {
    vertex: { x: 304, y: 180, label: '\u3137' },
    rays: [
      { x: 184, y: 80, label: '\u3131' },
      { x: 404, y: 60, label: '\u3134' },
      { x: 424, y: 280, label: '\u3139' },
      { x: 204, y: 300, label: '\u3141' },
      { x: 304, y: 44, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㄷㄴ', '각ㄴㄷㄱ'],
      ['각ㄴㄷㄹ', '각ㄹㄷㄴ'],
      ['각ㄹㄷㅁ', '각ㅁㄷㄹ'],
      ['각ㅁㄷㄱ', '각ㄱㄷㅁ'],
    ],
  },
  {
    vertex: { x: 322, y: 186, label: '\u3134' },
    rays: [
      { x: 322, y: 54, label: '\u3131' },
      { x: 458, y: 186, label: '\u3137' },
      { x: 322, y: 318, label: '\u3139' },
      { x: 186, y: 186, label: '\u3141' },
      { x: 214, y: 82, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㄴㄷ', '각ㄷㄴㄱ'],
      ['각ㄷㄴㄹ', '각ㄹㄴㄷ'],
      ['각ㄹㄴㅁ', '각ㅁㄴㄹ'],
      ['각ㅁㄴㄱ', '각ㄱㄴㅁ'],
    ],
  },
  {
    vertex: { x: 316, y: 176, label: '\u3139' },
    rays: [
      { x: 196, y: 66, label: '\u3131' },
      { x: 426, y: 56, label: '\u3134' },
      { x: 436, y: 286, label: '\u3137' },
      { x: 206, y: 296, label: '\u3141' },
      { x: 150, y: 176, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㄹㄴ', '각ㄴㄹㄱ'],
      ['각ㄴㄹㄷ', '각ㄷㄹㄴ'],
      ['각ㄷㄹㅁ', '각ㅁㄹㄷ'],
      ['각ㅁㄹㄱ', '각ㄱㄹㅁ'],
    ],
  },
  {
    vertex: { x: 310, y: 184, label: '\u3141' },
    rays: [
      { x: 220, y: 64, label: '\u3131' },
      { x: 430, y: 94, label: '\u3134' },
      { x: 400, y: 304, label: '\u3137' },
      { x: 190, y: 274, label: '\u3139' },
      { x: 310, y: 48, label: '\u3142' },
    ],
    answerGroups: [
      ['각ㄱㅁㄴ', '각ㄴㅁㄱ'],
      ['각ㄴㅁㄷ', '각ㄷㅁㄴ'],
      ['각ㄷㅁㄹ', '각ㄹㅁㄷ'],
      ['각ㄹㅁㄱ', '각ㄱㅁㄹ'],
    ],
  },
] as const;

const CLOCK_RIGHT_ANGLE_OPTION_VARIANTS = [
  [1, 3, 6, 9, 12],
  [2, 3, 5, 9, 11],
  [3, 4, 7, 9, 10],
  [3, 6, 8, 9, 12],
  [1, 3, 7, 9, 11],
  [2, 3, 6, 8, 9],
  [3, 5, 9, 10, 12],
  [1, 3, 4, 8, 9],
  [2, 3, 7, 9, 12],
  [3, 6, 9, 10, 11],
  [1, 3, 5, 6, 9],
  [3, 4, 8, 9, 12],
] as const;

const RIGHT_TRIANGLE_CLASSIFY_VARIANTS = [
  [
    { points: '38,132 158,132 38,42', isRightTriangle: true },
    { points: '94,28 34,132 158,132', isRightTriangle: false },
    { points: '38,132 158,132 158,42', isRightTriangle: true },
    { points: '48,124 108,34 166,118', isRightTriangle: false },
  ],
  [
    { points: '92,30 28,124 166,132', isRightTriangle: false },
    { points: '40,132 40,44 154,132', isRightTriangle: true },
    { points: '42,120 110,34 166,104', isRightTriangle: false },
    { points: '150,42 150,132 34,132', isRightTriangle: true },
  ],
  [
    { points: '36,132 156,132 36,38', isRightTriangle: true },
    { points: '40,38 40,132 160,38', isRightTriangle: true },
    { points: '96,28 32,130 164,126', isRightTriangle: false },
    { points: '50,126 118,34 166,112', isRightTriangle: false },
  ],
  [
    { points: '154,42 154,132 34,132', isRightTriangle: true },
    { points: '42,118 104,28 164,122', isRightTriangle: false },
    { points: '92,30 34,126 158,132', isRightTriangle: false },
    { points: '40,40 40,132 158,132', isRightTriangle: true },
  ],
  [
    { points: '48,124 108,30 164,118', isRightTriangle: false },
    { points: '42,42 42,132 158,42', isRightTriangle: true },
    { points: '38,132 158,132 38,54', isRightTriangle: true },
    { points: '94,30 28,132 166,124', isRightTriangle: false },
  ],
  [
    { points: '36,132 154,132 154,38', isRightTriangle: true },
    { points: '92,28 34,128 162,132', isRightTriangle: false },
    { points: '50,124 116,34 166,110', isRightTriangle: false },
    { points: '42,38 42,132 160,132', isRightTriangle: true },
  ],
] as const;

const getRightTriangleClassifyItems = (figureVariant = 0) =>
  RIGHT_TRIANGLE_CLASSIFY_VARIANTS[figureVariant % RIGHT_TRIANGLE_CLASSIFY_VARIANTS.length];

const getRightTriangleClassifyCorrectNumbers = (figureVariant = 0) =>
  getRightTriangleClassifyItems(figureVariant)
    .map((item, index) => item.isRightTriangle ? index + 1 : null)
    .filter((number): number is number => number !== null);

const createRightTriangleClassifyAnswerToken = (figureVariant = 0) => {
  const correctNumbers = getRightTriangleClassifyCorrectNumbers(figureVariant);
  const compactAnswer = correctNumbers.join('');
  const reversedCompactAnswer = [...correctNumbers].reverse().join('');
  const commaAnswer = correctNumbers.join(',');
  const reversedCommaAnswer = [...correctNumbers].reverse().join(',');
  const numberedAnswer = correctNumbers.map((number) => `${number}번`).join('');
  const reversedNumberedAnswer = [...correctNumbers].reverse().map((number) => `${number}번`).join('');

  return [
    compactAnswer,
    reversedCompactAnswer,
    commaAnswer,
    reversedCommaAnswer,
    numberedAnswer,
    reversedNumberedAnswer,
  ].join('|');
};

const getRightTriangleClassifyCorrectNumberText = (figureVariant = 0) =>
  getRightTriangleClassifyCorrectNumbers(figureVariant)
    .map((number) => `${number}번`)
    .join('과 ');

const RIGHT_TRIANGLE_CLASSIFY_ANSWER_TOKENS = RIGHT_TRIANGLE_CLASSIFY_VARIANTS.map((_, index) =>
  createRightTriangleClassifyAnswerToken(index)
);
const SHAPE_CLASSIFY_CORRECT_TOKEN = '__shape_classify_correct__';
const SHAPE_CLASSIFY_INCORRECT_TOKEN = '__shape_classify_incorrect__';

type ShapeClassifyItem = {
  points: string;
  isTarget: boolean;
  rightAngleCount?: 0 | 1 | 2 | 3 | 4;
};

const RECTANGLE_CLASSIFY_VARIANTS: ShapeClassifyItem[][] = [
  [
    { points: '96,38 182,82 96,126 10,82', isTarget: false, rightAngleCount: 0 },
    { points: '42,132 42,42 148,76 168,132', isTarget: false, rightAngleCount: 1 },
    { points: '32,42 158,42 124,132 32,132', isTarget: false, rightAngleCount: 2 },
    { points: '34,44 156,44 156,126 34,126', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '98,36 184,78 98,122 12,78', isTarget: false, rightAngleCount: 0 },
    { points: '46,132 46,38 146,72 164,132', isTarget: false, rightAngleCount: 1 },
    { points: '38,36 158,36 126,134 38,134', isTarget: false, rightAngleCount: 2 },
    { points: '42,42 152,42 152,132 42,132', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '96,38 184,80 96,122 8,80', isTarget: false, rightAngleCount: 0 },
    { points: '48,130 48,44 138,68 160,130', isTarget: false, rightAngleCount: 1 },
    { points: '28,54 162,54 136,126 28,126', isTarget: false, rightAngleCount: 2 },
    { points: '28,54 162,54 162,122 28,122', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '94,32 178,76 94,120 10,76', isTarget: false, rightAngleCount: 0 },
    { points: '42,132 42,42 148,76 168,132', isTarget: false, rightAngleCount: 1 },
    { points: '32,42 158,42 124,132 32,132', isTarget: false, rightAngleCount: 2 },
    { points: '34,44 156,44 156,126 34,126', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '104,42 184,82 104,122 24,82', isTarget: false, rightAngleCount: 0 },
    { points: '46,132 46,38 146,72 164,132', isTarget: false, rightAngleCount: 1 },
    { points: '38,36 158,36 126,134 38,134', isTarget: false, rightAngleCount: 2 },
    { points: '42,42 152,42 152,132 42,132', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '88,30 172,80 88,130 4,80', isTarget: false, rightAngleCount: 0 },
    { points: '48,130 48,44 138,68 160,130', isTarget: false, rightAngleCount: 1 },
    { points: '28,54 162,54 136,126 28,126', isTarget: false, rightAngleCount: 2 },
    { points: '28,54 162,54 162,122 28,122', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '100,28 180,72 100,116 20,72', isTarget: false, rightAngleCount: 0 },
    { points: '42,132 42,42 148,76 168,132', isTarget: false, rightAngleCount: 1 },
    { points: '32,42 158,42 124,132 32,132', isTarget: false, rightAngleCount: 2 },
    { points: '34,44 156,44 156,126 34,126', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '92,44 184,84 92,124 0,84', isTarget: false, rightAngleCount: 0 },
    { points: '46,132 46,38 146,72 164,132', isTarget: false, rightAngleCount: 1 },
    { points: '38,36 158,36 126,134 38,134', isTarget: false, rightAngleCount: 2 },
    { points: '42,42 152,42 152,132 42,132', isTarget: true, rightAngleCount: 4 },
  ],
  [
    { points: '106,34 186,82 106,130 26,82', isTarget: false, rightAngleCount: 0 },
    { points: '48,130 48,44 138,68 160,130', isTarget: false, rightAngleCount: 1 },
    { points: '28,54 162,54 136,126 28,126', isTarget: false, rightAngleCount: 2 },
    { points: '28,54 162,54 162,122 28,122', isTarget: true, rightAngleCount: 4 },
  ],
];

const SQUARE_CLASSIFY_VARIANTS: ShapeClassifyItem[][] = [
  [
    { points: '54,34 142,34 142,122 54,122', isTarget: true },
    { points: '28,58 166,58 166,114 28,114', isTarget: false },
    { points: '60,38 140,38 140,118 60,118', isTarget: true },
    { points: '48,46 154,46 132,132 26,132', isTarget: false },
  ],
  [
    { points: '50,36 138,36 138,124 50,124', isTarget: true },
    { points: '72,20 120,20 120,144 72,144', isTarget: false },
    { points: '56,40 136,40 136,120 56,120', isTarget: true },
    { points: '34,50 156,50 126,130 64,130', isTarget: false },
  ],
  [
    { points: '52,34 140,34 140,122 52,122', isTarget: true },
    { points: '30,52 166,52 166,120 30,120', isTarget: false },
    { points: '58,42 138,42 138,122 58,122', isTarget: true },
    { points: '40,44 150,44 122,136 68,136', isTarget: false },
  ],
  [
    { points: '48,30 138,30 138,120 48,120', isTarget: true },
    { points: '34,48 160,48 160,116 34,116', isTarget: false },
    { points: '66,40 136,40 136,110 66,110', isTarget: true },
    { points: '92,28 158,84 92,140 26,84', isTarget: false },
  ],
  [
    { points: '62,28 150,28 150,116 62,116', isTarget: true },
    { points: '40,34 146,48 130,128 24,114', isTarget: false },
    { points: '44,44 122,44 122,122 44,122', isTarget: true },
    { points: '30,64 166,64 142,128 54,128', isTarget: false },
  ],
  [
    { points: '50,26 134,26 134,110 50,110', isTarget: true },
    { points: '72,24 128,24 128,140 72,140', isTarget: false },
    { points: '66,46 144,46 144,124 66,124', isTarget: true },
    { points: '38,42 152,42 136,122 54,122', isTarget: false },
  ],
  [
    { points: '42,36 132,36 132,126 42,126', isTarget: true },
    { points: '50,28 142,60 112,138 20,106', isTarget: false },
    { points: '72,44 140,44 140,112 72,112', isTarget: true },
    { points: '34,52 158,52 158,118 34,118', isTarget: false },
  ],
  [
    { points: '58,32 140,32 140,114 58,114', isTarget: true },
    { points: '92,22 150,80 92,138 34,80', isTarget: false },
    { points: '36,42 116,42 116,122 36,122', isTarget: true },
    { points: '44,40 152,58 138,128 30,110', isTarget: false },
  ],
  [
    { points: '46,28 130,28 130,112 46,112', isTarget: true },
    { points: '30,46 164,46 164,116 30,116', isTarget: false },
    { points: '76,44 146,44 146,114 76,114', isTarget: true },
    { points: '42,38 144,38 118,132 68,132', isTarget: false },
  ],
  [
    { points: '60,36 142,36 142,118 60,118', isTarget: true },
    { points: '40,30 152,52 132,126 20,104', isTarget: false },
    { points: '42,50 112,50 112,120 42,120', isTarget: true },
    { points: '68,22 126,22 126,142 68,142', isTarget: false },
  ],
  [
    { points: '52,40 134,40 134,122 52,122', isTarget: true },
    { points: '36,56 158,56 142,126 52,126', isTarget: false },
    { points: '72,26 144,26 144,98 72,98', isTarget: true },
    { points: '92,30 158,86 92,142 26,86', isTarget: false },
  ],
  [
    { points: '40,34 122,34 122,116 40,116', isTarget: true },
    { points: '58,26 146,26 146,126 58,126', isTarget: false },
    { points: '76,46 146,46 146,116 76,116', isTarget: true },
    { points: '34,42 154,42 126,130 62,130', isTarget: false },
  ],
];

const getShapeClassifyItems = (mode: ShapeDrawMode, figureVariant = 0): ShapeClassifyItem[] => {
  if (mode === 'rectangle') {
    return [...RECTANGLE_CLASSIFY_VARIANTS[figureVariant % RECTANGLE_CLASSIFY_VARIANTS.length]];
  }
  if (mode === 'square') {
    return [...SQUARE_CLASSIFY_VARIANTS[figureVariant % SQUARE_CLASSIFY_VARIANTS.length]];
  }
  return getRightTriangleClassifyItems(figureVariant).map(({ points, isRightTriangle }) => ({
    points,
    isTarget: isRightTriangle,
  }));
};

const SHAPE_CLASSIFY_ANSWER_TOKENS: Record<'rectangle' | 'square', string[]> = {
  rectangle: RECTANGLE_CLASSIFY_VARIANTS.map(() => SHAPE_CLASSIFY_CORRECT_TOKEN),
  square: SQUARE_CLASSIFY_VARIANTS.map(() => SHAPE_CLASSIFY_CORRECT_TOKEN),
};

const SHAPE_DEFINITION_VARIANTS: Record<'rectangle' | 'square', Array<{ blankTarget: string; lines: string[] }>> = {
  rectangle: [
    { blankTarget: 'fourRightAngles', lines: ['[네 각]이 모두 직각인 사각형을', '[직사각형]이라고 합니다.'] },
    { blankTarget: 'rectangle', lines: ['네 각이 모두 직각인 사각형을', '[직사각형]이라고 합니다.'] },
    { blankTarget: 'fourRightAngles', lines: ['사각형에서 [네 각]이 모두 직각이면', '그 사각형은 직사각형입니다.'] },
  ],
  square: [
    { blankTarget: 'fourRightAngles', lines: ['[네 각]이 모두 직각이고', '[네 변]의 길이가 모두 같은 사각형을', '[정사각형]이라고 합니다.'] },
    { blankTarget: 'fourSides', lines: ['[네 각]이 모두 직각이고', '[네 변]의 길이가 모두 같은 사각형을', '[정사각형]이라고 합니다.'] },
    { blankTarget: 'square', lines: ['[네 각]이 모두 직각이고', '[네 변]의 길이가 모두 같은 사각형을', '[정사각형]이라고 합니다.'] },
  ],
};

const getShapeDefinitionVariant = (mode: ShapeDrawMode, figureVariant = 0) => {
  const variants = mode === 'square' ? SHAPE_DEFINITION_VARIANTS.square : SHAPE_DEFINITION_VARIANTS.rectangle;
  return variants[figureVariant % variants.length];
};

const getShapeDefinitionAnswerToken = (mode: ShapeDrawMode, figureVariant = 0) => {
  const blankTarget = getShapeDefinitionVariant(mode, figureVariant).blankTarget;
  if (blankTarget === 'rectangle') return '직사각형';
  if (blankTarget === 'square') return '정사각형';
  if (blankTarget === 'fourSides') return '네 변|네변';
  return '네 각|네각';
};

const RIGHT_TRIANGLE_DEFINITION_VARIANTS = [
  {
    blankTarget: 'oneAngle',
    lines: ['[한 각]이 직각인 삼각형을', '[직각삼각형]이라고 합니다.'],
  },
  {
    blankTarget: 'rightTriangle',
    lines: ['한 각이 직각인 삼각형을', '[직각삼각형]이라고 합니다.'],
  },
  {
    blankTarget: 'oneAngle',
    lines: ['삼각형에서 [한 각]이 직각이면', '그 삼각형은 직각삼각형입니다.'],
  },
  {
    blankTarget: 'rightTriangle',
    lines: ['직각이 한 개 있는 삼각형을', '[직각삼각형]이라고 합니다.'],
  },
] as const;

const getRightTriangleDefinitionVariant = (figureVariant = 0) =>
  RIGHT_TRIANGLE_DEFINITION_VARIANTS[figureVariant % RIGHT_TRIANGLE_DEFINITION_VARIANTS.length];

const getRightTriangleDefinitionAnswerToken = (figureVariant = 0) =>
  getRightTriangleDefinitionVariant(figureVariant).blankTarget === 'oneAngle'
    ? '한 각|한각'
    : '직각삼각형';

const getRightAngleMarkAnswerToken = (figureVariant = 0) =>
  RIGHT_ANGLE_MARK_ANSWER_TOKENS[figureVariant % RIGHT_ANGLE_MARK_ANSWER_TOKENS.length];

const getRightAngleCountAnswerToken = (figureVariant = 0) => {
  const answers = RIGHT_ANGLE_COUNT_ANSWERS[figureVariant % RIGHT_ANGLE_COUNT_ANSWERS.length];
  return `${answers.join('')}|${answers.join(',')}|${answers.map((answer) => `${answer}개`).join('')}`;
};

const getRightAngleNamesAnswerToken = (figureVariant = 0) =>
  RIGHT_ANGLE_NAME_PROBLEM_VARIANTS[figureVariant % RIGHT_ANGLE_NAME_PROBLEM_VARIANTS.length].answerGroups
    .map((answerGroup) => answerGroup.join('|'))
    .join('&&');

const getShapeReadAnswerExample = () => '이름 쓰기';

const isShapeReadAnswerCorrect = (answer: string, answerToken: string) => {
  const normalizedAnswer = normalizeShapeReadAnswer(answer);

  if (answerToken.includes('&&')) {
    return answerToken
      .split('&&')
      .every((requiredGroup) => requiredGroup
        .split('|')
        .some((option) => normalizedAnswer.includes(normalizeShapeReadAnswer(option))));
  }

  return answerToken
    .split('|')
    .some((option) => normalizeShapeReadAnswer(option) === normalizedAnswer);
};

const isShapeReadAnswerMissingPointNames = (mode: ShapeDrawMode, answer: string) => {
  if (mode !== 'segment' && mode !== 'line' && mode !== 'ray' && mode !== 'angle') {
    return false;
  }

  return normalizeShapeReadAnswer(answer) === normalizeShapeReadAnswer(SHAPE_DRAW_ANSWER_LABELS[mode]);
};

type DistanceWorksheetInputKind = 'number' | 'place';
type DistanceWorksheetMapVariant = 'meadow' | 'river' | 'town' | 'campus' | 'orchard' | 'harbor' | 'village';

interface DistanceWorksheetLandmarkData {
  id: string;
  label: string;
  dotIndex: number;
  row: 'top' | 'bottom';
  accent: string;
  icon: 'bookstore' | 'station' | 'market' | 'fountain' | 'park' | 'bank' | 'school' | 'hospital' | 'library';
}

interface DistanceWorksheetPromptData {
  id: string;
  prefix: string;
  suffix: string;
  answer: string;
  kind: DistanceWorksheetInputKind;
  answerUnit?: string;
}

interface DistanceWorksheetReferenceData {
  fromDotIndex: number;
  toDotIndex: number;
  label: string;
}

interface DistanceWorksheetProblemData {
  title: string;
  instruction: string;
  mapVariant: DistanceWorksheetMapVariant;
  dotCount: number;
  landmarks: DistanceWorksheetLandmarkData[];
  reference: DistanceWorksheetReferenceData;
  prompt: DistanceWorksheetPromptData;
}

interface DistanceWorksheetProblemSetData {
  title: string;
  instruction: string;
  mapVariant: DistanceWorksheetMapVariant;
  dotCount: number;
  landmarks: DistanceWorksheetLandmarkData[];
  reference: DistanceWorksheetReferenceData;
  prompts: DistanceWorksheetPromptData[];
}

interface DeveloperProblemSnapshot {
  level: number;
  opponentHP: number;
  problem: Problem;
  problemCoachmark: string | null;
}

interface StoredPlayRecord {
  id: string;
  playerName: string;
  unitId: LearningUnitId;
  unitTitle: string;
  result: 'win' | 'lose';
  level: number;
  totalLevels: number;
  topic: string;
  playedAt: string;
}

interface StoredPlayRecordUnitTheme {
  cardClassName: string;
  accentClassName: string;
  progressClassName: string;
  dotClassName: string;
  labelClassName: string;
}

interface MeasurementProblemData {
  title: string;
  question: string;
  objectKind: MeasurementObjectKind;
  objectLabel: string;
  startMm: number;
  lengthMm: number;
  rulerCm: number;
}

interface ClockReadingProblemData {
  title: string;
  question: string;
  hour: number;
  minute: number;
  second: number;
  editableParts: ClockInputPart[];
}

type ClockInputPart = 'hours' | 'minutes' | 'seconds';
type ClockReadingDifficulty = 1 | 2 | 3 | 4 | 5;
type TimeAdditionMode = 'clock' | 'bar' | 'vertical' | 'story';
type TimeArithmeticOperation = '+' | '-';
interface TimeValue {
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeStoryHighlight {
  label: string;
  value: string;
}

interface StoryPromptTableData {
  headers: string[];
  rows: Array<{
    cells: string[];
  }>;
}

interface TimeAdditionProblemData {
  title: string;
  instruction: string;
  mode: TimeAdditionMode;
  operation: TimeArithmeticOperation;
  left: TimeValue;
  right: TimeValue;
  result: TimeValue;
  editableParts: ClockInputPart[];
  storyLines?: string[];
  storyHighlights?: TimeStoryHighlight[];
}

interface ClockReadingAnswerInput {
  hours: string;
  minutes: string;
  seconds: string;
}

interface DistanceMapPoint {
  x: number;
  y: number;
}

interface DistanceMapLandmarkData {
  id: string;
  label: string;
  x: number;
  y: number;
  accent: string;
  kind: 'home' | 'reference' | 'place';
}

interface DistanceEstimationBaseData {
  title: string;
  question: string;
  sentence: string;
  referenceMeters: number;
  targetLabel: string;
  targetMeters: number;
  estimatedKilometers: number;
  strategy: DistanceEstimationStrategy;
  landmarks: DistanceMapLandmarkData[];
}

interface DistanceCompareProblemData extends DistanceEstimationBaseData {
  strategy: 'compare';
  referenceRoute: DistanceMapPoint[];
  targetRoute: DistanceMapPoint[];
  compareSlotCount: number;
}

interface DistanceChunkSegmentData {
  id: string;
  color: string;
  points: DistanceMapPoint[];
  units: number;
}

interface DistanceChunkProblemData extends DistanceEstimationBaseData {
  strategy: 'chunk';
  targetRoute: DistanceMapPoint[];
  segments: DistanceChunkSegmentData[];
}

interface DistanceUnitizeProblemData extends DistanceEstimationBaseData {
  strategy: 'unitize';
  referenceRoute: DistanceMapPoint[];
  targetRoute: DistanceMapPoint[];
}

type DistanceMapProblemData =
  | DistanceCompareProblemData
  | DistanceChunkProblemData
  | DistanceUnitizeProblemData;

interface DistanceMapTokenData {
  id: number;
  slotIndex: number | null;
  x: number;
  y: number;
}

interface CharacterSpriteSet {
  attack: string;
  default: string;
  hit: string;
}

type PlayerSkinId = 'default' | 'champion' | 'wizard' | 'cape' | 'detective' | 'knight' | 'space' | 'chef' | 'pirate' | 'firefighter' | 'fairy' | 'patissier' | 'catpajama' | 'rainbowartist' | 'heartwizard' | 'eraser' | 'safety' | 'duck' | 'wolf' | 'fox' | 'ribbon' | 'babo' | 'student' | 'fish' | 'hamster' | 'pizza' | 'ghost' | 'police' | 'spain' | 'goguma' | 'baby-potato' | 'tornadopotato' | 'smart' | 'honey' | 'tiger' | 'gumiho' | 'cat' | 'princess' | 'teacher' | 'clock' | 'mom' | 'thief' | 'diver' | 'wing' | 'scientist' | 'rainbow-dye' | 'taegeukgi' | 'tire' | 'bald' | 'mohawk' | 'soccer-player' | 'baseball-player' | 'basketball-player' | 'taekwondo' | 'swimmer' | 'gardener' | 'musician' | 'doctor' | 'pilot' | 'ninja' | 'robot';

interface PlayerSkinConfig {
  id: PlayerSkinId;
  label: string;
  badge: string;
  spriteSet: CharacterSpriteSet;
  isReward?: boolean;
}

type Level1OpponentId = 'jeongichu' | 'churusigi';
type Level2OpponentId = 'noneunpenggwin' | 'jjangpal';
type Level3OpponentId = 'romiromi' | 'gamjaaniguma';
type Level4OpponentId = 'koronan' | 'baekgeurigoa';
type Level5OpponentId = 'niiik' | 'jurdi';
type Level6OpponentId = 'syuppeolboi' | 'anheunhannammae';
type Level7OpponentId = 'anijeuko' | 'arnya';

interface SpecialOpponentConfig {
  name: string;
  spriteSet: CharacterSpriteSet;
  defeatSceneImage: string;
  spriteClassName?: string;
  defeatSceneClassName?: string;
  removeSpriteBlackBackground?: boolean;
  removeDefeatSceneBlackBackground?: boolean;
}

interface SpecialOpponentSelections {
  level1: Level1OpponentId;
  level2: Level2OpponentId;
  level3: Level3OpponentId;
  level4: Level4OpponentId;
  level5: Level5OpponentId;
  level6: Level6OpponentId;
  level7: Level7OpponentId;
}

interface BattleDifficultyConfig {
  label: string;
  regularAttackDamage: number;
  regularHitDamage: number;
  estimationAttackDamage: number;
  estimationHitDamage: number;
}

const EDGE_BLACK_TRANSPARENT_THRESHOLD = 84;
const edgeBlackTransparentImageCache = new Map<string, string>();

function isNearBlackPixel(data: Uint8ClampedArray, offset: number, threshold: number) {
  return (
    data[offset + 3] > 0 &&
    data[offset] <= threshold &&
    data[offset + 1] <= threshold &&
    data[offset + 2] <= threshold
  );
}

function createEdgeBlackTransparentImage(src: string, image: HTMLImageElement, threshold: number) {
  const canvas = document.createElement('canvas');
  const width = image.naturalWidth;
  const height = image.naturalHeight;

  if (!width || !height) {
    return src;
  }

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  if (!context) {
    return src;
  }

  context.drawImage(image, 0, 0, width, height);

  const imageData = context.getImageData(0, 0, width, height);
  const { data } = imageData;
  const pixelCount = width * height;
  const visited = new Uint8Array(pixelCount);
  const queue = new Int32Array(pixelCount);
  let head = 0;
  let tail = 0;

  const enqueue = (x: number, y: number) => {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      return;
    }

    const pixelIndex = y * width + x;
    if (visited[pixelIndex]) {
      return;
    }

    const offset = pixelIndex * 4;
    if (!isNearBlackPixel(data, offset, threshold)) {
      return;
    }

    visited[pixelIndex] = 1;
    queue[tail++] = pixelIndex;
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }

  for (let y = 1; y < height - 1; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  while (head < tail) {
    const pixelIndex = queue[head++];
    const x = pixelIndex % width;
    const y = Math.floor(pixelIndex / width);

    enqueue(x - 1, y);
    enqueue(x + 1, y);
    enqueue(x, y - 1);
    enqueue(x, y + 1);
  }

  for (let pixelIndex = 0; pixelIndex < pixelCount; pixelIndex += 1) {
    if (visited[pixelIndex]) {
      data[pixelIndex * 4 + 3] = 0;
    }
  }

  context.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/png');
}

function useEdgeBlackTransparentImage(src: string | null, enabled = false, threshold = EDGE_BLACK_TRANSPARENT_THRESHOLD) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(src);

  useEffect(() => {
    let cancelled = false;

    if (!src) {
      setProcessedSrc(null);
      return () => {
        cancelled = true;
      };
    }

    if (!enabled || typeof window === 'undefined') {
      setProcessedSrc(src);
      return () => {
        cancelled = true;
      };
    }

    const cacheKey = `${src}::${threshold}`;
    const cachedImage = edgeBlackTransparentImageCache.get(cacheKey);
    if (cachedImage) {
      setProcessedSrc(cachedImage);
      return () => {
        cancelled = true;
      };
    }

    setProcessedSrc(src);

    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      try {
        const transparentImage = createEdgeBlackTransparentImage(src, image, threshold);
        edgeBlackTransparentImageCache.set(cacheKey, transparentImage);

        if (!cancelled) {
          setProcessedSrc(transparentImage);
        }
      } catch {
        if (!cancelled) {
          setProcessedSrc(src);
        }
      }
    };
    image.onerror = () => {
      if (!cancelled) {
        setProcessedSrc(src);
      }
    };
    image.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, enabled, threshold]);

  return processedSrc ?? src;
}

interface LearningUnitConfig {
  id: LearningUnitId;
  chapterLabel: string;
  title: string;
  summary: string;
  description: string;
  isAvailable: boolean;
}

type StoryTemplate = (a: number, b: number) => string;

interface StoryTemplatePool {
  '+': StoryTemplate[];
  '-': StoryTemplate[];
}

interface GeneratedStoryProblem {
  a: number;
  b: number;
  op: '+' | '-';
  answer: number;
}

type SoundEffectName =
  | 'correct'
  | 'wrong'
  | 'win'
  | 'rouletteStart'
  | 'rouletteTick'
  | 'rouletteWin'
  | 'lose'
  | 'start'
  | 'alert'
  | 'enemyHit'
  | 'playerHit'
  | 'levelUp'
  | 'tick'
  | 'ui'
  | 'submit'
  | 'dangerPulse'
  | 'hintStep'
  | 'hintCarry'
  | 'hintBorrow'
  | 'hintResolve';

interface SoundLayerBase {
  startAt?: number;
  duration: number;
  gain: number;
  attack?: number;
  release?: number;
  pan?: number;
  panJitter?: number;
  reverbSend?: number;
  delaySend?: number;
  filter?: {
    type: BiquadFilterType;
    frequency: number;
    q?: number;
    gain?: number;
    sweepTo?: number;
  };
}

interface OscillatorLayer extends SoundLayerBase {
  kind: 'oscillator';
  wave: OscillatorType;
  frequency: number;
  glideTo?: number;
  detune?: number;
  detuneJitter?: number;
}

interface NoiseLayer extends SoundLayerBase {
  kind: 'noise';
  playbackRate?: number;
}

type SoundLayer = OscillatorLayer | NoiseLayer;

interface SoundEffectDefinition {
  output?: number;
  layers: SoundLayer[];
}

interface SoundPlaybackOptions {
  gainMultiplier?: number;
  detune?: number;
  noisePlaybackRateMultiplier?: number;
}

type AnimationSoundPlayer = (effectName: SoundEffectName, options?: SoundPlaybackOptions) => void;

type RewardRoulettePhase = 'spinning' | 'revealed';

interface AudioEngine {
  version: number;
  context: AudioContext;
  noiseBuffer: AudioBuffer;
  output: GainNode;
  masterGain: GainNode;
  reverbSend: GainNode;
  delaySend: GainNode;
}

type CompatibleWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

const LAYER_GAIN_BOOST = 1.8;
const MASTER_EFFECT_GAIN = 3.5;
const POST_COMPRESSOR_GAIN = 3.2;
const AUDIO_ENGINE_VERSION = 3;

const SOUND_EFFECTS: Record<SoundEffectName, SoundEffectDefinition> = {
  start: {
    output: 0.88,
    layers: [
      { kind: 'noise', duration: 0.08, gain: 0.01, attack: 0.002, release: 0.05, filter: { type: 'highpass', frequency: 2200, sweepTo: 7200, q: 0.8 }, reverbSend: 0.04, delaySend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 360, glideTo: 540, duration: 0.12, gain: 0.032, attack: 0.003, release: 0.08, filter: { type: 'lowpass', frequency: 3600, sweepTo: 2200, q: 0.7 }, reverbSend: 0.05, delaySend: 0.03, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.045, frequency: 523.25, glideTo: 783.99, duration: 0.21, gain: 0.042, attack: 0.004, release: 0.16, delaySend: 0.05, reverbSend: 0.11, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.1, frequency: 1046.5, duration: 0.11, gain: 0.012, attack: 0.002, release: 0.08, reverbSend: 0.1 },
    ],
  },
  correct: {
    output: 0.9,
    layers: [
      { kind: 'noise', duration: 0.04, gain: 0.007, attack: 0.001, release: 0.03, filter: { type: 'highpass', frequency: 3400, sweepTo: 9000, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 660, glideTo: 990, duration: 0.09, gain: 0.034, attack: 0.0015, release: 0.06, detuneJitter: 5, filter: { type: 'lowpass', frequency: 4800, sweepTo: 2800, q: 0.8 }, delaySend: 0.03, reverbSend: 0.05, pan: -0.08, panJitter: 0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 990, glideTo: 1318.5, duration: 0.13, gain: 0.03, attack: 0.0015, release: 0.085, reverbSend: 0.06, pan: 0.1, panJitter: 0.04 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.022, frequency: 495, glideTo: 659.25, duration: 0.17, gain: 0.025, attack: 0.002, release: 0.115, filter: { type: 'bandpass', frequency: 1800, sweepTo: 2400, q: 2.2 }, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.048, frequency: 1318.5, glideTo: 1760, duration: 0.12, gain: 0.014, attack: 0.0015, release: 0.09, delaySend: 0.03, reverbSend: 0.08, pan: 0.14 },
    ],
  },
  alert: {
    output: 0.84,
    layers: [
      { kind: 'noise', duration: 0.12, gain: 0.008, attack: 0.002, release: 0.1, filter: { type: 'bandpass', frequency: 2200, sweepTo: 3400, q: 1.3 }, delaySend: 0.02, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'triangle', frequency: 440, glideTo: 660, duration: 0.09, gain: 0.022, attack: 0.002, release: 0.06, filter: { type: 'bandpass', frequency: 1100, sweepTo: 1700, q: 2.6 }, reverbSend: 0.04, pan: -0.18 },
      { kind: 'oscillator', wave: 'square', startAt: 0.075, frequency: 880, glideTo: 740, duration: 0.11, gain: 0.018, attack: 0.002, release: 0.08, filter: { type: 'lowpass', frequency: 2600, sweepTo: 1400, q: 0.8 }, delaySend: 0.04, reverbSend: 0.06, pan: 0.16 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.075, frequency: 220, glideTo: 196, duration: 0.12, gain: 0.018, attack: 0.002, release: 0.08, reverbSend: 0.03 },
    ],
  },
  enemyHit: {
    output: 0.92,
    layers: [
      { kind: 'noise', duration: 0.058, gain: 0.015, attack: 0.001, release: 0.04, filter: { type: 'bandpass', frequency: 1500, sweepTo: 650, q: 1.1 }, reverbSend: 0.02, pan: 0.12 },
      { kind: 'oscillator', wave: 'triangle', frequency: 240, glideTo: 160, duration: 0.095, gain: 0.024, attack: 0.0015, release: 0.06, filter: { type: 'lowpass', frequency: 1800, sweepTo: 420, q: 0.9 }, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.008, frequency: 110, glideTo: 72, duration: 0.17, gain: 0.034, attack: 0.001, release: 0.11, filter: { type: 'lowpass', frequency: 820, sweepTo: 180, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.012, frequency: 880, glideTo: 620, duration: 0.055, gain: 0.009, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 2600, sweepTo: 1200, q: 0.8 }, pan: 0.18 },
      { kind: 'oscillator', wave: 'square', startAt: 0.002, frequency: 1460, glideTo: 980, duration: 0.026, gain: 0.004, attack: 0.001, release: 0.018, filter: { type: 'lowpass', frequency: 3000, sweepTo: 1600, q: 0.8 }, pan: 0.22 },
    ],
  },
  playerHit: {
    output: 0.88,
    layers: [
      { kind: 'noise', duration: 0.075, gain: 0.015, attack: 0.001, release: 0.06, filter: { type: 'bandpass', frequency: 900, sweepTo: 320, q: 1.4 }, reverbSend: 0.03, pan: -0.14 },
      { kind: 'oscillator', wave: 'triangle', frequency: 180, glideTo: 120, duration: 0.125, gain: 0.026, attack: 0.0015, release: 0.085, filter: { type: 'lowpass', frequency: 1200, sweepTo: 260, q: 0.9 }, pan: 0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 96, glideTo: 62, duration: 0.21, gain: 0.038, attack: 0.0015, release: 0.14, filter: { type: 'lowpass', frequency: 620, sweepTo: 140, q: 0.8 }, reverbSend: 0.03 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.004, frequency: 520, glideTo: 360, duration: 0.05, gain: 0.0065, attack: 0.001, release: 0.028, filter: { type: 'lowpass', frequency: 1400, sweepTo: 700, q: 0.8 }, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.05, frequency: 62, glideTo: 49, duration: 0.14, gain: 0.012, attack: 0.002, release: 0.1, filter: { type: 'lowpass', frequency: 320, sweepTo: 140, q: 0.8 }, reverbSend: 0.04 },
    ],
  },
  wrong: {
    output: 0.84,
    layers: [
      { kind: 'noise', duration: 0.09, gain: 0.009, attack: 0.001, release: 0.07, filter: { type: 'lowpass', frequency: 1600, sweepTo: 450, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 320, glideTo: 220, duration: 0.18, gain: 0.028, attack: 0.002, release: 0.12, detuneJitter: 6, filter: { type: 'lowpass', frequency: 1500, sweepTo: 520, q: 0.7 }, reverbSend: 0.02, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.02, frequency: 246.94, glideTo: 174.61, duration: 0.22, gain: 0.026, attack: 0.002, release: 0.16, filter: { type: 'bandpass', frequency: 540, sweepTo: 280, q: 1.8 }, delaySend: 0.015, pan: 0.06 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.028, frequency: 123.47, glideTo: 87.31, duration: 0.18, gain: 0.014, attack: 0.002, release: 0.12, filter: { type: 'lowpass', frequency: 520, sweepTo: 180, q: 0.8 }, reverbSend: 0.03 },
    ],
  },
  levelUp: {
    output: 0.92,
    layers: [
      { kind: 'noise', duration: 0.14, gain: 0.009, attack: 0.002, release: 0.1, filter: { type: 'highpass', frequency: 4000, sweepTo: 9000, q: 0.8 }, reverbSend: 0.12 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.1, gain: 0.022, attack: 0.002, release: 0.07, delaySend: 0.03, reverbSend: 0.09, pan: -0.16 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.09, frequency: 659.25, duration: 0.11, gain: 0.024, attack: 0.002, release: 0.08, delaySend: 0.04, reverbSend: 0.1, pan: 0.12 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.18, frequency: 783.99, duration: 0.13, gain: 0.026, attack: 0.002, release: 0.09, delaySend: 0.05, reverbSend: 0.11, pan: -0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.28, frequency: 1046.5, duration: 0.18, gain: 0.018, attack: 0.002, release: 0.12, delaySend: 0.06, reverbSend: 0.14, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.28, frequency: 1567.98, duration: 0.14, gain: 0.008, attack: 0.001, release: 0.09, reverbSend: 0.14, pan: 0.16 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.41, frequency: 1318.5, duration: 0.14, gain: 0.014, attack: 0.0015, release: 0.1, delaySend: 0.05, reverbSend: 0.12, pan: 0.02 },
    ],
  },
  tick: {
    output: 0.7,
    layers: [
      { kind: 'oscillator', wave: 'square', frequency: 1320, glideTo: 1180, duration: 0.04, gain: 0.012, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 3600, sweepTo: 2100, q: 0.8 }, pan: -0.03 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.008, frequency: 740, duration: 0.06, gain: 0.01, attack: 0.001, release: 0.04, reverbSend: 0.01, pan: 0.03 },
    ],
  },
  ui: {
    output: 0.42,
    layers: [
      { kind: 'oscillator', wave: 'triangle', frequency: 640, glideTo: 470, duration: 0.035, gain: 0.008, attack: 0.001, release: 0.024, filter: { type: 'lowpass', frequency: 1500, sweepTo: 900, q: 0.8 }, pan: -0.02 },
      { kind: 'oscillator', wave: 'sine', frequency: 320, glideTo: 240, duration: 0.045, gain: 0.007, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 900, sweepTo: 540, q: 0.7 } },
      { kind: 'oscillator', wave: 'square', startAt: 0.002, frequency: 1180, glideTo: 860, duration: 0.014, gain: 0.0025, attack: 0.001, release: 0.01, filter: { type: 'lowpass', frequency: 1800, sweepTo: 1100, q: 0.8 }, pan: 0.02 },
    ],
  },
  submit: {
    output: 0.34,
    layers: [
      { kind: 'noise', duration: 0.018, gain: 0.0022, attack: 0.001, release: 0.012, filter: { type: 'highpass', frequency: 2800, sweepTo: 6800, q: 0.8 }, reverbSend: 0.01 },
      { kind: 'oscillator', wave: 'triangle', frequency: 460, glideTo: 620, duration: 0.045, gain: 0.005, attack: 0.001, release: 0.024, filter: { type: 'lowpass', frequency: 2200, sweepTo: 1400, q: 0.8 }, pan: -0.03 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.006, frequency: 700, glideTo: 880, duration: 0.05, gain: 0.0048, attack: 0.001, release: 0.03, reverbSend: 0.015, pan: 0.03 },
    ],
  },
  dangerPulse: {
    output: 0.36,
    layers: [
      { kind: 'noise', duration: 0.05, gain: 0.003, attack: 0.001, release: 0.04, filter: { type: 'bandpass', frequency: 1000, sweepTo: 420, q: 1.3 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'sine', frequency: 146.83, glideTo: 130.81, duration: 0.18, gain: 0.008, attack: 0.002, release: 0.12, filter: { type: 'lowpass', frequency: 620, sweepTo: 240, q: 0.8 }, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.018, frequency: 293.66, glideTo: 261.63, duration: 0.12, gain: 0.0045, attack: 0.002, release: 0.08, filter: { type: 'bandpass', frequency: 1100, sweepTo: 620, q: 1.4 }, pan: -0.04 },
    ],
  },
  hintStep: {
    output: 0.38,
    layers: [
      { kind: 'oscillator', wave: 'triangle', frequency: 760, glideTo: 640, duration: 0.05, gain: 0.0065, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 1800, sweepTo: 1100, q: 0.8 }, pan: -0.03 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.006, frequency: 420, duration: 0.06, gain: 0.0052, attack: 0.001, release: 0.04, reverbSend: 0.02, pan: 0.03 },
    ],
  },
  hintCarry: {
    output: 0.46,
    layers: [
      { kind: 'noise', duration: 0.03, gain: 0.0035, attack: 0.001, release: 0.02, filter: { type: 'highpass', frequency: 3000, sweepTo: 7000, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 520, glideTo: 780, duration: 0.08, gain: 0.008, attack: 0.001, release: 0.05, delaySend: 0.02, pan: -0.06 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.015, frequency: 780, glideTo: 1046.5, duration: 0.11, gain: 0.007, attack: 0.0015, release: 0.07, reverbSend: 0.04, pan: 0.08 },
    ],
  },
  hintBorrow: {
    output: 0.44,
    layers: [
      { kind: 'noise', duration: 0.05, gain: 0.004, attack: 0.001, release: 0.03, filter: { type: 'bandpass', frequency: 1200, sweepTo: 600, q: 1.2 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 480, glideTo: 360, duration: 0.08, gain: 0.007, attack: 0.001, release: 0.05, filter: { type: 'lowpass', frequency: 1500, sweepTo: 800, q: 0.8 }, pan: -0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.016, frequency: 330, glideTo: 392, duration: 0.1, gain: 0.006, attack: 0.0015, release: 0.07, reverbSend: 0.03, pan: 0.06 },
    ],
  },
  hintResolve: {
    output: 0.42,
    layers: [
      { kind: 'noise', duration: 0.02, gain: 0.002, attack: 0.001, release: 0.015, filter: { type: 'highpass', frequency: 3400, sweepTo: 7600, q: 0.8 }, reverbSend: 0.015 },
      { kind: 'oscillator', wave: 'triangle', frequency: 660, glideTo: 720, duration: 0.06, gain: 0.007, attack: 0.001, release: 0.04, delaySend: 0.015, reverbSend: 0.02, pan: -0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 990, duration: 0.08, gain: 0.0055, attack: 0.0015, release: 0.05, reverbSend: 0.05, pan: 0.06 },
    ],
  },
  lose: {
    output: 0.82,
    layers: [
      { kind: 'noise', duration: 0.32, gain: 0.01, attack: 0.003, release: 0.22, filter: { type: 'lowpass', frequency: 1200, sweepTo: 260, q: 0.7 }, reverbSend: 0.05 },
      { kind: 'oscillator', wave: 'triangle', frequency: 261.63, glideTo: 196, duration: 0.16, gain: 0.026, attack: 0.003, release: 0.11, filter: { type: 'lowpass', frequency: 1500, sweepTo: 500, q: 0.9 }, pan: -0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.1, frequency: 220, glideTo: 174.61, duration: 0.22, gain: 0.03, attack: 0.003, release: 0.16, filter: { type: 'lowpass', frequency: 1200, sweepTo: 300, q: 0.8 }, reverbSend: 0.06, pan: 0.08 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.26, frequency: 196, glideTo: 220, duration: 0.18, gain: 0.016, attack: 0.004, release: 0.12, filter: { type: 'lowpass', frequency: 1000, sweepTo: 420, q: 0.8 }, reverbSend: 0.08, delaySend: 0.03, pan: 0.02 },
    ],
  },
  win: {
    output: 0.96,
    layers: [
      { kind: 'noise', duration: 0.42, gain: 0.01, attack: 0.002, release: 0.28, filter: { type: 'highpass', frequency: 3600, sweepTo: 9800, q: 0.8 }, reverbSend: 0.18, delaySend: 0.04 },
      { kind: 'oscillator', wave: 'sine', frequency: 261.63, glideTo: 392, duration: 0.24, gain: 0.014, attack: 0.003, release: 0.16, filter: { type: 'lowpass', frequency: 760, sweepTo: 320, q: 0.8 }, reverbSend: 0.08, pan: -0.08 },
      { kind: 'oscillator', wave: 'sawtooth', frequency: 392, glideTo: 523.25, duration: 0.18, gain: 0.012, attack: 0.003, release: 0.12, filter: { type: 'lowpass', frequency: 2200, sweepTo: 1600, q: 0.85 }, reverbSend: 0.08, delaySend: 0.04, pan: -0.18 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.16, gain: 0.028, attack: 0.0025, release: 0.11, delaySend: 0.05, reverbSend: 0.12, pan: -0.1 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 1046.5, duration: 0.12, gain: 0.012, attack: 0.002, release: 0.08, reverbSend: 0.14, pan: 0.06 },
      { kind: 'oscillator', wave: 'sawtooth', startAt: 0.14, frequency: 659.25, glideTo: 783.99, duration: 0.18, gain: 0.013, attack: 0.0025, release: 0.12, filter: { type: 'lowpass', frequency: 2400, sweepTo: 1750, q: 0.9 }, delaySend: 0.05, reverbSend: 0.12, pan: 0.16 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.14, frequency: 783.99, duration: 0.18, gain: 0.03, attack: 0.003, release: 0.12, delaySend: 0.05, reverbSend: 0.13, pan: 0.02 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.16, frequency: 1567.98, duration: 0.12, gain: 0.011, attack: 0.002, release: 0.08, reverbSend: 0.16, pan: 0.18 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.3, frequency: 783.99, glideTo: 1046.5, duration: 0.22, gain: 0.032, attack: 0.003, release: 0.14, delaySend: 0.06, reverbSend: 0.14, pan: -0.04 },
      { kind: 'oscillator', wave: 'sawtooth', startAt: 0.3, frequency: 1046.5, glideTo: 1318.5, duration: 0.24, gain: 0.013, attack: 0.002, release: 0.16, filter: { type: 'lowpass', frequency: 2600, sweepTo: 1900, q: 0.85 }, reverbSend: 0.12, pan: 0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.33, frequency: 2093, duration: 0.16, gain: 0.009, attack: 0.0015, release: 0.1, delaySend: 0.03, reverbSend: 0.18, pan: 0.2 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.52, frequency: 1318.5, glideTo: 1567.98, duration: 0.22, gain: 0.024, attack: 0.0025, release: 0.14, delaySend: 0.07, reverbSend: 0.16, pan: 0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.56, frequency: 2637.02, duration: 0.18, gain: 0.007, attack: 0.001, release: 0.12, reverbSend: 0.2, pan: 0.22 },
    ],
  },
  rouletteStart: {
    output: 0.32,
    layers: [
      { kind: 'noise', duration: 0.28, gain: 0.006, attack: 0.002, release: 0.18, filter: { type: 'highpass', frequency: 2400, sweepTo: 7800, q: 0.8 }, reverbSend: 0.1, delaySend: 0.04 },
      { kind: 'oscillator', wave: 'sawtooth', frequency: 196, glideTo: 523.25, duration: 0.42, gain: 0.016, attack: 0.004, release: 0.24, filter: { type: 'lowpass', frequency: 2200, sweepTo: 3600, q: 0.7 }, pan: -0.08, delaySend: 0.05 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.08, frequency: 392, glideTo: 783.99, duration: 0.34, gain: 0.013, attack: 0.003, release: 0.2, reverbSend: 0.08, pan: 0.1 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.2, frequency: 1046.5, duration: 0.1, gain: 0.006, attack: 0.002, release: 0.07, reverbSend: 0.12, pan: 0.18 },
    ],
  },
  rouletteTick: {
    output: 0.18,
    layers: [
      { kind: 'noise', duration: 0.018, gain: 0.0024, attack: 0.001, release: 0.012, filter: { type: 'highpass', frequency: 3600, sweepTo: 8400, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'square', frequency: 1180, glideTo: 840, duration: 0.034, gain: 0.006, attack: 0.001, release: 0.022, filter: { type: 'lowpass', frequency: 2800, sweepTo: 1600, q: 0.8 }, panJitter: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.006, frequency: 1760, duration: 0.035, gain: 0.0035, attack: 0.001, release: 0.024, reverbSend: 0.03 },
    ],
  },
  rouletteWin: {
    output: 0.42,
    layers: [
      { kind: 'noise', duration: 0.36, gain: 0.008, attack: 0.002, release: 0.24, filter: { type: 'highpass', frequency: 3200, sweepTo: 9200, q: 0.8 }, reverbSend: 0.16, delaySend: 0.06 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.12, gain: 0.024, attack: 0.002, release: 0.08, reverbSend: 0.1, pan: -0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.1, frequency: 783.99, duration: 0.14, gain: 0.026, attack: 0.002, release: 0.09, delaySend: 0.04, reverbSend: 0.12, pan: 0.1 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.22, frequency: 1046.5, duration: 0.2, gain: 0.028, attack: 0.002, release: 0.13, delaySend: 0.06, reverbSend: 0.15 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.3, frequency: 2093, duration: 0.16, gain: 0.008, attack: 0.001, release: 0.1, reverbSend: 0.18, pan: 0.18 },
    ],
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundToNearestUnit(value: number, unit: number) {
  return Math.round(value / unit) * unit;
}

function previewRemainingHP(currentHP: number, damage: number) {
  return Math.max(0, currentHP - damage);
}

function randomCentered(amount = 0) {
  return (Math.random() * 2 - 1) * amount;
}

function createNoiseBuffer(context: AudioContext, duration = 1.5) {
  const frameCount = Math.floor(context.sampleRate * duration);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < frameCount; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }

  return buffer;
}

function createImpulseResponse(context: AudioContext, duration = 1.4, decay = 2.2) {
  const frameCount = Math.floor(context.sampleRate * duration);
  const impulse = context.createBuffer(2, frameCount, context.sampleRate);

  for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
    const channelData = impulse.getChannelData(channel);

    for (let i = 0; i < frameCount; i += 1) {
      const decayAmount = Math.pow(1 - i / frameCount, decay);
      channelData[i] = (Math.random() * 2 - 1) * decayAmount;
    }
  }

  return impulse;
}

function createAudioEngine(): AudioEngine | null {
  if (typeof window === 'undefined') return null;

  const compatibleWindow = window as CompatibleWindow;
  const AudioContextCtor = compatibleWindow.AudioContext ?? compatibleWindow.webkitAudioContext;

  if (!AudioContextCtor) return null;

  const context = new AudioContextCtor();
  const output = context.createGain();
  const compressor = context.createDynamicsCompressor();
  const masterGain = context.createGain();
  const limiter = context.createDynamicsCompressor();
  const reverbSend = context.createGain();
  const delaySend = context.createGain();
  const convolver = context.createConvolver();
  const reverbHighPass = context.createBiquadFilter();
  const reverbLowPass = context.createBiquadFilter();
  const reverbReturn = context.createGain();
  const delay = context.createDelay(1);
  const delayFeedback = context.createGain();
  const delayLowPass = context.createBiquadFilter();
  const delayReturn = context.createGain();

  output.gain.value = 1.35;
  compressor.threshold.value = -30;
  compressor.knee.value = 20;
  compressor.ratio.value = 10;
  compressor.attack.value = 0.001;
  compressor.release.value = 0.12;
  masterGain.gain.value = POST_COMPRESSOR_GAIN;
  limiter.threshold.value = -3;
  limiter.knee.value = 0;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.001;
  limiter.release.value = 0.05;
  output.connect(compressor);
  compressor.connect(masterGain);
  masterGain.connect(limiter);
  limiter.connect(context.destination);

  convolver.buffer = createImpulseResponse(context);
  reverbHighPass.type = 'highpass';
  reverbHighPass.frequency.value = 220;
  reverbLowPass.type = 'lowpass';
  reverbLowPass.frequency.value = 3600;
  reverbReturn.gain.value = 0.28;
  reverbSend.connect(convolver);
  convolver.connect(reverbHighPass);
  reverbHighPass.connect(reverbLowPass);
  reverbLowPass.connect(reverbReturn);
  reverbReturn.connect(output);

  delay.delayTime.value = 0.14;
  delayFeedback.gain.value = 0.22;
  delayLowPass.type = 'lowpass';
  delayLowPass.frequency.value = 2200;
  delayReturn.gain.value = 0.18;
  delaySend.connect(delay);
  delay.connect(delayLowPass);
  delayLowPass.connect(delayReturn);
  delayLowPass.connect(delayFeedback);
  delayFeedback.connect(delay);
  delayReturn.connect(output);

  return {
    version: AUDIO_ENGINE_VERSION,
    context,
    noiseBuffer: createNoiseBuffer(context),
    output,
    masterGain,
    reverbSend,
    delaySend,
  };
}

function closeAudioEngine(engine: AudioEngine | null) {
  if (!engine || engine.context.state === 'closed') {
    return;
  }

  void engine.context.close();
}

function applyEnvelope(param: AudioParam, startAt: number, duration: number, attack: number, release: number, peak: number) {
  const safeAttack = Math.max(attack, 0.001);
  const safeRelease = clamp(release, 0.02, duration);
  const attackEnd = Math.min(startAt + safeAttack, startAt + duration * 0.35);
  const releaseStart = Math.max(attackEnd, startAt + duration - safeRelease);

  param.cancelScheduledValues(startAt);
  param.setValueAtTime(0.0001, startAt);
  param.linearRampToValueAtTime(peak, attackEnd);

  if (releaseStart > attackEnd) {
    param.exponentialRampToValueAtTime(Math.max(peak * 0.6, 0.0001), releaseStart);
  }

  param.exponentialRampToValueAtTime(0.0001, startAt + duration);
}

function createLayerInput(engine: AudioEngine, layer: SoundLayer, startAt: number, effectOutput: number) {
  const { context } = engine;
  const gainNode = context.createGain();
  const pannerNode = context.createStereoPanner();
  const pan = clamp((layer.pan ?? 0) + randomCentered(layer.panJitter ?? 0), -1, 1);

  pannerNode.pan.value = pan;
  gainNode.connect(pannerNode);
  pannerNode.connect(engine.output);

  if (layer.reverbSend) {
    const reverbGain = context.createGain();
    reverbGain.gain.value = layer.reverbSend;
    gainNode.connect(reverbGain);
    reverbGain.connect(engine.reverbSend);
  }

  if (layer.delaySend) {
    const delayGain = context.createGain();
    delayGain.gain.value = layer.delaySend;
    gainNode.connect(delayGain);
    delayGain.connect(engine.delaySend);
  }

  applyEnvelope(
    gainNode.gain,
    startAt,
    layer.duration,
    layer.attack ?? 0.003,
    layer.release ?? Math.max(0.08, layer.duration * 0.75),
    layer.gain * effectOutput,
  );

  if (!layer.filter) {
    return gainNode;
  }

  const filterNode = context.createBiquadFilter();
  filterNode.type = layer.filter.type;
  filterNode.frequency.setValueAtTime(layer.filter.frequency, startAt);
  filterNode.Q.value = layer.filter.q ?? 0.7;

  if (layer.filter.gain !== undefined) {
    filterNode.gain.value = layer.filter.gain;
  }

  if (layer.filter.sweepTo) {
    filterNode.frequency.exponentialRampToValueAtTime(layer.filter.sweepTo, startAt + layer.duration);
  }

  filterNode.connect(gainNode);
  return filterNode;
}

function scheduleOscillatorLayer(
  engine: AudioEngine,
  layer: OscillatorLayer,
  effectOutput: number,
  baseTime: number,
  options: SoundPlaybackOptions,
) {
  const startAt = baseTime + (layer.startAt ?? 0);
  const endAt = startAt + layer.duration;
  const oscillator = engine.context.createOscillator();
  const detune = (layer.detune ?? 0) + randomCentered(layer.detuneJitter ?? 0) + (options.detune ?? 0);
  const inputNode = createLayerInput(engine, layer, startAt, effectOutput);

  oscillator.type = layer.wave;
  oscillator.frequency.setValueAtTime(layer.frequency, startAt);
  oscillator.detune.value = detune;

  if (layer.glideTo) {
    oscillator.frequency.exponentialRampToValueAtTime(layer.glideTo, endAt);
  }

  oscillator.connect(inputNode);
  oscillator.start(startAt);
  oscillator.stop(endAt + 0.05);
}

function scheduleNoiseLayer(
  engine: AudioEngine,
  layer: NoiseLayer,
  effectOutput: number,
  baseTime: number,
  options: SoundPlaybackOptions,
) {
  const startAt = baseTime + (layer.startAt ?? 0);
  const noise = engine.context.createBufferSource();
  const inputNode = createLayerInput(engine, layer, startAt, effectOutput);

  noise.buffer = engine.noiseBuffer;
  noise.playbackRate.value = (layer.playbackRate ?? 1) * (options.noisePlaybackRateMultiplier ?? 1);
  noise.connect(inputNode);
  noise.start(startAt);
  noise.stop(startAt + layer.duration + 0.02);
}

function playEffect(engine: AudioEngine, effectName: SoundEffectName, options: SoundPlaybackOptions = {}) {
  const effect = SOUND_EFFECTS[effectName];
  const baseTime = engine.context.currentTime + 0.005;
  const effectOutput = (effect.output ?? 1) * MASTER_EFFECT_GAIN * LAYER_GAIN_BOOST * (options.gainMultiplier ?? 1);

  for (const layer of effect.layers) {
    if (layer.kind === 'oscillator') {
      scheduleOscillatorLayer(engine, layer, effectOutput, baseTime, options);
    } else {
      scheduleNoiseLayer(engine, layer, effectOutput, baseTime, options);
    }
  }
}

const LEVEL_OPPONENT_NAMES = [
  '',
  '전기츄',
  '노는펭귄',
  '로미로미',
  '코로난',
  '니이익',
  '슈뻘보이',
  '아니즈코',
  '발오공',
  '홍홍자',
  '시계수호자',
  '단위박사',
  '길시대왕',
];

const LEVEL_OPPONENT_EMOJIS = ['', '👾', '👹', '👺', '🤖', '👻', '🦖', '🐲', '😈', '🪙', '⌛', '📏', '👑'];
const DEFAULT_LEARNING_UNIT_ID: LearningUnitId = 'unit2';
const DEFAULT_LEVEL1_OPPONENT_ID: Level1OpponentId = 'jeongichu';
const DEFAULT_LEVEL2_OPPONENT_ID: Level2OpponentId = 'noneunpenggwin';
const DEFAULT_LEVEL3_OPPONENT_ID: Level3OpponentId = 'romiromi';
const DEFAULT_LEVEL4_OPPONENT_ID: Level4OpponentId = 'koronan';
const DEFAULT_LEVEL5_OPPONENT_ID: Level5OpponentId = 'niiik';
const DEFAULT_LEVEL6_OPPONENT_ID: Level6OpponentId = 'syuppeolboi';
const DEFAULT_LEVEL7_OPPONENT_ID: Level7OpponentId = 'anijeuko';
const DEFAULT_SPECIAL_OPPONENT_SELECTIONS: SpecialOpponentSelections = {
  level1: DEFAULT_LEVEL1_OPPONENT_ID,
  level2: DEFAULT_LEVEL2_OPPONENT_ID,
  level3: DEFAULT_LEVEL3_OPPONENT_ID,
  level4: DEFAULT_LEVEL4_OPPONENT_ID,
  level5: DEFAULT_LEVEL5_OPPONENT_ID,
  level6: DEFAULT_LEVEL6_OPPONENT_ID,
  level7: DEFAULT_LEVEL7_OPPONENT_ID,
};
const LEVEL1_OPPONENT_VARIANTS: Record<Level1OpponentId, SpecialOpponentConfig> = {
  jeongichu: {
    name: '전기츄',
    spriteSet: {
      attack: opponentLevel1AttackImage,
      default: opponentLevel1DefaultImage,
      hit: opponentLevel1HitImage,
    },
    defeatSceneImage: stage1DefeatSceneImage,
  },
  churusigi: {
    name: '츄르식이',
    spriteSet: {
      attack: opponentLevel1ChurusigiAttackImage,
      default: opponentLevel1ChurusigiDefaultImage,
      hit: opponentLevel1ChurusigiHitImage,
    },
    defeatSceneImage: stage1ChurusigiDefeatSceneImage,
  },
};
const LEVEL2_OPPONENT_VARIANTS: Record<Level2OpponentId, SpecialOpponentConfig> = {
  noneunpenggwin: {
    name: '노는펭귄',
    spriteSet: {
      attack: opponentLevel2AttackImage,
      default: opponentLevel2DefaultImage,
      hit: opponentLevel2HitImage,
    },
    defeatSceneImage: stage2DefeatSceneImage,
  },
  jjangpal: {
    name: '짱팔',
    spriteSet: {
      attack: opponentLevel2JjangpalAttackImage,
      default: opponentLevel2JjangpalDefaultImage,
      hit: opponentLevel2JjangpalHitImage,
    },
    defeatSceneImage: stage2JjangpalDefeatSceneImage,
  },
};
const LEVEL3_OPPONENT_VARIANTS: Record<Level3OpponentId, SpecialOpponentConfig> = {
  romiromi: {
    name: '로미로미',
    spriteSet: {
      attack: opponentLevel3AttackImage,
      default: opponentLevel3DefaultImage,
      hit: opponentLevel3HitImage,
    },
    defeatSceneImage: stage3DefeatSceneImage,
  },
  gamjaaniguma: {
    name: '감자아니구마',
    spriteSet: {
      attack: opponentLevel3GamjaanigumaAttackImage,
      default: opponentLevel3GamjaanigumaDefaultImage,
      hit: opponentLevel3GamjaanigumaHitImage,
    },
    defeatSceneImage: stage3GamjaanigumaDefeatSceneImage,
  },
};
const LEVEL4_OPPONENT_VARIANTS: Record<Level4OpponentId, SpecialOpponentConfig> = {
  koronan: {
    name: '코로난',
    spriteSet: {
      attack: opponentLevel4AttackImage,
      default: opponentLevel4DefaultImage,
      hit: opponentLevel4HitImage,
    },
    defeatSceneImage: stage4DefeatSceneImage,
  },
  baekgeurigoa: {
    name: '백 그리고 아',
    spriteSet: {
      attack: opponentLevel4BaekgeurigoaAttackImage,
      default: opponentLevel4BaekgeurigoaDefaultImage,
      hit: opponentLevel4BaekgeurigoaHitImage,
    },
    defeatSceneImage: stage4BaekgeurigoaDefeatSceneImage,
  },
};
const LEVEL5_OPPONENT_VARIANTS: Record<Level5OpponentId, SpecialOpponentConfig> = {
  niiik: {
    name: '니이익',
    spriteSet: {
      attack: opponentLevel5AttackImage,
      default: opponentLevel5DefaultImage,
      hit: opponentLevel5HitImage,
    },
    defeatSceneImage: stage5DefeatSceneImage,
  },
  jurdi: {
    name: '주르디',
    spriteSet: {
      attack: opponentLevel5JurdiAttackImage,
      default: opponentLevel5JurdiDefaultImage,
      hit: opponentLevel5JurdiHitImage,
    },
    defeatSceneImage: stage5JurdiDefeatSceneImage,
  },
};
const LEVEL6_OPPONENT_VARIANTS: Record<Level6OpponentId, SpecialOpponentConfig> = {
  syuppeolboi: {
    name: '슈뻘보이',
    spriteSet: {
      attack: opponentLevel6AttackImage,
      default: opponentLevel6DefaultImage,
      hit: opponentLevel6HitImage,
    },
    defeatSceneImage: stage6DefeatSceneImage,
  },
  anheunhannammae: {
    name: '안흔한남매',
    spriteSet: {
      attack: opponentLevel6AnheunhanAttackImage,
      default: opponentLevel6AnheunhanDefaultImage,
      hit: opponentLevel6AnheunhanHitImage,
    },
    defeatSceneImage: stage6AnheunhanDefeatSceneImage,
    defeatSceneClassName: 'scale-[0.94]',
  },
};
const LEVEL7_OPPONENT_VARIANTS: Record<Level7OpponentId, SpecialOpponentConfig> = {
  anijeuko: {
    name: '아니즈코',
    spriteSet: {
      attack: opponentLevel7AttackImage,
      default: opponentLevel7DefaultImage,
      hit: opponentLevel7HitImage,
    },
    defeatSceneImage: stage7DefeatSceneImage,
  },
  arnya: {
    name: '아르냐',
    spriteSet: {
      attack: opponentLevel7ArnyaAttackImage,
      default: opponentLevel7ArnyaDefaultImage,
      hit: opponentLevel7ArnyaHitImage,
    },
    defeatSceneImage: stage7ArnyaDefeatSceneImage,
  },
};
const UNIT1_LEVEL_OPPONENTS: Partial<Record<number, SpecialOpponentConfig>> = {
  1: {
    name: '올라포',
    spriteSet: {
      attack: unit1Level1OlrapoAttackImage,
      default: unit1Level1OlrapoDefaultImage,
      hit: unit1Level1OlrapoHitImage,
    },
    defeatSceneImage: unit1Level1OlrapoDefeatSceneImage,
  },
  2: {
    name: '마리마리오',
    spriteSet: {
      attack: unit1Level2MarimarioAttackImage,
      default: unit1Level2MarimarioDefaultImage,
      hit: unit1Level2MarimarioHitImage,
    },
    defeatSceneImage: unit1Level2MarimarioDefeatSceneImage,
  },
  3: {
    name: '호빵보이',
    spriteSet: {
      attack: unit1Level3HoppangboyAttackImage,
      default: unit1Level3HoppangboyDefaultImage,
      hit: unit1Level3HoppangboyHitImage,
    },
    defeatSceneImage: unit1Level3HoppangboyDefeatSceneImage,
  },
  4: {
    name: '개, 돼지, 식빵',
    spriteSet: {
      attack: unit1Level4DogPigToastAttackImage,
      default: unit1Level4DogPigToastDefaultImage,
      hit: unit1Level4DogPigToastHitImage,
    },
    defeatSceneImage: unit1Level4DogPigToastDefeatSceneImage,
  },
  5: {
    name: '펭귄수',
    spriteSet: {
      attack: unit1Level5PenguinsuAttackImage,
      default: unit1Level5PenguinsuDefaultImage,
      hit: unit1Level5PenguinsuHitImage,
    },
    defeatSceneImage: unit1Level5PenguinsuDefeatSceneImage,
  },
  6: {
    name: '메타몬',
    spriteSet: {
      attack: unit1Level6MetamonAttackImage,
      default: unit1Level6MetamonDefaultImage,
      hit: unit1Level6MetamonHitImage,
    },
    defeatSceneImage: unit1Level6MetamonDefeatSceneImage,
  },
  7: {
    name: '메타고마',
    spriteSet: {
      attack: unit1Level7MetagomaAttackImage,
      default: unit1Level7MetagomaDefaultImage,
      hit: unit1Level7MetagomaHitImage,
    },
    defeatSceneImage: unit1Level7MetagomaDefeatSceneImage,
  },
  8: {
    name: '배추흰나비 애벌레',
    spriteSet: {
      attack: unit1Level8CaterpillarAttackImage,
      default: unit1Level8CaterpillarDefaultImage,
      hit: unit1Level8CaterpillarHitImage,
    },
    defeatSceneImage: unit1Level8CaterpillarDefeatSceneImage,
  },
  9: {
    name: '배추흰나비',
    spriteSet: {
      attack: unit1Level9ButterflyAttackImage,
      default: unit1Level9ButterflyDefaultImage,
      hit: unit1Level9ButterflyHitImage,
    },
    defeatSceneImage: unit1Level9ButterflyDefeatSceneImage,
  },
};
const UNIT3_LEVEL_OPPONENTS: Partial<Record<number, SpecialOpponentConfig>> = {
  1: {
    name: '요르시',
    spriteSet: {
      attack: unit3Level1YorsiAttackImage,
      default: unit3Level1YorsiDefaultImage,
      hit: unit3Level1YorsiHitImage,
    },
    defeatSceneImage: unit3Level1YorsiDefeatSceneImage,
  },
  2: {
    name: '쩌쩌미',
    spriteSet: {
      attack: unit3Level2JjeojjeomiAttackImage,
      default: unit3Level2JjeojjeomiDefaultImage,
      hit: unit3Level2JjeojjeomiHitImage,
    },
    defeatSceneImage: unit3Level2JjeojjeomiDefeatSceneImage,
  },
  3: {
    name: '빵',
    spriteSet: {
      attack: unit3Level3BbangAttackImage,
      default: unit3Level3BbangDefaultImage,
      hit: unit3Level3BbangHitImage,
    },
    defeatSceneImage: unit3Level3BbangDefeatSceneImage,
  },
  4: {
    name: '하트핑',
    spriteSet: {
      attack: unit3Level4HeartpingAttackImage,
      default: unit3Level4HeartpingDefaultImage,
      hit: unit3Level4HeartpingHitImage,
    },
    defeatSceneImage: unit3Level4HeartpingDefeatSceneImage,
  },
  5: {
    name: '트라레로',
    spriteSet: {
      attack: unit3Level5TraleroAttackImage,
      default: unit3Level5TraleroDefaultImage,
      hit: unit3Level5TraleroHitImage,
    },
    defeatSceneImage: unit3Level5TraleroDefeatSceneImage,
  },
  6: {
    name: '덩덩이 탐정',
    spriteSet: {
      attack: unit3Level6DeongdeongiDetectiveAttackImage,
      default: unit3Level6DeongdeongiDetectiveDefaultImage,
      hit: unit3Level6DeongdeongiDetectiveHitImage,
    },
    defeatSceneImage: unit3Level6DeongdeongiDetectiveDefeatSceneImage,
  },
  7: {
    name: '모찌엔젤',
    spriteSet: {
      attack: unit3Level7MochiengelAttackImage,
      default: unit3Level7MochiengelDefaultImage,
      hit: unit3Level7MochiengelHitImage,
    },
    defeatSceneImage: unit3Level7MochiengelDefeatSceneImage,
  },
  8: {
    name: '라부라부',
    spriteSet: {
      attack: unit3Level8LabulabuAttackImage,
      default: unit3Level8LabulabuDefaultImage,
      hit: unit3Level8LabulabuHitImage,
    },
    defeatSceneImage: unit3Level8LabulabuDefeatSceneImage,
  },
  9: {
    name: '김강림',
    spriteSet: {
      attack: unit3Level9GimgangrimAttackImage,
      default: unit3Level9GimgangrimDefaultImage,
      hit: unit3Level9GimgangrimHitImage,
    },
    defeatSceneImage: unit3Level9GimgangrimDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
  10: {
    name: '로블럭스',
    spriteSet: {
      attack: unit3Level10RobloxAttackImage,
      default: unit3Level10RobloxDefaultImage,
      hit: unit3Level10RobloxHitImage,
    },
    defeatSceneImage: unit3Level10RobloxDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
  11: {
    name: '영어 잘하는 새',
    spriteSet: {
      attack: unit3Level11EnglishBirdAttackImage,
      default: unit3Level11EnglishBirdDefaultImage,
      hit: unit3Level11EnglishBirdHitImage,
    },
    defeatSceneImage: unit3Level11EnglishBirdDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
  12: {
    name: '악마고마',
    spriteSet: {
      attack: unit3Level12AkmagomaAttackImage,
      default: unit3Level12AkmagomaDefaultImage,
      hit: unit3Level12AkmagomaHitImage,
    },
    defeatSceneImage: unit3Level12AkmagomaDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
};
const LEVEL_OPPONENT_SPRITES: Partial<Record<number, CharacterSpriteSet>> = {
  1: {
    attack: opponentLevel1AttackImage,
    default: opponentLevel1DefaultImage,
    hit: opponentLevel1HitImage,
  },
  2: {
    attack: opponentLevel2AttackImage,
    default: opponentLevel2DefaultImage,
    hit: opponentLevel2HitImage,
  },
  3: {
    attack: opponentLevel3AttackImage,
    default: opponentLevel3DefaultImage,
    hit: opponentLevel3HitImage,
  },
  4: {
    attack: opponentLevel4AttackImage,
    default: opponentLevel4DefaultImage,
    hit: opponentLevel4HitImage,
  },
  5: {
    attack: opponentLevel5AttackImage,
    default: opponentLevel5DefaultImage,
    hit: opponentLevel5HitImage,
  },
  6: {
    attack: opponentLevel6AttackImage,
    default: opponentLevel6DefaultImage,
    hit: opponentLevel6HitImage,
  },
  7: {
    attack: opponentLevel7AttackImage,
    default: opponentLevel7DefaultImage,
    hit: opponentLevel7HitImage,
  },
  8: {
    attack: opponentLevel8AttackImage,
    default: opponentLevel8DefaultImage,
    hit: opponentLevel8HitImage,
  },
  9: {
    attack: opponentLevel9AttackImage,
    default: opponentLevel9DefaultImage,
    hit: opponentLevel9HitImage,
  },
};
const UNIT_LEVEL_DESCRIPTIONS: Record<LearningUnitId, string[]> = {
  unit1: [
    '',
    '1단계: 직선, 선분, 반직선',
    '2단계: 각',
    '3단계: 직각',
    '4단계: 직각 찾기',
    '5단계: 직각삼각형',
    '6단계: 직사각형',
    '7단계: 정사각형',
    '8단계: 평면도형',
    '9단계: 평면도형 심화',
  ],
  unit2: [
    '',
    '1단계: 받아올림 없는 덧셈',
    '2단계: 받아내림 없는 뺄셈',
    '3단계: 받아올림 1번 덧셈',
    '4단계: 받아내림 1번 뺄셈',
    '5단계: 받아올림 2~3번 덧셈',
    '6단계: 받아내림 2번 뺄셈',
    '7단계: 덧셈과 뺄셈 종합',
    '8단계: 해석형 문항',
    '9단계: 해석형 문항',
  ],
  unit3: [
    '',
    '1단계: 1mm가 왜 필요할까',
    '2단계: 1cm와 1mm의 관계',
    '3단계: 길이 재기',
    '4단계: 길이 비교',
    '5단계: 1km가 왜 필요할까',
    '6단계: 1km와 1m의 관계',
    '7단계: 거리 어림',
    '8단계: 1초가 왜 필요할까?',
    '9단계: 초 단위까지 시각 읽기',
    '10단계: 시간의 덧셈',
    '11단계: 시간의 뺄셈',
    '12단계: 시간의 덧셈과 뺄셈 종합',
  ],
};

function getLevelDescriptionsForUnit(unitId: LearningUnitId) {
  return UNIT_LEVEL_DESCRIPTIONS[unitId];
}

function getTotalLevelsForUnit(unitId: LearningUnitId) {
  return getLevelDescriptionsForUnit(unitId).length - 1;
}

function getDeveloperLevelFromShortcut(event: KeyboardEvent) {
  if (!event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
    return null;
  }

  if (event.code.startsWith('Digit')) {
    const digit = Number(event.code.slice(5));
    return digit === 0 ? 10 : digit;
  }

  if (event.code === 'Minus') {
    return 11;
  }

  if (event.code === 'Equal') {
    return 12;
  }

  return null;
}

const DEFEAT_SCENE_IMAGES: Partial<Record<number, string>> = {
  1: stage1DefeatSceneImage,
  2: stage2DefeatSceneImage,
  3: stage3DefeatSceneImage,
  4: stage4DefeatSceneImage,
  5: stage5DefeatSceneImage,
  6: stage6DefeatSceneImage,
  7: stage7DefeatSceneImage,
  8: stage8DefeatSceneImage,
  9: stage9DefeatSceneImage,
};
const PLAY_RECORDS_STORAGE_KEY = 'plusMinusChromebookPlayRecords';
const MAX_STORED_PLAY_RECORDS = 30;
const RECORD_CLEAR_HOLD_DURATION_MS = 5000;
const STORED_PLAY_RECORD_UNIT_THEMES: Record<LearningUnitId, StoredPlayRecordUnitTheme> = {
  unit1: {
    cardClassName: 'border-sky-100/20 bg-[linear-gradient(180deg,rgba(12,26,44,0.98),rgba(8,13,26,0.98))]',
    accentClassName: 'bg-sky-300',
    progressClassName: 'bg-sky-300',
    dotClassName: 'bg-sky-300',
    labelClassName: 'text-sky-100',
  },
  unit2: {
    cardClassName: 'border-cyan-100/16 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(8,13,26,0.98))]',
    accentClassName: 'bg-cyan-300',
    progressClassName: 'bg-cyan-300',
    dotClassName: 'bg-cyan-300',
    labelClassName: 'text-cyan-100',
  },
  unit3: {
    cardClassName: 'border-violet-200/20 bg-[linear-gradient(180deg,rgba(31,25,58,0.96),rgba(12,18,34,0.98))]',
    accentClassName: 'bg-violet-300',
    progressClassName: 'bg-violet-300',
    dotClassName: 'bg-violet-300',
    labelClassName: 'text-violet-100',
  },
};
const VICTORY_CONFETTI = [
  { left: '6%', top: '12%', className: 'h-3 w-14 rounded-full bg-yellow-300/90', duration: 3.6, delay: 0.15, drift: 10 },
  { left: '17%', top: '27%', className: 'h-4 w-4 rounded-full bg-amber-100/95', duration: 4.1, delay: 0.75, drift: -8 },
  { left: '84%', top: '14%', className: 'h-3 w-12 rounded-full bg-rose-300/80', duration: 3.9, delay: 0.4, drift: -12 },
  { left: '92%', top: '28%', className: 'h-4 w-4 rotate-45 rounded-sm bg-cyan-300/80', duration: 4.4, delay: 0.95, drift: 8 },
  { left: '11%', top: '61%', className: 'h-3 w-10 rotate-12 rounded-full bg-emerald-300/80', duration: 4.2, delay: 1.1, drift: 6 },
  { left: '88%', top: '59%', className: 'h-3 w-9 -rotate-12 rounded-full bg-fuchsia-300/75', duration: 3.8, delay: 0.55, drift: -6 },
] as const;
const VICTORY_SPARKLES = [
  { left: '15%', top: '10%', size: 28, delay: 0.2, duration: 2.8, className: 'text-yellow-100/90' },
  { left: '81%', top: '8%', size: 26, delay: 0.85, duration: 2.6, className: 'text-amber-200/80' },
  { left: '10%', top: '44%', size: 24, delay: 0.55, duration: 2.9, className: 'text-rose-200/75' },
  { left: '86%', top: '42%', size: 30, delay: 1.1, duration: 3.1, className: 'text-cyan-200/75' },
] as const;
const CHAMPION_GOMA_UNLOCK_STORAGE_KEY = 'plusMinusChampionGomaUnlocked';
const PLAYER_SKIN_SELECTION_STORAGE_KEY = 'plusMinusSelectedGomaSkin';
const PLAYER_SKIN_UNLOCKS_STORAGE_KEY = 'plusMinusUnlockedGomaSkins';
const DEFAULT_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerAttackImage,
  default: playerDefaultImage,
  hit: playerHitImage,
};
const BABY_POTATO_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerBabyPotatoAttackImage,
  default: playerBabyPotatoDefaultImage,
  hit: playerBabyPotatoHitImage,
};
const CHAMPION_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerChampionAttackImage,
  default: playerChampionDefaultImage,
  hit: playerChampionHitImage,
};
const WIZARD_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerWizardAttackImage,
  default: playerWizardDefaultImage,
  hit: playerWizardHitImage,
};
const CAPE_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerCapeAttackImage,
  default: playerCapeDefaultImage,
  hit: playerCapeHitImage,
};
const CATPAJAMA_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerCatpajamaAttackImage,
  default: playerCatpajamaDefaultImage,
  hit: playerCatpajamaHitImage,
};
const CAT_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerCatAttackImage,
  default: playerCatDefaultImage,
  hit: playerCatHitImage,
};
const CHEF_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerChefAttackImage,
  default: playerChefDefaultImage,
  hit: playerChefHitImage,
};
const DETECTIVE_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerDetectiveAttackImage,
  default: playerDetectiveDefaultImage,
  hit: playerDetectiveHitImage,
};
const DUCK_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerDuckAttackImage,
  default: playerDuckDefaultImage,
  hit: playerDuckHitImage,
};
const ERASER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerEraserAttackImage,
  default: playerEraserDefaultImage,
  hit: playerEraserHitImage,
};
const FAIRY_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerFairyAttackImage,
  default: playerFairyDefaultImage,
  hit: playerFairyHitImage,
};
const FOX_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerFoxAttackImage,
  default: playerFoxDefaultImage,
  hit: playerFoxHitImage,
};
const FIREFIGHTER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerFirefighterAttackImage,
  default: playerFirefighterDefaultImage,
  hit: playerFirefighterHitImage,
};
const FISH_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerFishAttackImage,
  default: playerFishDefaultImage,
  hit: playerFishHitImage,
};
const GHOST_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerGhostAttackImage,
  default: playerGhostDefaultImage,
  hit: playerGhostHitImage,
};
const GOGUMA_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerGogumaAttackImage,
  default: playerGogumaDefaultImage,
  hit: playerGogumaHitImage,
};
const GUMIHO_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerGumihoAttackImage,
  default: playerGumihoDefaultImage,
  hit: playerGumihoHitImage,
};
const HEARTWIZARD_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerHeartwizardAttackImage,
  default: playerHeartwizardDefaultImage,
  hit: playerHeartwizardHitImage,
};
const HONEY_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerHoneyAttackImage,
  default: playerHoneyDefaultImage,
  hit: playerHoneyHitImage,
};
const HAMSTER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerHamsterAttackImage,
  default: playerHamsterDefaultImage,
  hit: playerHamsterHitImage,
};
const KNIGHT_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerKnightAttackImage,
  default: playerKnightDefaultImage,
  hit: playerKnightHitImage,
};
const PATISSIER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerPatissierAttackImage,
  default: playerPatissierDefaultImage,
  hit: playerPatissierHitImage,
};
const PRINCESS_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerPrincessAttackImage,
  default: playerPrincessDefaultImage,
  hit: playerPrincessHitImage,
};
const PIZZA_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerPizzaAttackImage,
  default: playerPizzaDefaultImage,
  hit: playerPizzaHitImage,
};
const PIRATE_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerPirateAttackImage,
  default: playerPirateDefaultImage,
  hit: playerPirateHitImage,
};
const POLICE_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerPoliceAttackImage,
  default: playerPoliceDefaultImage,
  hit: playerPoliceHitImage,
};
const RAINBOWARTIST_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerRainbowartistAttackImage,
  default: playerRainbowartistDefaultImage,
  hit: playerRainbowartistHitImage,
};
const RIBBON_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerRibbonAttackImage,
  default: playerRibbonDefaultImage,
  hit: playerRibbonHitImage,
};
const SPACE_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerSpaceAttackImage,
  default: playerSpaceDefaultImage,
  hit: playerSpaceHitImage,
};
const SPAIN_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerSpainAttackImage,
  default: playerSpainDefaultImage,
  hit: playerSpainHitImage,
};
const SAFETY_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerSafetyAttackImage,
  default: playerSafetyDefaultImage,
  hit: playerSafetyHitImage,
};
const WOLF_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerWolfAttackImage,
  default: playerWolfDefaultImage,
  hit: playerWolfHitImage,
};
const BABO_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerSillyAttackImage,
  default: playerSillyDefaultImage,
  hit: playerSillyHitImage,
};
const SMART_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerSmartAttackImage,
  default: playerSmartDefaultImage,
  hit: playerSmartHitImage,
};
const STUDENT_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerStudentAttackImage,
  default: playerStudentDefaultImage,
  hit: playerStudentHitImage,
};
const TEACHER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerTeacherAttackImage,
  default: playerTeacherDefaultImage,
  hit: playerTeacherHitImage,
};
const CLOCK_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerClockAttackImage,
  default: playerClockDefaultImage,
  hit: playerClockHitImage,
};
const MOM_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerMomAttackImage,
  default: playerMomDefaultImage,
  hit: playerMomHitImage,
};
const THIEF_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerThiefAttackImage,
  default: playerThiefDefaultImage,
  hit: playerThiefHitImage,
};
const DIVER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerDiverAttackImage,
  default: playerDiverDefaultImage,
  hit: playerDiverHitImage,
};
const WING_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerWingAttackImage,
  default: playerWingDefaultImage,
  hit: playerWingHitImage,
};
const SCIENTIST_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerScientistAttackImage,
  default: playerScientistDefaultImage,
  hit: playerScientistHitImage,
};
const RAINBOW_DYE_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerRainbowDyeAttackImage,
  default: playerRainbowDyeDefaultImage,
  hit: playerRainbowDyeHitImage,
};
const TAEGEUKGI_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerTaegeukgiAttackImage,
  default: playerTaegeukgiDefaultImage,
  hit: playerTaegeukgiHitImage,
};
const TIRE_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerTireAttackImage,
  default: playerTireDefaultImage,
  hit: playerTireHitImage,
};
const BALD_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerBaldAttackImage,
  default: playerBaldDefaultImage,
  hit: playerBaldHitImage,
};
const MOHAWK_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerMohawkAttackImage,
  default: playerMohawkDefaultImage,
  hit: playerMohawkHitImage,
};
const TIGER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerTigerAttackImage,
  default: playerTigerDefaultImage,
  hit: playerTigerHitImage,
};
const TORNADOPOTATO_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerTornadopotatoAttackImage,
  default: playerTornadopotatoDefaultImage,
  hit: playerTornadopotatoHitImage,
};
const SOCCER_PLAYER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerSoccerPlayerAttackImage,
  default: playerSoccerPlayerDefaultImage,
  hit: playerSoccerPlayerHitImage,
};
const BASEBALL_PLAYER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerBaseballPlayerAttackImage,
  default: playerBaseballPlayerDefaultImage,
  hit: playerBaseballPlayerHitImage,
};
const BASKETBALL_PLAYER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerBasketballPlayerAttackImage,
  default: playerBasketballPlayerDefaultImage,
  hit: playerBasketballPlayerHitImage,
};
const TAEKWONDO_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerTaekwondoAttackImage,
  default: playerTaekwondoDefaultImage,
  hit: playerTaekwondoHitImage,
};
const SWIMMER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerSwimmerAttackImage,
  default: playerSwimmerDefaultImage,
  hit: playerSwimmerHitImage,
};
const GARDENER_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerGardenerAttackImage,
  default: playerGardenerDefaultImage,
  hit: playerGardenerHitImage,
};
const MUSICIAN_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerMusicianAttackImage,
  default: playerMusicianDefaultImage,
  hit: playerMusicianHitImage,
};
const DOCTOR_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerDoctorAttackImage,
  default: playerDoctorDefaultImage,
  hit: playerDoctorHitImage,
};
const PILOT_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerPilotAttackImage,
  default: playerPilotDefaultImage,
  hit: playerPilotHitImage,
};
const NINJA_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerNinjaAttackImage,
  default: playerNinjaDefaultImage,
  hit: playerNinjaHitImage,
};
const ROBOT_GOMA_PLAYER_SPRITES: CharacterSpriteSet = {
  attack: playerRobotAttackImage,
  default: playerRobotDefaultImage,
  hit: playerRobotHitImage,
};
const PLAYER_SKINS: PlayerSkinConfig[] = [
  {
    id: 'default',
    label: '기본 고마',
    badge: '기본',
    spriteSet: DEFAULT_PLAYER_SPRITES,
  },
  {
    id: 'champion',
    label: '별 왕관 고마',
    badge: '랜덤 보상',
    spriteSet: CHAMPION_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'wizard',
    label: '달빛 마법사 고마',
    badge: '랜덤 보상',
    spriteSet: WIZARD_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'cape',
    label: '용감한 망토 고마',
    badge: '랜덤 보상',
    spriteSet: CAPE_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'detective',
    label: '탐정 고마',
    badge: '랜덤 보상',
    spriteSet: DETECTIVE_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'knight',
    label: '기사 고마',
    badge: '랜덤 보상',
    spriteSet: KNIGHT_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'space',
    label: '우주 고마',
    badge: '랜덤 보상',
    spriteSet: SPACE_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'chef',
    label: '요리사 고마',
    badge: '랜덤 보상',
    spriteSet: CHEF_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'pirate',
    label: '해적 고마',
    badge: '랜덤 보상',
    spriteSet: PIRATE_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'firefighter',
    label: '소방관 고마',
    badge: '랜덤 보상',
    spriteSet: FIREFIGHTER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'fairy',
    label: '요정 고마',
    badge: '랜덤 보상',
    spriteSet: FAIRY_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'patissier',
    label: '파티시에 고마',
    badge: '랜덤 보상',
    spriteSet: PATISSIER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'catpajama',
    label: '고양이 잠옷 고마',
    badge: '랜덤 보상',
    spriteSet: CATPAJAMA_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'rainbowartist',
    label: '무지개 화가 고마',
    badge: '랜덤 보상',
    spriteSet: RAINBOWARTIST_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'heartwizard',
    label: '하트 마법사 고마',
    badge: '랜덤 보상',
    spriteSet: HEARTWIZARD_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'eraser',
    label: '지우개 고마',
    badge: '랜덤 보상',
    spriteSet: ERASER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'safety',
    label: '안전공사 고마',
    badge: '랜덤 보상',
    spriteSet: SAFETY_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'duck',
    label: '오리 고마',
    badge: '랜덤 보상',
    spriteSet: DUCK_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'wolf',
    label: '늑대 고마',
    badge: '랜덤 보상',
    spriteSet: WOLF_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'fox',
    label: '여우 고마',
    badge: '랜덤 보상',
    spriteSet: FOX_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'ribbon',
    label: '리본 고마',
    badge: '랜덤 보상',
    spriteSet: RIBBON_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'babo',
    label: '바보 고마',
    badge: '랜덤 보상',
    spriteSet: BABO_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'student',
    label: '학생 고마',
    badge: '랜덤 보상',
    spriteSet: STUDENT_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'fish',
    label: '물고기 고마',
    badge: '랜덤 보상',
    spriteSet: FISH_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'hamster',
    label: '햄스터 고마',
    badge: '랜덤 보상',
    spriteSet: HAMSTER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'pizza',
    label: '피자 고마',
    badge: '랜덤 보상',
    spriteSet: PIZZA_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'ghost',
    label: '유령 고마',
    badge: '랜덤 보상',
    spriteSet: GHOST_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'police',
    label: '경찰 고마',
    badge: '랜덤 보상',
    spriteSet: POLICE_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'spain',
    label: '스페인 고마',
    badge: '랜덤 보상',
    spriteSet: SPAIN_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'goguma',
    label: '고구마 고마',
    badge: '랜덤 보상',
    spriteSet: GOGUMA_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'baby-potato',
    label: '알감자 고마',
    badge: '랜덤 보상',
    spriteSet: BABY_POTATO_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'tornadopotato',
    label: '회오리감자 고마',
    badge: '랜덤 보상',
    spriteSet: TORNADOPOTATO_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'smart',
    label: '똑똑이 고마',
    badge: '랜덤 보상',
    spriteSet: SMART_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'honey',
    label: '꿀 고마',
    badge: '랜덤 보상',
    spriteSet: HONEY_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'tiger',
    label: '호랑이 고마',
    badge: '랜덤 보상',
    spriteSet: TIGER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'gumiho',
    label: '구미호 고마',
    badge: '랜덤 보상',
    spriteSet: GUMIHO_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'cat',
    label: '고양이 고마',
    badge: '랜덤 보상',
    spriteSet: CAT_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'princess',
    label: '공주 고마',
    badge: '랜덤 보상',
    spriteSet: PRINCESS_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'teacher',
    label: '선생님 고마',
    badge: '랜덤 보상',
    spriteSet: TEACHER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'clock',
    label: '시계 고마',
    badge: '랜덤 보상',
    spriteSet: CLOCK_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'mom',
    label: '엄마 고마',
    badge: '랜덤 보상',
    spriteSet: MOM_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'thief',
    label: '도둑 고마',
    badge: '랜덤 보상',
    spriteSet: THIEF_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'diver',
    label: '잠수부 고마',
    badge: '랜덤 보상',
    spriteSet: DIVER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'wing',
    label: '날개 고마',
    badge: '랜덤 보상',
    spriteSet: WING_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'scientist',
    label: '과학자 고마',
    badge: '랜덤 보상',
    spriteSet: SCIENTIST_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'rainbow-dye',
    label: '무지개 염색 고마',
    badge: '랜덤 보상',
    spriteSet: RAINBOW_DYE_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'taegeukgi',
    label: '태극기 고마',
    badge: '랜덤 보상',
    spriteSet: TAEGEUKGI_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'tire',
    label: '타이어 고마',
    badge: '랜덤 보상',
    spriteSet: TIRE_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'bald',
    label: '탈모 고마',
    badge: '랜덤 보상',
    spriteSet: BALD_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'mohawk',
    label: '모히칸 고마',
    badge: '랜덤 보상',
    spriteSet: MOHAWK_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'soccer-player',
    label: '축구선수 고마',
    badge: '랜덤 보상',
    spriteSet: SOCCER_PLAYER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'baseball-player',
    label: '야구선수 고마',
    badge: '랜덤 보상',
    spriteSet: BASEBALL_PLAYER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'basketball-player',
    label: '농구선수 고마',
    badge: '랜덤 보상',
    spriteSet: BASKETBALL_PLAYER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'taekwondo',
    label: '태권도 고마',
    badge: '랜덤 보상',
    spriteSet: TAEKWONDO_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'swimmer',
    label: '수영선수 고마',
    badge: '랜덤 보상',
    spriteSet: SWIMMER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'gardener',
    label: '정원사 고마',
    badge: '랜덤 보상',
    spriteSet: GARDENER_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'musician',
    label: '음악가 고마',
    badge: '랜덤 보상',
    spriteSet: MUSICIAN_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'doctor',
    label: '의사 고마',
    badge: '랜덤 보상',
    spriteSet: DOCTOR_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'pilot',
    label: '비행사 고마',
    badge: '랜덤 보상',
    spriteSet: PILOT_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'ninja',
    label: '닌자 고마',
    badge: '랜덤 보상',
    spriteSet: NINJA_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
  {
    id: 'robot',
    label: '로봇 고마',
    badge: '랜덤 보상',
    spriteSet: ROBOT_GOMA_PLAYER_SPRITES,
    isReward: true,
  },
];
const PLAYER_SKIN_IDS = new Set<PlayerSkinId>(PLAYER_SKINS.map((skin) => skin.id));
const REWARD_PLAYER_SKINS = PLAYER_SKINS.filter((skin) => skin.isReward);
const REWARD_PLAYER_SKINS_BY_UNIT: Record<LearningUnitId, PlayerSkinConfig[]> = {
  unit1: REWARD_PLAYER_SKINS.slice(0, 20),
  unit2: REWARD_PLAYER_SKINS.slice(20, 40),
  unit3: REWARD_PLAYER_SKINS.slice(40, 60),
};

function isPlayerSkinUnlocked(skin: PlayerSkinConfig, unlockedSkinIds: PlayerSkinId[]) {
  return !skin.isReward || unlockedSkinIds.includes(skin.id);
}

function normalizeSelectedPlayerSkinId(skinId: string | null, unlockedSkinIds: PlayerSkinId[]): PlayerSkinId {
  if (!skinId) {
    return unlockedSkinIds.includes('champion') ? 'champion' : 'default';
  }

  if (skinId && PLAYER_SKIN_IDS.has(skinId as PlayerSkinId)) {
    const playerSkinId = skinId as PlayerSkinId;
    const matchingSkin = PLAYER_SKINS.find((skin) => skin.id === playerSkinId);
    if (matchingSkin && isPlayerSkinUnlocked(matchingSkin, unlockedSkinIds)) {
      return playerSkinId;
    }
  }

  return 'default';
}

function readChampionGomaUnlock() {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    return window.localStorage.getItem(CHAMPION_GOMA_UNLOCK_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function normalizeUnlockedPlayerSkinIds(skinIds: unknown, hasChampionGoma: boolean): PlayerSkinId[] {
  const unlocks = new Set<PlayerSkinId>(['default']);
  if (hasChampionGoma) {
    unlocks.add('champion');
  }

  if (Array.isArray(skinIds)) {
    skinIds.forEach((skinId) => {
      if (typeof skinId === 'string' && PLAYER_SKIN_IDS.has(skinId as PlayerSkinId)) {
        const playerSkinId = skinId as PlayerSkinId;
        const skin = PLAYER_SKINS.find((item) => item.id === playerSkinId);
        if (!skin?.isReward || REWARD_PLAYER_SKINS.some((rewardSkin) => rewardSkin.id === playerSkinId)) {
          unlocks.add(playerSkinId);
        }
      }
    });
  }

  return PLAYER_SKINS.filter((skin) => unlocks.has(skin.id)).map((skin) => skin.id);
}

function readUnlockedPlayerSkinIds(hasChampionGoma = readChampionGomaUnlock()): PlayerSkinId[] {
  if (typeof window === 'undefined') {
    return ['default'];
  }

  try {
    const rawUnlocks = window.localStorage.getItem(PLAYER_SKIN_UNLOCKS_STORAGE_KEY);
    return normalizeUnlockedPlayerSkinIds(rawUnlocks ? JSON.parse(rawUnlocks) : [], hasChampionGoma);
  } catch {
    return normalizeUnlockedPlayerSkinIds([], hasChampionGoma);
  }
}

function saveUnlockedPlayerSkinIds(skinIds: PlayerSkinId[]) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(PLAYER_SKIN_UNLOCKS_STORAGE_KEY, JSON.stringify(skinIds));
  } catch {
    // The in-memory unlock still applies for the current play session.
  }
}

function getRewardPlayerSkinsForUnit(unitId: LearningUnitId) {
  return REWARD_PLAYER_SKINS_BY_UNIT[unitId];
}

function getRewardUnitLabelForSkin(skinId: PlayerSkinId) {
  const matchingEntry = Object.entries(REWARD_PLAYER_SKINS_BY_UNIT).find(([, skins]) =>
    skins.some((skin) => skin.id === skinId),
  );
  if (!matchingEntry) {
    return null;
  }

  return `${matchingEntry[0].replace('unit', '')}단원`;
}

function pickRandomLockedRewardSkin(unitId: LearningUnitId, unlockedSkinIds: PlayerSkinId[]) {
  const lockedRewardSkins = getRewardPlayerSkinsForUnit(unitId).filter((skin) => !unlockedSkinIds.includes(skin.id));
  if (lockedRewardSkins.length === 0) {
    return null;
  }

  return lockedRewardSkins[Math.floor(Math.random() * lockedRewardSkins.length)];
}

function readSelectedPlayerSkinId(unlockedSkinIds: PlayerSkinId[]): PlayerSkinId {
  if (typeof window === 'undefined') {
    return 'default';
  }

  try {
    return normalizeSelectedPlayerSkinId(window.localStorage.getItem(PLAYER_SKIN_SELECTION_STORAGE_KEY), unlockedSkinIds);
  } catch {
    return 'default';
  }
}

function saveChampionGomaUnlock() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(CHAMPION_GOMA_UNLOCK_STORAGE_KEY, 'true');
  } catch {
    // The in-memory unlock still applies for the current play session.
  }
}

function saveSelectedPlayerSkinId(skinId: PlayerSkinId) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(PLAYER_SKIN_SELECTION_STORAGE_KEY, skinId);
  } catch {
    // The in-memory selection still applies for the current play session.
  }
}

function readStoredPlayRecords(): StoredPlayRecord[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const rawRecords = window.localStorage.getItem(PLAY_RECORDS_STORAGE_KEY);
    if (!rawRecords) {
      return [];
    }

    const parsedRecords = JSON.parse(rawRecords);
    if (!Array.isArray(parsedRecords)) {
      return [];
    }

    return parsedRecords.filter((record): record is StoredPlayRecord => (
      record &&
      typeof record.id === 'string' &&
      typeof record.playerName === 'string' &&
      (record.unitId === 'unit1' || record.unitId === 'unit2' || record.unitId === 'unit3') &&
      typeof record.unitTitle === 'string' &&
      (record.result === 'win' || record.result === 'lose') &&
      typeof record.level === 'number' &&
      typeof record.totalLevels === 'number' &&
      typeof record.topic === 'string' &&
      typeof record.playedAt === 'string'
    ));
  } catch {
    return [];
  }
}

function saveStoredPlayRecords(records: StoredPlayRecord[]) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(PLAY_RECORDS_STORAGE_KEY, JSON.stringify(records.slice(0, MAX_STORED_PLAY_RECORDS)));
  } catch {
    // The on-screen history still updates for the current browser session.
  }
}

function formatStoredPlayRecordDate(playedAt: string) {
  const playedDate = new Date(playedAt);
  if (Number.isNaN(playedDate.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('ko-KR', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(playedDate);
}

function hasKoreanFinalConsonant(text: string) {
  const lastKoreanChar = [...text].reverse().find((char) => {
    const codePoint = char.charCodeAt(0);
    return codePoint >= 0xac00 && codePoint <= 0xd7a3;
  });

  if (!lastKoreanChar) {
    return false;
  }

  return (lastKoreanChar.charCodeAt(0) - 0xac00) % 28 !== 0;
}

function getKoreanParticle(text: string, withFinalConsonant: string, withoutFinalConsonant: string) {
  return hasKoreanFinalConsonant(text) ? withFinalConsonant : withoutFinalConsonant;
}

function getStoredPlayRecordSummary(sections: Array<{ unitTitle: string; records: StoredPlayRecord[] }>, totalCount: number) {
  if (sections.length === 0 || totalCount === 0) {
    return '';
  }

  const sortedSections = [...sections].sort((a, b) => b.records.length - a.records.length);
  const mostPlayedSection = sortedSections[0];
  const leastPlayedSection = sortedSections[sortedSections.length - 1];

  if (sections.length === 1 || mostPlayedSection.records.length / totalCount >= 0.6) {
    return `${mostPlayedSection.unitTitle}${getKoreanParticle(mostPlayedSection.unitTitle, '을', '를')} 가장 많이 했어요`;
  }

  if (leastPlayedSection.records.length <= 1 && mostPlayedSection.records.length - leastPlayedSection.records.length >= 2) {
    return `${leastPlayedSection.unitTitle}${getKoreanParticle(leastPlayedSection.unitTitle, '은', '는')} 조금 더 해봐요`;
  }

  return '여러 유형을 골고루 했어요';
}

const DEFAULT_PLAYER_NAME = '나';
const BATTLE_DIFFICULTY_ORDER: BattleDifficulty[] = ['easy', 'normal', 'hard'];
const BATTLE_DIFFICULTY_CONFIG: Record<BattleDifficulty, BattleDifficultyConfig> = {
  easy: {
    label: '쉬움',
    regularAttackDamage: 25,
    regularHitDamage: 10,
    estimationAttackDamage: 40,
    estimationHitDamage: 25,
  },
  normal: {
    label: '보통',
    regularAttackDamage: 25,
    regularHitDamage: 15,
    estimationAttackDamage: 40,
    estimationHitDamage: 30,
  },
  hard: {
    label: '어려움',
    regularAttackDamage: 25,
    regularHitDamage: 20,
    estimationAttackDamage: 40,
    estimationHitDamage: 35,
  },
};
const LEARNING_UNITS: LearningUnitConfig[] = [
  {
    id: 'unit1',
    chapterLabel: '1단원',
    title: '평면도형',
    summary: '직접 그리고 구별하기',
    description: '점, 선, 도형 도구로 평면도형을 직접 만들어 보는 단원입니다.',
    isAvailable: true,
  },
  {
    id: 'unit2',
    chapterLabel: '2단원',
    title: '덧셈과 뺄셈',
    summary: '기존 내용',
    description: '현재 바로 플레이할 수 있는 단원입니다.',
    isAvailable: true,
  },
  {
    id: 'unit3',
    chapterLabel: '3단원',
    title: '길이와 시간',
    summary: '단위, 측정, 시각과 시간',
    description: '길이와 시간을 읽고, 재고, 어림하고, 계산하는 단원입니다.',
    isAvailable: true,
  },
];
const FINAL_BUILDER_HP = 25;
const ESTIMATION_SAFE_HP = 40;
const UNIT_SELECTION_TIME_LIMIT_SECONDS = 20;
const UNIT_SELECTION_CHALLENGE_LEVELS = new Set<number>([2, 4, 7, 8]);
const MAX_ZERO_TENS_BORROW_COACHMARKS = 3;
const ZERO_TENS_BORROW_COACHMARK_TITLE = '생각해보기';
const ZERO_TENS_BORROW_COACHMARK_TEXT = '십의 자리가 0인 수에서 일의 자리로 어떻게 받아내림을 할까요?';
const UNIT3_SECRET_CODE_GATE = {
  unitId: 'unit3' as const,
  fromLevel: 7,
  nextLevel: 8,
  answer: '시각과 시간',
};
const ATTACK_POSE_DURATION_MS = 850;
const HIT_POSE_DURATION_MS = 700;
const ATTACK_MOTION_DURATION_S = 0.4;
const HIT_MOTION_DURATION_S = 0.5;
const ESTIMATION_TIME_LIMIT_SECONDS = 20;
const ESTIMATION_ROUNDING_UNIT = 100;
const ESTIMATION_MIN_ANSWER = 100;
const ESTIMATION_MAX_ANSWER = 900;
const ESTIMATION_MAX_RAW_ANSWER = ESTIMATION_MAX_ANSWER + ESTIMATION_ROUNDING_UNIT / 2 - 1;
const ESTIMATION_PROMPT = '각 수를 백의 자리까지 반올림해서 계산해 보세요.';
const ESTIMATION_BOUNDARY_RANGE_MIN = 40;
const ESTIMATION_BOUNDARY_RANGE_MAX = 60;
const ESTIMATION_MIN_DISTANCE_FROM_ANCHOR = 15;
const ESTIMATION_MAX_GENERATION_ATTEMPTS = 300;

function pickSpecialOpponentSelections(): SpecialOpponentSelections {
  return {
    level1: Math.random() < 0.5 ? DEFAULT_LEVEL1_OPPONENT_ID : 'churusigi',
    level2: Math.random() < 0.5 ? DEFAULT_LEVEL2_OPPONENT_ID : 'jjangpal',
    level3: Math.random() < 0.5 ? DEFAULT_LEVEL3_OPPONENT_ID : 'gamjaaniguma',
    level4: Math.random() < 0.5 ? DEFAULT_LEVEL4_OPPONENT_ID : 'baekgeurigoa',
    level5: Math.random() < 0.5 ? DEFAULT_LEVEL5_OPPONENT_ID : 'jurdi',
    level6: Math.random() < 0.5 ? DEFAULT_LEVEL6_OPPONENT_ID : 'anheunhannammae',
    level7: Math.random() < 0.5 ? DEFAULT_LEVEL7_OPPONENT_ID : 'arnya',
  };
}

function getSpecialOpponentConfig(level: number, selections: SpecialOpponentSelections) {
  if (level === 1) {
    return LEVEL1_OPPONENT_VARIANTS[selections.level1] ?? LEVEL1_OPPONENT_VARIANTS[DEFAULT_LEVEL1_OPPONENT_ID];
  }

  if (level === 2) {
    return LEVEL2_OPPONENT_VARIANTS[selections.level2] ?? LEVEL2_OPPONENT_VARIANTS[DEFAULT_LEVEL2_OPPONENT_ID];
  }

  if (level === 3) {
    return LEVEL3_OPPONENT_VARIANTS[selections.level3] ?? LEVEL3_OPPONENT_VARIANTS[DEFAULT_LEVEL3_OPPONENT_ID];
  }

  if (level === 4) {
    return LEVEL4_OPPONENT_VARIANTS[selections.level4] ?? LEVEL4_OPPONENT_VARIANTS[DEFAULT_LEVEL4_OPPONENT_ID];
  }

  if (level === 5) {
    return LEVEL5_OPPONENT_VARIANTS[selections.level5] ?? LEVEL5_OPPONENT_VARIANTS[DEFAULT_LEVEL5_OPPONENT_ID];
  }

  if (level === 6) {
    return LEVEL6_OPPONENT_VARIANTS[selections.level6] ?? LEVEL6_OPPONENT_VARIANTS[DEFAULT_LEVEL6_OPPONENT_ID];
  }

  if (level === 7) {
    return LEVEL7_OPPONENT_VARIANTS[selections.level7] ?? LEVEL7_OPPONENT_VARIANTS[DEFAULT_LEVEL7_OPPONENT_ID];
  }

  return null;
}

function getConfiguredOpponentForUnit(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections,
) {
  if (unitId === 'unit1') {
    return UNIT1_LEVEL_OPPONENTS[level] ?? null;
  }

  if (unitId === 'unit3') {
    return UNIT3_LEVEL_OPPONENTS[level] ?? null;
  }

  return getSpecialOpponentConfig(level, selections);
}

function getOpponentEmojiForLevel(level: number) {
  return LEVEL_OPPONENT_EMOJIS[level] ?? LEVEL_OPPONENT_EMOJIS[LEVEL_OPPONENT_EMOJIS.length - 1];
}

function getOpponentNameForLevel(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  if (unitId === 'unit1' && level === 8) {
    return '배추흰나비 애벌레';
  }

  const configuredOpponent = getConfiguredOpponentForUnit(unitId, level, selections);
  if (configuredOpponent) {
    return configuredOpponent.name;
  }

  return LEVEL_OPPONENT_NAMES[level] ?? LEVEL_OPPONENT_NAMES[LEVEL_OPPONENT_NAMES.length - 1];
}

function getOpponentSpriteSetForLevel(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  const configuredOpponent = getConfiguredOpponentForUnit(unitId, level, selections);
  if (configuredOpponent) {
    return configuredOpponent.spriteSet;
  }

  return LEVEL_OPPONENT_SPRITES[level] ?? LEVEL_OPPONENT_SPRITES[9];
}

function getDefeatSceneImageForLevel(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  const configuredOpponent = getConfiguredOpponentForUnit(unitId, level, selections);
  if (configuredOpponent) {
    return configuredOpponent.defeatSceneImage;
  }

  return DEFEAT_SCENE_IMAGES[level] ?? DEFEAT_SCENE_IMAGES[9] ?? null;
}

function getOpponentEntranceMessage(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  return `상대 ${getOpponentNameForLevel(unitId, level, selections)} 등장!`;
}

function digitRange(min: number, max: number) {
  return Array.from({ length: max - min + 1 }, (_, index) => String(min + index));
}

function createBuilderSlot(id: string, label: string, min: number, max: number): BuildSlotConfig {
  return {
    id,
    label,
    digits: digitRange(min, max),
  };
}

const previousBuilderTemplateIdByLevel: Partial<Record<number, string>> = {};

function pickBuilderTemplate(level: number, templates: BuilderTemplate[]) {
  const previousTemplateId = previousBuilderTemplateIdByLevel[level];
  const candidates = templates.filter((template) => template.templateId !== previousTemplateId);
  const selectedTemplate = sample(candidates.length > 0 ? candidates : templates);
  previousBuilderTemplateIdByLevel[level] = selectedTemplate.templateId;
  return selectedTemplate;
}

const STORY_TEMPLATE_POOLS: Record<number, StoryTemplatePool> = {
  8: {
    '+': [
      (a, b) =>
        `연지네 집에서 학교까지 가려면 ${a}걸음을, 학교에서 도서관까지 가려면 ${b}걸음을 걸어야 합니다.\n연지가 집에서 학교를 지나 도서관까지 가려면 모두 몇 걸음을 걸어야 하는지 구해 봅시다.`,
      (a, b) =>
        `도서관 책 정리 봉사에 오전에는 ${a}권, 오후에는 ${b}권의 책을 제자리에 꽂았습니다.\n하루 동안 모두 몇 권의 책을 정리했는지 구해 봅시다.`,
      (a, b) =>
        `운동회 응원 점수를 1반은 ${a}점, 2반은 ${b}점 얻었습니다.\n두 반이 얻은 점수는 모두 몇 점인지 구해 봅시다.`,
      (a, b) =>
        `민준이는 아침에 색종이 ${a}장을 접고, 방과 후에 ${b}장을 더 접었습니다.\n민준이가 접은 색종이는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 텃밭에서 토마토를 1구역에서 ${a}개, 2구역에서 ${b}개 땄습니다.\n오늘 모두 몇 개의 토마토를 수확했는지 구해 봅시다.`,
      (a, b) =>
        `학급 나눔 상자에 1모둠이 연필 ${a}자루를 넣고, 2모둠이 ${b}자루를 더 넣었습니다.\n상자 안에는 모두 몇 자루의 연필이 있는지 구해 봅시다.`,
      (a, b) =>
        `급식실 우유 상자를 오전에 ${a}개 정리하고, 점심시간 뒤에 ${b}개를 더 정리했습니다.\n정리한 우유 상자는 모두 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `과학실 관찰 기록지를 월요일에 ${a}장, 화요일에 ${b}장 모았습니다.\n이틀 동안 모은 기록지는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 복도 분리수거함에 오전에는 플라스틱 병 ${a}개, 오후에는 ${b}개를 넣었습니다.\n하루 동안 모두 몇 개를 모았는지 구해 봅시다.`,
      (a, b) =>
        `독서 달력에 소희는 지난주에 ${a}쪽, 이번 주에 ${b}쪽을 읽었습니다.\n지금까지 읽은 쪽수는 모두 몇 쪽인지 구해 봅시다.`,
      (a, b) =>
        `체험학습 준비로 3학년은 이름표 ${a}장, 4학년은 ${b}장을 만들었습니다.\n만든 이름표는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 앞 나눔 바구니에 아침에는 귤 ${a}개, 점심 뒤에는 ${b}개를 더 담았습니다.\n바구니에 들어 있는 귤은 모두 몇 개인지 구해 봅시다.`,
    ],
    '-': [
      (a, b) =>
        `도윤이네 학교 누리집은 오늘 ${a}명이 방문했고, 어제는 ${b}명이 방문했습니다.\n오늘 누리집을 방문한 사람은 어제보다 몇 명 더 많은지 구해 봅시다.`,
      (a, b) =>
        `학급문고에 책이 ${a}권 있었는데, 친구들이 ${b}권을 빌려 갔습니다.\n지금 남아 있는 책은 몇 권인지 구해 봅시다.`,
      (a, b) =>
        `준호는 스티커를 ${a}장 가지고 있었는데, 동생에게 ${b}장을 나누어 주었습니다.\n준호에게 남은 스티커는 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `체육 시간에 준비한 공은 ${a}개였고, 그중 ${b}개를 사용했습니다.\n아직 사용하지 않은 공은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `미술 시간에 크레파스를 ${a}개 준비했는데, 친구들이 ${b}개를 먼저 사용했습니다.\n지금 남아 있는 크레파스는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `봉사 활동용 장갑이 ${a}켤레 있었는데, 그중 ${b}켤레를 나누어 주었습니다.\n남은 장갑은 몇 켤레인지 구해 봅시다.`,
      (a, b) =>
        `학교 화단에 심은 꽃모종이 ${a}개였는데, 운동장 쪽 화단으로 ${b}개를 옮겼습니다.\n처음 화단에 남은 꽃모종은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `급식 도우미 배지가 ${a}개 있었는데, 오늘 ${b}개를 사용했습니다.\n보관함에 남은 배지는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `현장체험학습 명찰을 ${a}개 준비했는데, 출발 전에 ${b}개를 나누어 주었습니다.\n남은 명찰은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `교실 게시판에 압정을 ${a}개 두었는데, 오늘 ${b}개를 사용했습니다.\n상자에 남아 있는 압정은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `급식실에서 종이컵 ${a}개를 꺼냈는데, 그중 ${b}개를 먼저 사용했습니다.\n아직 남은 종이컵은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `민지는 퍼즐 조각 ${a}개를 맞췄다가 그중 ${b}개를 다시 빼 보았습니다.\n지금 맞춰 놓은 조각은 몇 개인지 구해 봅시다.`,
    ],
  },
  9: {
    '+': [
      (a, b) =>
        `재활용 캠페인에서 월요일에는 종이 ${a}장을, 화요일에는 ${b}장을 모았습니다. 모은 종이의 수를 활동 기록표에 적어 넣으려고 합니다.\n이틀 동안 모두 몇 장을 모았는지 구해 봅시다.`,
      (a, b) =>
        `학교 박람회 체험 부스에 오전에는 ${a}명, 오후에는 ${b}명이 참여했습니다. 진행 도우미가 하루 참여 인원을 정리해 보려고 합니다.\n하루 동안 참여한 학생은 모두 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `교내 바자회 쿠폰을 쉬는 시간마다 나누어 주었더니 1교시에 ${a}장, 2교시에 ${b}장을 사용했습니다. 학생회에서 지금까지 사용한 쿠폰 수를 알아보려 합니다.\n사용한 쿠폰은 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `별자리 관찰 행사에서 1조가 별 스티커를 ${a}장, 2조가 ${b}장 모았습니다. 행사 마무리 시간에 두 조의 결과를 함께 발표하려고 합니다.\n두 조가 모은 스티커는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `수영장 입장 기록을 보니 오전반은 ${a}명, 오후반은 ${b}명이었습니다. 체육 선생님이 하루 전체 이용 인원을 확인하려고 합니다.\n이날 수영장을 이용한 학생은 모두 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `학교 축제 초대장을 3학년은 ${a}장, 4학년은 ${b}장 완성했습니다. 축제 준비를 맡은 선생님이 완성된 초대장 수를 세어 보려고 합니다.\n완성한 초대장은 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `환경 동아리에서 페트병 뚜껑을 지난주에 ${a}개, 이번 주에 ${b}개 더 모았습니다. 모은 양을 벽보에 적기 전에 전체 수를 확인하려고 합니다.\n지금까지 모두 몇 개를 모았는지 구해 봅시다.`,
      (a, b) =>
        `교실 뒤 게시판에 작품 사진을 첫째 줄에 ${a}장, 둘째 줄에 ${b}장 붙였습니다. 게시판에 전시된 사진 수를 안내문에 적으려고 합니다.\n게시판에 붙인 사진은 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 안전 캠페인 설문에 어제는 ${a}명, 오늘은 ${b}명이 참여했습니다. 학생회에서 이틀 동안 모인 응답 수를 정리하려고 합니다.\n모인 응답은 모두 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `도서관 대출 기록을 보니 오전에는 책 ${a}권, 오후에는 ${b}권이 대출되었습니다. 사서 선생님이 하루 대출 수를 확인하려고 합니다.\n하루 동안 대출된 책은 모두 몇 권인지 구해 봅시다.`,
      (a, b) =>
        `교내 스포츠데이에서 5학년은 ${a}점, 6학년은 ${b}점을 얻었습니다. 진행팀이 전체 점수를 합쳐 발표하려고 합니다.\n두 학년이 얻은 점수는 모두 몇 점인지 구해 봅시다.`,
      (a, b) =>
        `환경 보호 벽보에 손도장을 첫째 시간에 ${a}개, 둘째 시간에 ${b}개 찍었습니다. 벽보에 찍힌 손도장의 수를 세어 보려고 합니다.\n손도장은 모두 몇 개인지 구해 봅시다.`,
    ],
    '-': [
      (a, b) =>
        `현장체험학습 간식 꾸러미를 ${a}개 준비했는데, 출발 전에 ${b}개를 나누어 주었습니다. 아직 버스에 싣지 않은 꾸러미 수를 알아보려 합니다.\n남은 간식 꾸러미는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `온라인 퀴즈에 ${a}명이 참여했고, 그중 ${b}명이 이미 답을 제출했습니다. 담임 선생님이 아직 기다려야 하는 학생 수를 확인하려고 합니다.\n아직 제출하지 않은 사람은 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `미술 전시회 입장권이 ${a}장 있었는데, 오전에 ${b}장이 사용되었습니다. 오후 관람을 위해 남은 입장권 수를 세어 보려고 합니다.\n남아 있는 입장권은 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 방송을 들은 학생이 이번 주에는 ${a}명, 지난주에는 ${b}명이었습니다. 방송부에서 지난주와 비교한 차이를 알아보려 합니다.\n이번 주에 더 많이 들은 학생은 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `달리기 기록표를 ${a}장 준비했는데, 그중 ${b}장을 먼저 배부했습니다. 이어서 사용할 수 있도록 남은 기록표 수를 알아보려 합니다.\n기록표는 몇 장 남았는지 구해 봅시다.`,
      (a, b) =>
        `과학관 체험 신청자는 ${a}명이었는데, 그중 ${b}명이 먼저 입장했습니다. 줄을 서서 기다리는 학생이 몇 명인지 확인하려고 합니다.\n아직 기다리는 학생은 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `학급 회의 자료를 ${a}부 인쇄했는데, 발표 모둠에 ${b}부를 나누어 주었습니다. 교실 책상 위에 남아 있는 자료 수를 알아보려 합니다.\n책상 위에 남은 자료는 몇 부인지 구해 봅시다.`,
      (a, b) =>
        `우산 꽂이에 우산이 ${a}개 있었는데, 비가 그친 뒤 ${b}개가 먼저 가져가졌습니다. 우산 꽂이에 아직 남은 우산 수를 확인하려고 합니다.\n남아 있는 우산은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `자원봉사 팔찌를 ${a}개 준비했는데, 행사 시작 전에 ${b}개를 나누어 주었습니다. 진행팀이 남은 수량을 확인하려고 합니다.\n남은 팔찌는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `코딩 교실 태블릿이 ${a}대 있었는데, 그중 ${b}대를 먼저 배부했습니다. 아직 보관함에 있는 태블릿은 몇 대인지 구해 봅시다.`,
      (a, b) =>
        `운동장 응원 깃발을 ${a}개 세워 두었는데, 비가 와서 ${b}개를 먼저 정리했습니다. 아직 남아 있는 깃발은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `학교 사진전 인화 사진이 ${a}장 있었는데, 전시 준비로 ${b}장을 먼저 게시판에 붙였습니다. 아직 상자에 남은 사진은 몇 장인지 구해 봅시다.`,
    ],
  },
};

function sample<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

const previousSampleByKey = new Map<string, unknown>();

function sampleAvoidingImmediateRepeat<T>(key: string, items: readonly T[]): T {
  if (items.length <= 1) {
    return items[0];
  }

  const previousSample = previousSampleByKey.get(key);
  const candidates = items.filter((item) => item !== previousSample);
  const selected = sample(candidates.length > 0 ? candidates : items);
  previousSampleByKey.set(key, selected);
  return selected;
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface MeasurementFactoryConfig {
  title: string;
  question: string;
  objectKind: MeasurementObjectKind;
  objectLabel: string;
  minLengthMm: number;
  maxLengthMm: number;
  shiftedStartMinMm: number;
  shiftedStartMaxMm: number;
}

function shuffleValues<T>(values: T[]) {
  const next = [...values];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function createMeasurementFactoryPair(config: MeasurementFactoryConfig): Array<() => Problem> {
  return [
    () => {
      const lengthMm = randomInt(config.minLengthMm, config.maxLengthMm);
      return createMeasurementProblem({
        title: config.title,
        question: config.question,
        objectKind: config.objectKind,
        objectLabel: config.objectLabel,
        startMm: 0,
        lengthMm,
      });
    },
    () => {
      const lengthMm = randomInt(config.minLengthMm, config.maxLengthMm);
      return createMeasurementProblem({
        title: config.title,
        question: config.question,
        objectKind: config.objectKind,
        objectLabel: config.objectLabel,
        startMm: randomInt(config.shiftedStartMinMm, config.shiftedStartMaxMm),
        lengthMm,
      });
    },
  ];
}

function toMillimeters(centimeters: number, millimeters = 0) {
  return centimeters * 10 + millimeters;
}

function formatLengthAsMixedUnits(totalMillimeters: number) {
  const centimeters = Math.floor(totalMillimeters / 10);
  const millimeters = totalMillimeters % 10;

  if (centimeters === 0) {
    return `${totalMillimeters}mm`;
  }

  if (millimeters === 0) {
    return `${centimeters}cm`;
  }

  return `${centimeters}cm ${millimeters}mm`;
}

function formatLengthValue(totalMillimeters: number) {
  if (totalMillimeters < 10) {
    return `${totalMillimeters}mm`;
  }

  if (Math.random() < 0.4) {
    return `${totalMillimeters}mm`;
  }

  return formatLengthAsMixedUnits(totalMillimeters);
}

function toMeters(kilometers: number, meters = 0) {
  return kilometers * 1000 + meters;
}

function formatDistanceAsMixedUnits(totalMeters: number) {
  const kilometers = Math.floor(totalMeters / 1000);
  const meters = totalMeters % 1000;

  if (kilometers === 0) {
    return `${totalMeters}m`;
  }

  if (meters === 0) {
    return `${kilometers}km`;
  }

  return `${kilometers}km ${meters}m`;
}

function formatDistanceValue(totalMeters: number) {
  if (totalMeters < 1000) {
    return `${totalMeters}m`;
  }

  if (Math.random() < 0.35) {
    return `${totalMeters}m`;
  }

  return formatDistanceAsMixedUnits(totalMeters);
}

function getDistinctRandomNumbers(count: number, min: number, max: number) {
  const values = new Set<number>();

  while (values.size < count) {
    values.add(randomInt(min, max));
  }

  return [...values];
}

function buildNumberedOptionsPrompt(question: string, options: string[]) {
  return `${question}\n${options.map((option, index) => `${index + 1}) ${option}`).join('\n')}`;
}

function createShuffledOptionsProblem(question: string, options: string[], correctOption: string) {
  const shuffledOptions = shuffleValues(options);
  return createPromptProblem(
    buildNumberedOptionsPrompt(question, shuffledOptions),
    shuffledOptions.indexOf(correctOption) + 1,
  );
}

function formatClockTime(hours: number, minutes: number, seconds?: number) {
  if (seconds === undefined) {
    return `${hours}시 ${minutes}분`;
  }

  return `${hours}시 ${minutes}분 ${seconds}초`;
}

function formatDuration(hours: number, minutes: number, seconds = 0) {
  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours}시간`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}분`);
  }

  if (seconds > 0 || parts.length === 0) {
    parts.push(`${seconds}초`);
  }

  return parts.join(' ');
}

function splitClockSeconds(totalSeconds: number) {
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function splitAnimatedClockSeconds(totalSeconds: number) {
  const secondsInHalfDay = 12 * 3600;
  const normalizedTotalSeconds = ((totalSeconds % secondsInHalfDay) + secondsInHalfDay) % secondsInHalfDay;
  const hours = Math.floor(normalizedTotalSeconds / 3600);

  return {
    hours: hours === 0 ? 12 : hours,
    minutes: Math.floor((normalizedTotalSeconds % 3600) / 60),
    seconds: normalizedTotalSeconds % 60,
  };
}

function toTotalTimeSeconds(value: TimeValue) {
  return value.hours * 3600 + value.minutes * 60 + value.seconds;
}

function getTimeValueSignature(value: TimeValue) {
  return `${value.hours}:${value.minutes}:${value.seconds}`;
}

function getTimeValuePartValue(value: TimeValue, part: ClockInputPart) {
  if (part === 'hours') {
    return value.hours;
  }

  if (part === 'minutes') {
    return value.minutes;
  }

  return value.seconds;
}

function getClockReadingPartValue(clockReading: ClockReadingProblemData, part: ClockInputPart) {
  if (part === 'hours') {
    return clockReading.hour;
  }

  if (part === 'minutes') {
    return clockReading.minute;
  }

  return clockReading.second;
}

function formatClockReadingBlankText(
  hour: number,
  minute: number,
  second: number,
  editableParts: ClockInputPart[],
) {
  const values: Record<ClockInputPart, string> = {
    hours: editableParts.includes('hours') ? '□시' : `${hour}시`,
    minutes: editableParts.includes('minutes') ? '□분' : `${minute}분`,
    seconds: editableParts.includes('seconds') ? '□초' : `${second}초`,
  };

  return `${values.hours} ${values.minutes} ${values.seconds}`;
}

function getClockReadingDifficulty(problemSequence?: number, opponentHP = 100): ClockReadingDifficulty {
  if (problemSequence !== undefined) {
    return Math.min(Math.max(problemSequence, 1), 5) as ClockReadingDifficulty;
  }

  if (opponentHP <= 20) return 5;
  if (opponentHP <= 40) return 4;
  if (opponentHP <= 60) return 3;
  if (opponentHP <= 80) return 2;
  return 1;
}

function getClockReadingEditableParts(_difficulty: ClockReadingDifficulty): ClockInputPart[] {
  return ['hours', 'minutes', 'seconds'];
}

const RECENT_CLOCK_READING_SECOND_LIMIT = 4;
const recentClockReadingSeconds: number[] = [];

function getClockReadingSecondCandidates(difficulty: ClockReadingDifficulty) {
  if (difficulty === 1) {
    return [5, 10, 15, 20];
  }

  if (difficulty === 2) {
    return [5, 10, 15, 20, 25, 30];
  }

  return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
}

function createClockReadingSecond(difficulty: ClockReadingDifficulty) {
  const candidates = getClockReadingSecondCandidates(difficulty);
  const availableCandidates = candidates.filter((second) => !recentClockReadingSeconds.includes(second));
  const second = sample(availableCandidates.length > 0 ? availableCandidates : candidates);

  recentClockReadingSeconds.push(second);
  if (recentClockReadingSeconds.length > RECENT_CLOCK_READING_SECOND_LIMIT) {
    recentClockReadingSeconds.shift();
  }

  return second;
}

function createClockReadingVisualProblem(difficulty: ClockReadingDifficulty = 3): Problem {
  const hour = randomInt(1, 12);
  const minute =
    difficulty === 1
      ? sample([0, 15, 30, 45])
      : difficulty === 2 || difficulty === 3
        ? randomInt(0, 11) * 5
        : randomInt(0, 59);
  const second = createClockReadingSecond(difficulty);
  const editableParts = getClockReadingEditableParts(difficulty);
  const question =
    editableParts.length === 3
      ? '시침, 분침, 초침이 가리키는 시각을 차례대로 써 보세요.'
      : `시계가 가리키는 시각은 ${formatClockReadingBlankText(hour, minute, second, editableParts)}입니다. 빈칸에 알맞은 수를 써 보세요.`;

  return {
    text: '',
    prompt: '시계 그림을 보고 시각을 읽어 보세요.',
    answer: hour * 3600 + minute * 60 + second,
    kind: 'clockReading',
    clockReading: {
      title: '시계 그림을 보고 시각을 읽어 보세요.',
      question,
      hour,
      minute,
      second,
      editableParts,
    },
  };
}

function createTimeAdditionProblem(timeAddition: TimeAdditionProblemData): Problem {
  return {
    text: '',
    prompt: `${timeAddition.mode}:${getTimeValueSignature(timeAddition.left)}${timeAddition.operation}${getTimeValueSignature(timeAddition.right)}`,
    answer: toTotalTimeSeconds(timeAddition.result),
    kind: 'timeAddition',
    timeAddition,
  };
}

function createStoryTimeAdditionProblem(
  timeAddition: Omit<TimeAdditionProblemData, 'mode'> & {
    storyLines: string[];
    storyHighlights?: TimeStoryHighlight[];
  },
): Problem {
  return createTimeAdditionProblem({
    ...timeAddition,
    mode: 'story',
  });
}

const CLOCK_TIME_ADDITION_PRESENTATIONS = [
  {
    title: '시계 그림으로 시간을 더해 보세요.',
    instruction: '시작 시각과 더할 시간을 보고, 결과 시각을 써 보세요.',
  },
  {
    title: '시계를 보고 지난 뒤의 시각을 구해 보세요.',
    instruction: '처음 시각에서 몇 분 몇 초가 지난 뒤의 시각을 적어 보세요.',
  },
  {
    title: '시각이 어떻게 바뀌는지 생각해 보세요.',
    instruction: '주어진 시각에 시간을 더한 뒤의 결과를 구해 보세요.',
  },
] as const;

const BAR_TIME_ADDITION_PRESENTATIONS = [
  {
    title: '띠모형으로 시간을 합쳐 보세요.',
    instruction: '두 시간 띠가 모여 하나가 되는 모습을 보고 합한 시간을 구해 보세요.',
  },
  {
    title: '띠를 보고 더해진 시간을 구해 보세요.',
    instruction: '앞의 시간과 뒤의 시간이 이어진 전체 시간을 적어 보세요.',
  },
  {
    title: '시간 띠를 이어 붙여 보세요.',
    instruction: '두 구간의 시간을 합쳐 전체 시간이 얼마인지 생각해 보세요.',
  },
] as const;

const VERTICAL_TIME_ADDITION_PRESENTATIONS = [
  {
    title: '세로식으로 시간을 더해 보세요.',
    instruction: '세로식을 보고 시간, 분, 초를 차례대로 계산해 보세요.',
  },
  {
    title: '세로 계산으로 시간을 더해 보세요.',
    instruction: '초부터 차례대로 더하며 결과를 구해 보세요.',
  },
  {
    title: '시간 세로셈을 완성해 보세요.',
    instruction: '올림이 있는지 살피며 계산 결과를 적어 보세요.',
  },
] as const;

const CLOCK_TIME_SUBTRACTION_PRESENTATIONS = [
  {
    title: '시계 그림으로 시간을 빼 보세요.',
    instruction: '시작 시각과 뺄 시간을 보고, 결과 시각을 써 보세요.',
  },
  {
    title: '시계를 보고 전의 시각을 구해 보세요.',
    instruction: '주어진 시각에서 몇 분 몇 초 전인지 계산해 보세요.',
  },
  {
    title: '시각에서 시간을 빼 보세요.',
    instruction: '시계에 나타난 시각에서 주어진 시간을 뺀 결과를 구해 보세요.',
  },
] as const;

const BAR_TIME_SUBTRACTION_PRESENTATIONS = [
  {
    title: '띠모형으로 시간을 빼 보세요.',
    instruction: '처음 시간과 뺄 시간을 보고 남은 시간을 구해 보세요.',
  },
  {
    title: '시간 띠에서 남은 시간을 찾아보세요.',
    instruction: '전체 시간에서 일부 시간을 덜어낸 뒤 남은 시간을 적어 보세요.',
  },
  {
    title: '띠모형으로 남은 시간을 계산해 보세요.',
    instruction: '두 시간 띠의 차이를 생각하며 답을 구해 보세요.',
  },
] as const;

const VERTICAL_TIME_SUBTRACTION_PRESENTATIONS = [
  {
    title: '세로식으로 시간을 빼 보세요.',
    instruction: '세로식을 보고 시간, 분, 초를 차례대로 계산해 보세요.',
  },
  {
    title: '세로 계산으로 시간을 빼 보세요.',
    instruction: '필요한 곳에서 받아내림하며 결과를 구해 보세요.',
  },
  {
    title: '시간 세로셈을 완성해 보세요.',
    instruction: '초와 분의 받아내림을 살피며 차를 계산해 보세요.',
  },
] as const;

function createClockTimeAdditionProblem(step = 1): Problem {
  while (true) {
    const startHour = randomInt(1, 10);
    const startMinute =
      step === 1
        ? sample([5, 10, 15, 20, 25, 30, 35, 40])
        : step === 2
          ? randomInt(10, 45)
          : randomInt(35, 55);
    const startSecond =
      step === 1
        ? sample([10, 20, 30])
        : step === 2
          ? sample([15, 25, 35, 45])
          : sample([20, 30, 40, 50]);
    const addMinutes =
      step === 1
        ? randomInt(1, 5)
        : step === 2
          ? randomInt(2, 8)
          : randomInt(8, 18);
    const addSeconds =
      step === 1
        ? sample([10, 20])
        : step === 2
          ? sample([15, 20, 25, 30])
          : sample([15, 25, 35, 45]);
    const result = splitClockSeconds(startHour * 3600 + startMinute * 60 + startSecond + addMinutes * 60 + addSeconds);

    if (result.hours <= 12) {
      const presentation = sample(CLOCK_TIME_ADDITION_PRESENTATIONS);
      return createTimeAdditionProblem({
        title: presentation.title,
        instruction: presentation.instruction,
        mode: 'clock',
        operation: '+',
        left: { hours: startHour, minutes: startMinute, seconds: startSecond },
        right: { hours: 0, minutes: addMinutes, seconds: addSeconds },
        result,
        editableParts: ['hours', 'minutes', 'seconds'],
      });
    }
  }
}

function createBarModelTimeAdditionProblem(step = 1): Problem {
  while (true) {
    const leftMinutes = step === 1 ? randomInt(1, 2) : step === 2 ? randomInt(2, 3) : randomInt(2, 4);
    const rightMinutes = step === 1 ? randomInt(1, 2) : step === 2 ? randomInt(1, 3) : randomInt(2, 4);
    const leftSeconds =
      step === 1
        ? sample([10, 20, 30])
        : step === 2
          ? sample([20, 30, 40])
          : sample([20, 30, 40, 50]);
    const rightSeconds =
      step === 1
        ? sample([10, 20, 30])
        : step === 2
          ? sample([20, 30, 40])
          : sample([10, 20, 30, 40]);
    const totalSeconds = leftMinutes * 60 + leftSeconds + rightMinutes * 60 + rightSeconds;
    const result = splitClockSeconds(totalSeconds);
    const hasSecondCarry = leftSeconds + rightSeconds >= 60;

    if ((step === 1 && hasSecondCarry) || (step >= 2 && !hasSecondCarry)) {
      continue;
    }

    const presentation = sample(BAR_TIME_ADDITION_PRESENTATIONS);
    return createTimeAdditionProblem({
      title: presentation.title,
      instruction: presentation.instruction,
      mode: 'bar',
      operation: '+',
      left: { hours: 0, minutes: leftMinutes, seconds: leftSeconds },
      right: { hours: 0, minutes: rightMinutes, seconds: rightSeconds },
      result,
      editableParts: ['minutes', 'seconds'],
    });
  }
}

function createVerticalTimeAdditionProblem(step = 1): Problem {
  while (true) {
    const left = {
      hours: randomInt(1, step >= 3 ? 5 : 4),
      minutes: randomInt(step === 1 ? 10 : 20, 55),
      seconds: randomInt(step === 1 ? 10 : 20, 55),
    };
    const right = {
      hours: randomInt(step === 1 ? 0 : 1, step >= 4 ? 3 : 2),
      minutes: randomInt(10, 50),
      seconds: randomInt(10, 50),
    };
    const result = splitClockSeconds(toTotalTimeSeconds(left) + toTotalTimeSeconds(right));
    const hasSecondCarry = left.seconds + right.seconds >= 60;
    const hasMinuteCarry = left.minutes + right.minutes + (hasSecondCarry ? 1 : 0) >= 60;

    if (result.hours > 12) {
      continue;
    }

    if (step === 1 && (hasSecondCarry || hasMinuteCarry)) {
      continue;
    }

    if (step === 2 && (!hasSecondCarry || hasMinuteCarry)) {
      continue;
    }

    if (step === 3 && (!hasSecondCarry || !hasMinuteCarry)) {
      continue;
    }

    if (step >= 4 && !hasMinuteCarry) {
      continue;
    }

    const presentation = sample(VERTICAL_TIME_ADDITION_PRESENTATIONS);
    return createTimeAdditionProblem({
      title: presentation.title,
      instruction: presentation.instruction,
      mode: 'vertical',
      operation: '+',
      left,
      right,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
    });
  }
}

const UNIT3_FIXED_TIME_PROBLEM_COUNT = 4;

function createClockTimeSubtractionProblem(step = 1): Problem {
  while (true) {
    const startHour = randomInt(2, 11);
    const startMinute =
      step === 1
        ? sample([20, 25, 30, 35, 40, 45, 50])
        : randomInt(10, 55);
    const startSecond =
      step === 1
        ? sample([20, 30, 40, 50])
        : sample([10, 20, 30, 40, 50]);
    const subtractMinutes =
      step === 1
        ? randomInt(1, 5)
        : randomInt(3, 10);
    const subtractSeconds =
      step === 1
        ? sample([10, 20])
        : sample([10, 20, 30, 40]);
    const hasSecondBorrow = startSecond < subtractSeconds;
    const hasMinuteBorrow = startMinute - (hasSecondBorrow ? 1 : 0) < subtractMinutes;

    if (step === 1 && (hasSecondBorrow || hasMinuteBorrow)) {
      continue;
    }

    const resultSeconds = startHour * 3600 + startMinute * 60 + startSecond - (subtractMinutes * 60 + subtractSeconds);
    const result = splitClockSeconds(resultSeconds);

    if (result.hours >= 1) {
      const presentation = sample(CLOCK_TIME_SUBTRACTION_PRESENTATIONS);
      return createTimeAdditionProblem({
        title: presentation.title,
        instruction: presentation.instruction,
        mode: 'clock',
        operation: '-',
        left: { hours: startHour, minutes: startMinute, seconds: startSecond },
        right: { hours: 0, minutes: subtractMinutes, seconds: subtractSeconds },
        result,
        editableParts: ['hours', 'minutes', 'seconds'],
      });
    }
  }
}

function createBarModelTimeSubtractionProblem(step = 1): Problem {
  while (true) {
    const leftMinutes = step === 1 ? randomInt(3, 5) : randomInt(4, 6);
    const rightMinutes = step === 1 ? randomInt(1, 2) : randomInt(2, 3);
    const leftSeconds =
      step === 1
        ? sample([20, 30, 40, 50])
        : sample([10, 20, 30, 40, 50]);
    const rightSeconds =
      step === 1
        ? sample([10, 20])
        : sample([10, 20, 30, 40]);
    const hasSecondBorrow = leftSeconds < rightSeconds;
    const hasMinuteBorrow = leftMinutes - (hasSecondBorrow ? 1 : 0) < rightMinutes;

    if (step === 1 && (hasSecondBorrow || hasMinuteBorrow)) {
      continue;
    }

    const resultSeconds = leftMinutes * 60 + leftSeconds - (rightMinutes * 60 + rightSeconds);
    const result = splitClockSeconds(resultSeconds);

    if (toTotalTimeSeconds(result) > 0) {
      const presentation = sample(BAR_TIME_SUBTRACTION_PRESENTATIONS);
      return createTimeAdditionProblem({
        title: presentation.title,
        instruction: presentation.instruction,
        mode: 'bar',
        operation: '-',
        left: { hours: 0, minutes: leftMinutes, seconds: leftSeconds },
        right: { hours: 0, minutes: rightMinutes, seconds: rightSeconds },
        result,
        editableParts: ['minutes', 'seconds'],
      });
    }
  }
}

function createVerticalTimeSubtractionProblem(step = 1): Problem {
  while (true) {
    const left = {
      hours: randomInt(2, step === 1 ? 4 : 5),
      minutes: randomInt(15, 55),
      seconds: randomInt(10, 55),
    };
    const right = {
      hours: randomInt(0, 2),
      minutes: randomInt(10, 50),
      seconds: randomInt(10, 50),
    };
    const leftTotalSeconds = toTotalTimeSeconds(left);
    const rightTotalSeconds = toTotalTimeSeconds(right);

    if (rightTotalSeconds >= leftTotalSeconds) {
      continue;
    }

    const result = splitClockSeconds(leftTotalSeconds - rightTotalSeconds);
    const hasSecondBorrow = left.seconds < right.seconds;
    const hasMinuteBorrow = left.minutes - (hasSecondBorrow ? 1 : 0) < right.minutes;
    const borrowCount = Number(hasSecondBorrow) + Number(hasMinuteBorrow);

    if (result.hours < 1) {
      continue;
    }

    if (step === 1 && borrowCount !== 0) {
      continue;
    }

    if (step >= 2 && borrowCount !== 1) {
      continue;
    }

    const presentation = sample(VERTICAL_TIME_SUBTRACTION_PRESENTATIONS);
    return createTimeAdditionProblem({
      title: presentation.title,
      instruction: presentation.instruction,
      mode: 'vertical',
      operation: '-',
      left,
      right,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
    });
  }
}

function createLevel10TimeAdditionProblem(problemSequence = 1, _opponentHP = 100): Problem {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);

  if (resolvedSequence === 1) {
    return createClockTimeAdditionProblem(1);
  }

  if (resolvedSequence === 2) {
    return createBarModelTimeAdditionProblem(1);
  }

  if (resolvedSequence === 3) {
    return createVerticalTimeAdditionProblem(1);
  }

  if (resolvedSequence === 4) {
    return createVerticalTimeAdditionProblem(2);
  }

  return createVerticalTimeAdditionProblem(2);
}

function createLevel11TimeSubtractionProblem(problemSequence = 1, _opponentHP = 100): Problem {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);

  if (resolvedSequence === 1) {
    return createClockTimeSubtractionProblem(1);
  }

  if (resolvedSequence === 2) {
    return createBarModelTimeSubtractionProblem(1);
  }

  if (resolvedSequence === 3) {
    return createVerticalTimeSubtractionProblem(1);
  }

  if (resolvedSequence === 4) {
    return createVerticalTimeSubtractionProblem(2);
  }

  return createVerticalTimeSubtractionProblem(2);
}

type Level12TemplateId =
  | 'eventStartTime'
  | 'activityDuration'
  | 'tripArrivalTime'
  | 'dailyPracticeTotal'
  | 'activityStartTime'
  | 'elapsedTime'
  | 'remainingUntilEvent'
  | 'remainingAfterUse';

type Level12OperationGroup = 'addition' | 'subtraction';

const LEVEL12_ADDITION_TEMPLATE_IDS: Level12TemplateId[] = [
  'eventStartTime',
  'activityDuration',
  'tripArrivalTime',
  'dailyPracticeTotal',
];

const LEVEL12_SUBTRACTION_TEMPLATE_IDS: Level12TemplateId[] = [
  'activityStartTime',
  'elapsedTime',
  'remainingUntilEvent',
  'remainingAfterUse',
];

const LEVEL12_TEMPLATE_OPERATIONS: Record<Level12TemplateId, Level12OperationGroup> = {
  eventStartTime: 'addition',
  activityDuration: 'addition',
  tripArrivalTime: 'addition',
  dailyPracticeTotal: 'addition',
  activityStartTime: 'subtraction',
  elapsedTime: 'subtraction',
  remainingUntilEvent: 'subtraction',
  remainingAfterUse: 'subtraction',
};

const LEVEL12_DEFAULT_TEMPLATE_ORDER: Level12TemplateId[] = [
  'eventStartTime',
  'elapsedTime',
  'activityDuration',
  'activityStartTime',
];

const LEVEL12_OPERATION_PATTERNS: Level12OperationGroup[][] = [
  ['addition', 'subtraction', 'addition', 'subtraction'],
  ['addition', 'addition', 'subtraction', 'subtraction'],
  ['subtraction', 'addition', 'subtraction', 'addition'],
  ['subtraction', 'subtraction', 'addition', 'addition'],
];

function pickLevel12TemplateSubset(
  pool: Level12TemplateId[],
  blockedIds: Set<Level12TemplateId>,
  count: number,
) {
  const available = shuffleValues(pool.filter((id) => !blockedIds.has(id)));
  const fallback = shuffleValues(pool.filter((id) => blockedIds.has(id)));
  return [...available, ...fallback].slice(0, count);
}

function buildLevel12RoundTemplateOrder(previousOrder: Level12TemplateId[] = []) {
  const previousAdditionIds = new Set(previousOrder.filter((id) => LEVEL12_TEMPLATE_OPERATIONS[id] === 'addition'));
  const previousSubtractionIds = new Set(previousOrder.filter((id) => LEVEL12_TEMPLATE_OPERATIONS[id] === 'subtraction'));
  const operationPattern = sample(LEVEL12_OPERATION_PATTERNS);
  const additionCount = operationPattern.filter((group) => group === 'addition').length;
  const subtractionCount = operationPattern.length - additionCount;
  const additionTemplates = shuffleValues(
    pickLevel12TemplateSubset(LEVEL12_ADDITION_TEMPLATE_IDS, previousAdditionIds, additionCount),
  );
  const subtractionTemplates = shuffleValues(
    pickLevel12TemplateSubset(LEVEL12_SUBTRACTION_TEMPLATE_IDS, previousSubtractionIds, subtractionCount),
  );
  let additionIndex = 0;
  let subtractionIndex = 0;

  return operationPattern.map((group) =>
    group === 'addition' ? additionTemplates[additionIndex++] : subtractionTemplates[subtractionIndex++],
  );
}

function createLevel12MovieStartTimeProblem(): Problem {
  const scenarios = [
    {
      title: '영화가 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 영화가 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '영화 시작까지',
      line2: (waitText: string) => `영화는 ${waitText} 후에 시작합니다.`,
      question: '영화가 시작하는 시각은 언제인가요?',
    },
    {
      title: '인형극이 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 인형극이 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '인형극 시작까지',
      line2: (waitText: string) => `인형극은 ${waitText} 후에 시작합니다.`,
      question: '인형극이 시작하는 시각은 언제인가요?',
    },
    {
      title: '마술 공연이 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 마술 공연이 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '공연 시작까지',
      line2: (waitText: string) => `마술 공연은 ${waitText} 후에 시작합니다.`,
      question: '마술 공연이 시작하는 시각은 언제인가요?',
    },
    {
      title: '낭독회가 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 낭독회가 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '낭독회 시작까지',
      line2: (waitText: string) => `낭독회는 ${waitText} 후에 시작합니다.`,
      question: '낭독회가 시작하는 시각은 언제인가요?',
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const currentHour = randomInt(7, 11);
    const currentMinute = sample([25, 30, 35, 40, 45, 50, 55]);
    const waitMinutes = sample([10, 15, 20, 25, 30, 35]);
    const result = splitClockSeconds(currentHour * 3600 + currentMinute * 60 + waitMinutes * 60);

    if (result.hours > 12 || result.hours === currentHour) {
      continue;
    }

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left: { hours: currentHour, minutes: currentMinute, seconds: 0 },
      right: { hours: 0, minutes: waitMinutes, seconds: 0 },
      result,
      editableParts: ['hours', 'minutes'],
      storyHighlights: [
        { label: '지금 시각', value: formatClockTime(currentHour, currentMinute) },
        { label: scenario.waitLabel, value: formatDuration(0, waitMinutes) },
      ],
      storyLines: [
        `지금 시각은 ${formatClockTime(currentHour, currentMinute)}입니다.`,
        scenario.line2(formatDuration(0, waitMinutes)),
        scenario.question,
      ],
    });
  }
}

function createLevel12DrawingDurationProblem(): Problem {
  const scenarios = [
    {
      title: '그림을 완성하는 데 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '밑그림',
      rightLabel: '색칠',
      storyLines: (leftText: string, rightText: string) => [
        `지민이는 ${leftText} 동안 밑그림을 그리고,`,
        `${rightText} 동안 색칠하여 그림을 완성했습니다.`,
        '그림을 완성하는 데 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '과학 관찰 기록을 마치는 데 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '관찰',
      rightLabel: '기록 정리',
      storyLines: (leftText: string, rightText: string) => [
        `도윤이는 ${leftText} 동안 식물을 관찰하고,`,
        `${rightText} 동안 관찰 기록을 정리했습니다.`,
        '관찰 기록을 마치는 데 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '모형을 만드는 데 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '부품 고르기',
      rightLabel: '조립하기',
      storyLines: (leftText: string, rightText: string) => [
        `서준이는 ${leftText} 동안 부품을 고르고,`,
        `${rightText} 동안 모형을 조립했습니다.`,
        '모형을 만드는 데 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '독서 활동에 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '책 읽기',
      rightLabel: '독서록 쓰기',
      storyLines: (leftText: string, rightText: string) => [
        `하린이는 ${leftText} 동안 책을 읽고,`,
        `${rightText} 동안 독서록을 썼습니다.`,
        '독서 활동에 걸린 시간은 모두 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const sketchMinutes = randomInt(6, 16);
    const sketchSeconds = sample([10, 20, 30, 40, 50]);
    const colorMinutes = randomInt(22, 38);
    const colorSeconds = sample([15, 25, 35, 45, 50]);
    const result = splitClockSeconds(sketchMinutes * 60 + sketchSeconds + colorMinutes * 60 + colorSeconds);

    if (result.hours > 0 || sketchSeconds + colorSeconds < 60) {
      continue;
    }

    const sketchText = formatDuration(0, sketchMinutes, sketchSeconds);
    const colorText = formatDuration(0, colorMinutes, colorSeconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left: { hours: 0, minutes: sketchMinutes, seconds: sketchSeconds },
      right: { hours: 0, minutes: colorMinutes, seconds: colorSeconds },
      result,
      editableParts: ['minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.leftLabel, value: sketchText },
        { label: scenario.rightLabel, value: colorText },
      ],
      storyLines: scenario.storyLines(sketchText, colorText),
    });
  }
}

function createLevel12TripArrivalTimeProblem(): Problem {
  const scenarios = [
    {
      title: '도착 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '이동 시간',
      storyLines: (startText: string, durationText: string) => [
        `민서는 ${startText}에 체험학습 버스를 탔습니다.`,
        `버스를 타고 ${durationText} 동안 이동했습니다.`,
        '도착한 시각은 언제인가요?',
      ],
    },
    {
      title: '수영장에 도착한 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '걸린 시간',
      storyLines: (startText: string, durationText: string) => [
        `유나는 ${startText}에 집에서 출발했습니다.`,
        `${durationText} 동안 이동하여 수영장에 도착했습니다.`,
        '수영장에 도착한 시각은 언제인가요?',
      ],
    },
    {
      title: '도서관에 도착한 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '이동 시간',
      storyLines: (startText: string, durationText: string) => [
        `지후는 ${startText}에 학교를 출발했습니다.`,
        `도서관까지 가는 데 ${durationText}이 걸렸습니다.`,
        '도서관에 도착한 시각은 언제인가요?',
      ],
    },
    {
      title: '체육관에 도착한 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '이동 시간',
      storyLines: (startText: string, durationText: string) => [
        `서아는 ${startText}에 학원 차를 탔습니다.`,
        `체육관까지 ${durationText} 동안 이동했습니다.`,
        '체육관에 도착한 시각은 언제인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const start = {
      hours: randomInt(1, 9),
      minutes: randomInt(15, 50),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const duration = {
      hours: sample([0, 1]),
      minutes: randomInt(15, 42),
      seconds: sample([15, 25, 35, 45]),
    };
    const result = splitClockSeconds(toTotalTimeSeconds(start) + toTotalTimeSeconds(duration));
    const hasSecondCarry = start.seconds + duration.seconds >= 60;
    const hasMinuteCarry = start.minutes + duration.minutes + (hasSecondCarry ? 1 : 0) >= 60;

    if (result.hours > 12 || (!hasSecondCarry && !hasMinuteCarry)) {
      continue;
    }

    const startText = formatClockTime(start.hours, start.minutes, start.seconds);
    const durationText = formatDuration(duration.hours, duration.minutes, duration.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left: start,
      right: duration,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.startLabel, value: startText },
        { label: scenario.durationLabel, value: durationText },
      ],
      storyLines: scenario.storyLines(startText, durationText),
    });
  }
}

function createLevel12DailyPracticeTotalProblem(): Problem {
  const scenarios = [
    {
      title: '하루 동안 연습한 시간을 구해 보세요.',
      instruction: '두 번의 연습 시간을 합해서 하루 동안 연습한 시간을 써 보세요.',
      leftLabel: '오전 연습',
      rightLabel: '오후 연습',
      storyLines: (leftText: string, rightText: string) => [
        `유나는 오전에 ${leftText} 동안 피아노를 연습하고,`,
        `오후에 ${rightText} 동안 발표 연습을 했습니다.`,
        '하루 동안 연습한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '하루 동안 공부한 시간을 구해 보세요.',
      instruction: '두 번의 공부 시간을 합해서 하루 동안 공부한 시간을 써 보세요.',
      leftLabel: '오전 공부',
      rightLabel: '오후 공부',
      storyLines: (leftText: string, rightText: string) => [
        `도윤이는 오전에 ${leftText} 동안 책을 읽고,`,
        `오후에 ${rightText} 동안 문제를 풀었습니다.`,
        '하루 동안 공부한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '하루 동안 활동한 시간을 구해 보세요.',
      instruction: '두 번의 활동 시간을 합해서 하루 동안 활동한 시간을 써 보세요.',
      leftLabel: '첫 번째 활동',
      rightLabel: '두 번째 활동',
      storyLines: (leftText: string, rightText: string) => [
        `하람이는 오전에 ${leftText} 동안 로봇을 만들고,`,
        `오후에 ${rightText} 동안 작품을 꾸몄습니다.`,
        '하루 동안 활동한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '하루 동안 준비한 시간을 구해 보세요.',
      instruction: '두 번의 준비 시간을 합해서 하루 동안 준비한 시간을 써 보세요.',
      leftLabel: '1차 준비',
      rightLabel: '2차 준비',
      storyLines: (leftText: string, rightText: string) => [
        `세아는 오전에 ${leftText} 동안 발표 자료를 만들고,`,
        `오후에 ${rightText} 동안 발표를 연습했습니다.`,
        '하루 동안 준비한 시간은 모두 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const left = {
      hours: 0,
      minutes: randomInt(26, 38),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const right = {
      hours: 0,
      minutes: randomInt(24, 36),
      seconds: sample([15, 25, 35, 45, 50]),
    };
    const result = splitClockSeconds(toTotalTimeSeconds(left) + toTotalTimeSeconds(right));
    const hasSecondCarry = left.seconds + right.seconds >= 60;
    const hasMinuteCarry = left.minutes + right.minutes + (hasSecondCarry ? 1 : 0) >= 60;

    if (result.hours !== 1 || (!hasSecondCarry && !hasMinuteCarry)) {
      continue;
    }

    const leftText = formatDuration(left.hours, left.minutes, left.seconds);
    const rightText = formatDuration(right.hours, right.minutes, right.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left,
      right,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.leftLabel, value: leftText },
        { label: scenario.rightLabel, value: rightText },
      ],
      storyLines: scenario.storyLines(leftText, rightText),
    });
  }
}

function createLevel12ElapsedTimeProblem(): Problem {
  const scenarios = [
    {
      title: '활동한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `하린이는 ${startText}에 독서 활동을 시작했습니다.`,
        `${endText}에 활동을 마쳤습니다.`,
        '독서 활동에 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '연습한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `지후는 ${startText}에 리코더 연습을 시작했습니다.`,
        `${endText}에 연습을 마쳤습니다.`,
        '리코더 연습에 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '관찰한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `도윤이는 ${startText}부터 곤충을 관찰했습니다.`,
        `${endText}에 관찰을 마쳤습니다.`,
        '곤충을 관찰한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '운동한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `서준이는 ${startText}에 줄넘기를 시작했습니다.`,
        `${endText}에 운동을 마쳤습니다.`,
        '줄넘기한 시간은 모두 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const start = {
      hours: randomInt(1, 9),
      minutes: randomInt(5, 50),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const duration = {
      hours: sample([0, 1]),
      minutes: randomInt(18, 42),
      seconds: sample([10, 20, 30, 40, 45]),
    };
    const end = splitClockSeconds(toTotalTimeSeconds(start) + toTotalTimeSeconds(duration));
    const hasSecondBorrow = end.seconds < start.seconds;
    const hasMinuteBorrow = end.minutes - (hasSecondBorrow ? 1 : 0) < start.minutes;
    const editableParts: ClockInputPart[] =
      duration.hours > 0 ? ['hours', 'minutes', 'seconds'] : ['minutes', 'seconds'];

    if (end.hours > 12 || (!hasSecondBorrow && !hasMinuteBorrow)) {
      continue;
    }

    const startText = formatClockTime(start.hours, start.minutes, start.seconds);
    const endText = formatClockTime(end.hours, end.minutes, end.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: end,
      right: start,
      result: duration,
      editableParts,
      storyHighlights: [
        { label: scenario.startLabel, value: startText },
        { label: scenario.endLabel, value: endText },
      ],
      storyLines: scenario.storyLines(startText, endText),
    });
  }
}

function createLevel12StartTimeProblem(): Problem {
  const scenarios = [
    {
      title: '산책을 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 도착한 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '산책 시간',
      arrivalLabel: '도착 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `재민이는 가족들과 ${durationText} 동안 산책을 했습니다.`,
        `산책을 하고 집에 돌아온 시각은 ${arrivalText}입니다.`,
        '재민이가 산책을 시작한 시각은 언제인가요?',
      ],
    },
    {
      title: '수영 연습을 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 끝난 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '연습 시간',
      arrivalLabel: '끝난 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `민서는 ${durationText} 동안 수영 연습을 했습니다.`,
        `연습이 끝난 시각은 ${arrivalText}입니다.`,
        '민서가 수영 연습을 시작한 시각은 언제인가요?',
      ],
    },
    {
      title: '체험관 관람을 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 끝난 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '관람 시간',
      arrivalLabel: '끝난 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `도윤이는 ${durationText} 동안 체험관을 둘러보았습니다.`,
        `관람을 마친 시각은 ${arrivalText}입니다.`,
        '도윤이가 체험관 관람을 시작한 시각은 언제인가요?',
      ],
    },
    {
      title: '자전거 타기를 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 돌아온 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '탄 시간',
      arrivalLabel: '돌아온 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `서윤이는 ${durationText} 동안 자전거를 탔습니다.`,
        `집에 돌아온 시각은 ${arrivalText}입니다.`,
        '서윤이가 자전거 타기를 시작한 시각은 언제인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const start = {
      hours: randomInt(2, 9),
      minutes: randomInt(5, 50),
      seconds: sample([10, 15, 20, 25, 30, 35, 40, 45, 50]),
    };
    const duration = {
      hours: sample([0, 1]),
      minutes: randomInt(18, 45),
      seconds: sample([10, 15, 20, 25, 30, 35, 40, 45]),
    };
    const arrival = splitClockSeconds(toTotalTimeSeconds(start) + toTotalTimeSeconds(duration));
    const hasSecondBorrow = arrival.seconds < duration.seconds;
    const hasMinuteBorrow = arrival.minutes - (hasSecondBorrow ? 1 : 0) < duration.minutes;

    if (arrival.hours > 12 || (!hasSecondBorrow && !hasMinuteBorrow)) {
      continue;
    }

    const durationText = formatDuration(duration.hours, duration.minutes, duration.seconds);
    const arrivalText = formatClockTime(arrival.hours, arrival.minutes, arrival.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: arrival,
      right: duration,
      result: start,
      editableParts: ['hours', 'minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.durationLabel, value: durationText },
        { label: scenario.arrivalLabel, value: arrivalText },
      ],
      storyLines: scenario.storyLines(durationText, arrivalText),
    });
  }
}

function createLevel12RemainingUntilEventProblem(): Problem {
  const scenarios = [
    {
      title: '남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '예정된 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `도서관 수업은 ${scheduledText}에 시작합니다.`,
        '수업이 시작할 때까지 남은 시간은 얼마인가요?',
      ],
    },
    {
      title: '공연까지 남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '공연 시작 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `공연은 ${scheduledText}에 시작합니다.`,
        '공연이 시작할 때까지 남은 시간은 얼마인가요?',
      ],
    },
    {
      title: '버스 출발까지 남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '출발 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `체험학습 버스는 ${scheduledText}에 출발합니다.`,
        '버스가 출발할 때까지 남은 시간은 얼마인가요?',
      ],
    },
    {
      title: '수업 시작까지 남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '수업 시작 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `체육 수업은 ${scheduledText}에 시작합니다.`,
        '체육 수업이 시작할 때까지 남은 시간은 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const current = {
      hours: randomInt(7, 10),
      minutes: sample([25, 30, 35, 40, 45, 50, 55]),
      seconds: 0,
    };
    const remaining = {
      hours: sample([0, 0, 1]),
      minutes: sample([10, 15, 20, 25, 30, 35, 40]),
      seconds: 0,
    };
    const scheduled = splitClockSeconds(toTotalTimeSeconds(current) + toTotalTimeSeconds(remaining));
    const editableParts: ClockInputPart[] = remaining.hours > 0 ? ['hours', 'minutes'] : ['minutes'];

    if (scheduled.hours > 12 || scheduled.hours === current.hours) {
      continue;
    }

    const currentText = formatClockTime(current.hours, current.minutes);
    const scheduledText = formatClockTime(scheduled.hours, scheduled.minutes);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: scheduled,
      right: current,
      result: remaining,
      editableParts,
      storyHighlights: [
        { label: scenario.currentLabel, value: currentText },
        { label: scenario.scheduledLabel, value: scheduledText },
      ],
      storyLines: scenario.storyLines(currentText, scheduledText),
    });
  }
}

function createLevel12RemainingAfterUseProblem(): Problem {
  const scenarios = [
    {
      title: '남은 연습 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 연습 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `서윤이는 오늘 ${totalText} 동안 연습하기로 했습니다.`,
        `그중 ${usedText} 동안 이미 연습했습니다.`,
        '남은 연습 시간은 얼마인가요?',
      ],
    },
    {
      title: '남은 준비 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 준비 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `민서는 발표 준비를 ${totalText} 동안 하기로 했습니다.`,
        `그중 ${usedText} 동안 자료를 만들었습니다.`,
        '남은 준비 시간은 얼마인가요?',
      ],
    },
    {
      title: '남은 놀이 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 놀이 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `지후는 놀이터에서 ${totalText} 동안 놀기로 했습니다.`,
        `그중 ${usedText} 동안 미끄럼틀을 탔습니다.`,
        '남은 놀이 시간은 얼마인가요?',
      ],
    },
    {
      title: '남은 읽기 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 읽기 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `하린이는 책을 ${totalText} 동안 읽기로 했습니다.`,
        `그중 ${usedText} 동안 이미 책을 읽었습니다.`,
        '남은 읽기 시간은 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const total = {
      hours: 1,
      minutes: randomInt(10, 28),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const used = {
      hours: 0,
      minutes: randomInt(25, 48),
      seconds: sample([15, 25, 35, 45]),
    };
    const remainingSeconds = toTotalTimeSeconds(total) - toTotalTimeSeconds(used);

    if (remainingSeconds <= 0) {
      continue;
    }

    const remaining = splitClockSeconds(remainingSeconds);
    const hasSecondBorrow = total.seconds < used.seconds;
    const hasMinuteBorrow = total.minutes - (hasSecondBorrow ? 1 : 0) < used.minutes;
    const editableParts: ClockInputPart[] =
      remaining.hours > 0 ? ['hours', 'minutes', 'seconds'] : ['minutes', 'seconds'];

    if (!hasSecondBorrow && !hasMinuteBorrow) {
      continue;
    }

    const totalText = formatDuration(total.hours, total.minutes, total.seconds);
    const usedText = formatDuration(used.hours, used.minutes, used.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: total,
      right: used,
      result: remaining,
      editableParts,
      storyHighlights: [
        { label: scenario.totalLabel, value: totalText },
        { label: scenario.usedLabel, value: usedText },
      ],
      storyLines: scenario.storyLines(totalText, usedText),
    });
  }
}

function createLevel12ProblemFromTemplate(templateId: Level12TemplateId): Problem {
  if (templateId === 'eventStartTime') {
    return createLevel12MovieStartTimeProblem();
  }

  if (templateId === 'activityDuration') {
    return createLevel12DrawingDurationProblem();
  }

  if (templateId === 'tripArrivalTime') {
    return createLevel12TripArrivalTimeProblem();
  }

  if (templateId === 'dailyPracticeTotal') {
    return createLevel12DailyPracticeTotalProblem();
  }

  if (templateId === 'activityStartTime') {
    return createLevel12StartTimeProblem();
  }

  if (templateId === 'elapsedTime') {
    return createLevel12ElapsedTimeProblem();
  }

  if (templateId === 'remainingUntilEvent') {
    return createLevel12RemainingUntilEventProblem();
  }

  return createLevel12RemainingAfterUseProblem();
}

function createLevel12TimeMixedProblem(
  problemSequence = 1,
  _opponentHP = 100,
  templateOrder: Level12TemplateId[] = LEVEL12_DEFAULT_TEMPLATE_ORDER,
): Problem {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);
  const templateId = templateOrder[resolvedSequence - 1] ?? LEVEL12_DEFAULT_TEMPLATE_ORDER[resolvedSequence - 1];
  return createLevel12ProblemFromTemplate(templateId);
}

function isUnit3FixedTimeSequenceLevel(unitId: LearningUnitId, level: number) {
  return unitId === 'unit3' && (level === 10 || level === 11 || level === 12);
}

function getUnit3FixedTimeOpponentHPAfterCorrect(problemSequence: number) {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);
  return Math.max(0, 100 - resolvedSequence * (100 / UNIT3_FIXED_TIME_PROBLEM_COUNT));
}

function createMillimeterNeedIntroProblem(): Problem {
  const options = ['m', 'mm', 'km'];
  const situations = [
    '사과씨의 길이를 자로 재었더니 1cm보다 짧았습니다.\n그런데 0cm라고 하기는 어렵고, 1cm라고 하기도 어렵습니다.',
    '쌀알의 길이를 자로 재었더니 1cm보다 짧았습니다.\ncm로만 나타내면 얼마나 되는지 딱 맞게 말하기 어렵습니다.',
    '단추 한 개의 두께를 재었더니 1cm보다 짧았습니다.\n0cm라고 하면 너무 작고, 1cm라고 하면 너무 크게 나타납니다.',
    '짧게 자른 종이띠의 길이를 재었더니 1cm보다 짧았습니다.\ncm만으로는 길이를 자세히 나타내기 어렵습니다.',
    '손톱의 두께를 재어 보니 1cm보다 짧았습니다.\ncm로만 나타내면 얼마나 되는지 정확히 말하기 어렵습니다.',
    '도화지에 그은 작은 선의 길이를 재었더니 1cm보다 짧았습니다.\ncm로만 쓰면 실제 길이와 비슷하게 나타내기 어렵습니다.',
    '작은 스티커 한 조각의 길이를 재었더니 1cm보다 짧았습니다.\ncm보다 더 잘게 나타낼 단위가 필요합니다.',
    '연필심 굵기를 자로 재어 보니 1cm보다 훨씬 짧았습니다.\ncm만으로는 길이를 바르게 말하기 어렵습니다.',
  ];
  const questions = [
    '더 [[정확하게]] 나타내기 위해 필요한 단위는 무엇일까요?',
    '이 길이를 [[딱 맞게]] 나타내려면 어떤 단위가 필요할까요?',
    'cm보다 더 잘게 나타내려면 어떤 단위를 써야 할까요?',
  ];
  return createShuffledOptionsProblem(
    `${sampleAvoidingImmediateRepeat('unit3-mm-intro-situation', situations)}\n${sampleAvoidingImmediateRepeat('unit3-mm-intro-question', questions)}`,
    options,
    'mm',
  );
}

function createMillimeterNeedChoiceProblem(): Problem {
  const options = ['[[정확하게]]', '[[편하게]]'];
  const questions = [
    'mm는 cm보다 길이를 더 어떻게 나타내기 위해 필요한 단위일까요?',
    '1cm보다 짧은 길이를 나타낼 때 mm는 어떤 점에서 더 좋을까요?',
    'mm를 사용하면 cm보다 길이를 어떻게 나타낼 수 있을까요?',
    '아주 짧은 길이를 말할 때 mm가 필요한 까닭은 무엇일까요?',
  ];
  return createShuffledOptionsProblem(
    sampleAvoidingImmediateRepeat('unit3-mm-choice-question', questions),
    options,
    '[[정확하게]]',
  );
}

function createKilometerNeedIntroProblem(): Problem {
  const options = ['cm', 'km', 'mm'];
  const situations = [
    '서울에서 부산까지의 거리를 m로 나타내면 아주 큰 수가 됩니다.',
    '서울에서 대구까지의 거리를 m로 나타내면 아주 큰 수가 됩니다.',
    '학교에서 수련원까지 버스로 가는 거리를 m로 나타내면 수가 너무 커집니다.',
    '우리 집에서 할머니 댁까지 차로 가는 먼 거리를 m로 나타내면 아주 큰 수가 됩니다.',
    '도시와 도시 사이의 거리를 m로 나타내면 숫자가 너무 길어집니다.',
    '고속도로를 따라 멀리 이동한 거리를 m로 나타내면 숫자가 너무 커집니다.',
    '기차를 타고 다른 도시까지 가는 거리를 m로만 쓰면 읽기 불편합니다.',
    '멀리 떨어진 놀이공원까지의 거리를 m로 나타내면 수가 너무 길어집니다.',
  ];
  const questions = [
    '더 [[편하게]] 나타내기 위해 필요한 단위는 무엇일까요?',
    '이처럼 먼 거리를 나타낼 때 쓰기 좋은 단위는 무엇일까요?',
    '숫자가 너무 길어지지 않게 하려면 어떤 단위를 써야 할까요?',
  ];
  return createShuffledOptionsProblem(
    `${sampleAvoidingImmediateRepeat('unit3-km-intro-situation', situations)}\n${sampleAvoidingImmediateRepeat('unit3-km-intro-question', questions)}`,
    options,
    'km',
  );
}

function createKilometerNeedChoiceProblem(): Problem {
  const options = ['[[정확하게]]', '[[편하게]]'];
  const questions = [
    'km는 m보다 먼 거리를 더 어떻게 나타내기 위해 필요한 단위일까요?',
    '아주 먼 거리를 말할 때 km를 쓰는 까닭은 무엇일까요?',
    'km를 사용하면 먼 거리를 m보다 어떻게 나타낼 수 있을까요?',
    '먼 거리를 나타낼 때 km가 좋은 점은 무엇일까요?',
  ];
  return createShuffledOptionsProblem(
    sampleAvoidingImmediateRepeat('unit3-km-choice-question', questions),
    options,
    '[[편하게]]',
  );
}

function createSecondNeedIntroProblem(): Problem {
  const options = ['시간', '초', '분'];
  const situations = [
    '눈을 한 번 깜빡이는 데 걸리는 시간은 1분보다 훨씬 짧았습니다.\n분으로만 나타내면 얼마나 걸렸는지 자세히 말하기 어렵습니다.',
    '박수 한 번 치는 데 걸리는 시간은 아주 짧았습니다.\n분으로만 나타내면 걸린 시간을 정확하게 말하기 어렵습니다.',
    '엘리베이터 문이 닫히는 데 걸린 시간은 1분보다 훨씬 짧았습니다.\n짧은 시간을 분으로만 나타내면 불편합니다.',
    '공을 한 번 던지고 받는 데 걸리는 시간은 매우 짧았습니다.\n분으로만 나타내면 얼마나 걸렸는지 알기 어렵습니다.',
    '출발 신호를 듣고 한 걸음 떼는 데 걸리는 시간은 아주 짧았습니다.\n이처럼 짧은 시간은 분보다 더 작은 단위가 필요합니다.',
    '촛불을 후 하고 끄는 데 걸리는 시간은 매우 짧았습니다.\n분으로만 쓰면 실제 느낌과 다르게 나타납니다.',
    '문자를 한 번 눌러 보내는 데 걸리는 시간은 아주 짧았습니다.\n이런 시간은 분보다 더 작은 단위가 필요합니다.',
    '리모컨 버튼을 한 번 누르는 데 걸리는 시간은 거의 잠깐입니다.\n분으로는 자세히 나타내기 어렵습니다.',
  ];
  const questions = [
    '더 [[정확하게]] 나타내기 위해 필요한 단위는 무엇일까요?',
    '이처럼 짧은 시간을 나타내려면 어떤 단위가 필요할까요?',
    '분보다 더 작은 단위로 나타내려면 무엇을 써야 할까요?',
  ];
  return createShuffledOptionsProblem(
    `${sampleAvoidingImmediateRepeat('unit3-second-intro-situation', situations)}\n${sampleAvoidingImmediateRepeat('unit3-second-intro-question', questions)}`,
    options,
    '초',
  );
}

function createSecondNeedChoiceProblem(): Problem {
  const options = ['[[정확하게]]', '[[편하게]]'];
  const questions = [
    '초는 분보다 짧은 시간을 더 어떻게 나타내기 위해 필요한 단위일까요?',
    '아주 짧은 시간을 나타낼 때 초를 쓰는 까닭은 무엇일까요?',
    '초를 사용하면 짧은 시간을 분보다 어떻게 나타낼 수 있을까요?',
    '짧은 시간을 말할 때 초가 필요한 이유는 무엇일까요?',
  ];
  return createShuffledOptionsProblem(
    sampleAvoidingImmediateRepeat('unit3-second-choice-question', questions),
    options,
    '[[정확하게]]',
  );
}

function createEquationProblem(a: number, b: number, op: '+' | '-', answer: number): Problem {
  const text = `${a} ${op} ${b}`;
  return { text, prompt: text, answer, kind: 'equation' };
}

function createStoryProblem(level: number, a: number, b: number, op: '+' | '-', answer: number): Problem {
  const text = `${a} ${op} ${b}`;
  const prompt = sample(STORY_TEMPLATE_POOLS[level]?.[op] ?? STORY_TEMPLATE_POOLS[9][op])(a, b);
  return { text, prompt, answer, kind: 'story' };
}

function createPromptProblem(
  prompt: string,
  answer: number,
  answerUnit?: string,
  options?: {
    storyTable?: StoryPromptTableData;
  },
): Problem {
  return {
    text: '',
    prompt,
    answer,
    kind: 'story',
    answerUnit,
    storyTable: options?.storyTable,
  };
}

function createMeasurementProblem({
  title,
  question,
  objectKind,
  objectLabel,
  startMm,
  lengthMm,
}: {
  title: string;
  question: string;
  objectKind: MeasurementObjectKind;
  objectLabel: string;
  startMm: number;
  lengthMm: number;
}): Problem {
  return {
    text: '',
    prompt: question,
    answer: lengthMm,
    kind: 'measurement',
    answerUnit: 'mm',
    measurement: {
      title,
      question,
      objectKind,
      objectLabel,
      startMm,
      lengthMm,
      rulerCm: Math.max(5, Math.ceil((startMm + lengthMm + 8) / 10)),
    },
  };
}

function createDistanceMapProblem(distanceMap: DistanceMapProblemData): Problem {
  return {
    text: '',
    prompt: `${distanceMap.question}\n${distanceMap.sentence}`,
    answer: distanceMap.estimatedKilometers,
    kind: 'distanceMap',
    distanceMap,
  };
}

function createDistanceWorksheetProblem(distanceWorksheet: DistanceWorksheetProblemData): Problem {
  return {
    text: '',
    prompt: `${distanceWorksheet.instruction}\n${distanceWorksheet.prompt.prefix}□${distanceWorksheet.prompt.suffix}`,
    answer: 0,
    answerUnit: distanceWorksheet.prompt.answerUnit,
    requiresUnitSelection: Boolean(distanceWorksheet.prompt.answerUnit),
    kind: 'distanceWorksheet',
    distanceWorksheet,
  };
}

function normalizeAnswerUnit(unit: string) {
  return unit.trim().replace(/\s+/g, '').toLowerCase();
}

function normalizeSecretCode(value: string) {
  return value.replace(/\s+/g, '');
}

function requiresSecretCodeForLevelTransition(unitId: LearningUnitId, currentLevel: number, nextLevel: number) {
  return (
    unitId === UNIT3_SECRET_CODE_GATE.unitId &&
    currentLevel === UNIT3_SECRET_CODE_GATE.fromLevel &&
    nextLevel === UNIT3_SECRET_CODE_GATE.nextLevel
  );
}

function normalizeDistanceWorksheetAnswer(value: string, kind: DistanceWorksheetInputKind) {
  const trimmed = value.trim();
  return kind === 'number' ? trimmed.replace(/\D/g, '') : trimmed.replace(/\s+/g, '');
}

function getAnswerUnitOptions(expectedUnit: string) {
  const normalizedUnit = normalizeAnswerUnit(expectedUnit);

  if (['mm', 'cm', 'm', 'km'].includes(normalizedUnit)) {
    return ['mm', 'cm', 'm', 'km'];
  }

  if (['초', '분', '시간'].includes(expectedUnit.trim())) {
    return ['초', '분', '시간'];
  }

  return [expectedUnit];
}

const UNIT_SELECTION_CHALLENGE_POOLS: Partial<Record<number, UnitSelectionChallenge[]>> = {
  2: [
    {
      badge: '길이 단위 선택',
      prompt: '가위의 긴 쪽 길이는 약 15 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '지우개 한 개의 길이는 약 45 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '책 한 권의 두께는 약 12 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '색연필 한 자루의 길이는 약 18 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '단추 한 개의 두께는 약 3 □입니다.',
      options: ['mm', 'cm', 'm'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '공책의 가로 길이는 약 21 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '손톱의 두께는 약 1 □입니다.',
      options: ['mm', 'cm', 'm'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '빨대의 길이는 약 20 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
  ],
  4: [
    {
      badge: '길이 판단하기',
      prompt: '단위를 잘못 사용한 문장은 어느 것일까요?',
      options: [
        '필통의 길이는 약 20cm입니다.',
        '버스의 길이는 약 10m입니다.',
        '학교 복도의 길이는 약 70km입니다.',
      ],
      answer: '학교 복도의 길이는 약 70km입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '수학책의 두께는 약 9mm입니다.',
        '엄지손톱의 너비는 약 2km입니다.',
        '교실 문의 높이는 약 2m입니다.',
      ],
      answer: '엄지손톱의 너비는 약 2km입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '나무젓가락 한 개의 길이는 약 20km입니다.',
        '도로의 길이는 약 3mm입니다.',
        '연필 한 자루의 길이는 약 18cm입니다.',
      ],
      answer: '연필 한 자루의 길이는 약 18cm입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '고속도로의 길이는 약 7cm입니다.',
        '책상 높이는 약 70cm입니다.',
        '연필심의 굵기는 약 2m입니다.',
      ],
      answer: '책상 높이는 약 70cm입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '교실 칠판의 가로 길이는 약 3m입니다.',
        '운동화 끈의 길이는 약 1m입니다.',
        '개미의 길이는 약 8km입니다.',
      ],
      answer: '개미의 길이는 약 8km입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '복사 종이 한 장의 두께는 약 1m입니다.',
        '손가락 한 마디의 길이는 약 4cm입니다.',
        '학교 운동장의 둘레는 약 400mm입니다.',
      ],
      answer: '손가락 한 마디의 길이는 약 4cm입니다.',
    },
  ],
  7: [
    {
      badge: '거리 단위 선택',
      prompt: '집에서 학교까지의 거리를 알맞게 나타낸 것은 어느 것일까요?',
      options: ['1mm 200cm', '1km 200m', '1m 200mm'],
      answer: '1km 200m',
    },
    {
      badge: '거리 단위 선택',
      prompt: '서울에서 대구까지의 거리는 약 237 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'km',
    },
    {
      badge: '거리 단위 선택',
      prompt: '학교에서 가까운 편의점까지의 거리는 약 400 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'm',
    },
    {
      badge: '거리 단위 선택',
      prompt: '부산에서 대구까지의 거리는 약 90 □입니다.',
      options: ['cm', 'm', 'km'],
      answer: 'km',
    },
    {
      badge: '거리 단위 선택',
      prompt: '학교 현관에서 교실까지의 거리는 약 80 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'm',
    },
    {
      badge: '거리 단위 선택',
      prompt: '놀이터까지의 거리를 알맞게 나타낸 것은 어느 것일까요?',
      options: ['850m', '850km', '850mm'],
      answer: '850m',
    },
    {
      badge: '거리 단위 선택',
      prompt: '집에서 할머니 댁까지 차로 가는 거리를 알맞게 나타낸 것은 어느 것일까요?',
      options: ['2km 300m', '2m 300mm', '2mm 300cm'],
      answer: '2km 300m',
    },
  ],
  8: [
    {
      badge: '시간 단위 선택',
      prompt: '박수 한 번 치는 데 걸리는 시간은 약 1 □입니다.',
      options: ['초', '분', '시간'],
      answer: '초',
    },
    {
      badge: '시간 단위 선택',
      prompt: '양치하는 데 걸리는 시간은 약 3 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '잠자는 시간은 보통 8 □입니다.',
      options: ['초', '분', '시간'],
      answer: '시간',
    },
    {
      badge: '시간 단위 선택',
      prompt: '100m를 달리는 데 걸리는 시간은 약 20 □입니다.',
      options: ['초', '분', '시간'],
      answer: '초',
    },
    {
      badge: '시간 단위 선택',
      prompt: '점심을 먹는 데 걸리는 시간은 약 30 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '하루 동안 학교에 머무는 시간은 약 6 □입니다.',
      options: ['초', '분', '시간'],
      answer: '시간',
    },
    {
      badge: '시간 단위 선택',
      prompt: '눈을 한 번 깜빡이는 데 걸리는 시간은 약 1 □입니다.',
      options: ['초', '분', '시간'],
      answer: '초',
    },
  ],
  10: [
    {
      badge: '시간 판단하기',
      prompt: '단위를 잘못 사용한 문장은 어느 것일까요?',
      options: [
        '손을 한 번 드는 데 1초쯤 걸립니다.',
        '수업 한 시간은 약 40분입니다.',
        '박수 한 번 치는 데 1분이 걸렸습니다.',
      ],
      answer: '박수 한 번 치는 데 1분이 걸렸습니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '눈을 한 번 깜빡이는 데 걸리는 시간은 약 1초입니다.',
        '영화 한 편을 보는 데 걸리는 시간은 약 2시간입니다.',
        '줄넘기 50개를 하는 데 2시간이 걸립니다.',
      ],
      answer: '줄넘기 50개를 하는 데 2시간이 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞은 문장을 골라 보세요.',
      options: [
        '낮잠을 1초 잤습니다.',
        '동화책 한 쪽을 읽는 데 30초쯤 걸립니다.',
        '급식 먹는 데 20시간이 걸립니다.',
      ],
      answer: '동화책 한 쪽을 읽는 데 30초쯤 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '엘리베이터 문이 닫히는 데 10시간이 걸립니다.',
        '교실을 청소하는 데 15분쯤 걸립니다.',
        '지우개를 한 번 집는 데 3분이 걸립니다.',
      ],
      answer: '교실을 청소하는 데 15분쯤 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '손뼉을 세 번 치는 데 5초쯤 걸립니다.',
        '운동장을 한 바퀴 걷는 데 10분쯤 걸립니다.',
        '하품 한 번 하는 데 1시간이 걸립니다.',
      ],
      answer: '하품 한 번 하는 데 1시간이 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞은 문장을 골라 보세요.',
      options: [
        '샤워를 하는 데 15초쯤 걸립니다.',
        '학급 회의를 하는 데 20분쯤 걸립니다.',
        '버스를 기다리는 데 3시간쯤 걸립니다.',
      ],
      answer: '학급 회의를 하는 데 20분쯤 걸립니다.',
    },
  ],
  11: [
    {
      badge: '시간 단위 선택',
      prompt: '멀리 있는 놀이공원까지 차를 타고 가는 시간은 약 1 □ 30 □입니다.',
      options: ['시간, 분', '분, 초', '초, 시간'],
      answer: '시간, 분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '어제 본 만화영화는 90 □ 동안 했어요.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '점심시간은 보통 50 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '줄넘기 100개를 하는 데 걸리는 시간은 약 1 □ 20 □입니다.',
      options: ['시간, 분', '분, 초', '초, 시간'],
      answer: '분, 초',
    },
    {
      badge: '시간 단위 선택',
      prompt: '친척 집까지 버스를 타고 가는 시간은 약 2 □ 10 □입니다.',
      options: ['시간, 분', '분, 초', '초, 시간'],
      answer: '시간, 분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '학교 조회 시간은 보통 15 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '애니메이션 한 편은 보통 30 □ 동안 합니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
  ],
};

// Use more concrete everyday objects here so the picture supports real-world length sense.
const SMALL_MEASUREMENT_FACTORY_CONFIGS: MeasurementFactoryConfig[] = [
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '사과씨의 길이는 몇 mm인가요?',
    objectKind: 'seed',
    objectLabel: '사과씨',
    minLengthMm: 5,
    maxLengthMm: 7,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '쌀알의 길이는 몇 mm인가요?',
    objectKind: 'rice',
    objectLabel: '쌀알',
    minLengthMm: 5,
    maxLengthMm: 8,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '짧게 자른 종이띠의 길이는 몇 mm인가요?',
    objectKind: 'paperStrip',
    objectLabel: '짧은 종이띠',
    minLengthMm: 6,
    maxLengthMm: 9,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 3,
  },
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '작은 초콜릿 조각의 길이는 몇 mm인가요?',
    objectKind: 'chocolate',
    objectLabel: '작은 초콜릿 조각',
    minLengthMm: 7,
    maxLengthMm: 10,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 3,
  },
];

const LARGE_MEASUREMENT_FACTORY_CONFIGS: MeasurementFactoryConfig[] = [
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '지우개의 길이는 몇 mm인가요?',
    objectKind: 'eraser',
    objectLabel: '지우개',
    minLengthMm: 35,
    maxLengthMm: 48,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '클립의 길이는 몇 mm인가요?',
    objectKind: 'paperClip',
    objectLabel: '클립',
    minLengthMm: 28,
    maxLengthMm: 33,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '초콜릿 조각의 길이는 몇 mm인가요?',
    objectKind: 'chocolate',
    objectLabel: '초콜릿 조각',
    minLengthMm: 30,
    maxLengthMm: 38,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '이쑤시개의 길이는 몇 mm인가요?',
    objectKind: 'toothpick',
    objectLabel: '이쑤시개',
    minLengthMm: 62,
    maxLengthMm: 65,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '연필의 길이는 몇 mm인가요?',
    objectKind: 'pencil',
    objectLabel: '연필',
    minLengthMm: 82,
    maxLengthMm: 96,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '색연필의 길이는 몇 mm인가요?',
    objectKind: 'crayon',
    objectLabel: '색연필',
    minLengthMm: 84,
    maxLengthMm: 90,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '분필의 길이는 몇 mm인가요?',
    objectKind: 'chalk',
    objectLabel: '분필',
    minLengthMm: 82,
    maxLengthMm: 85,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
];

const DISTANCE_MAP_REFERENCE_METERS = 500;
const DISTANCE_MAP_HOME_POINT: DistanceMapPoint = { x: 296, y: 84 };
const DISTANCE_MAP_BUS_STOP_POINT: DistanceMapPoint = { x: 430, y: 126 };
const DISTANCE_MAP_LIBRARY_POINT: DistanceMapPoint = { x: 176, y: 154 };
const DISTANCE_MAP_POLICE_POINT: DistanceMapPoint = { x: 150, y: 320 };
const DISTANCE_MAP_STADIUM_POINT: DistanceMapPoint = { x: 360, y: 340 };
const DISTANCE_MAP_SCIENCE_POINT: DistanceMapPoint = { x: 530, y: 268 };
const DISTANCE_MAP_PARK_POINT: DistanceMapPoint = { x: 532, y: 112 };

const DISTANCE_MAP_LANDMARKS: DistanceMapLandmarkData[] = [
  { id: 'home', label: '집', x: DISTANCE_MAP_HOME_POINT.x, y: DISTANCE_MAP_HOME_POINT.y, accent: '#f59e0b', kind: 'home' },
  { id: 'bus-stop', label: '버스정류장', x: DISTANCE_MAP_BUS_STOP_POINT.x, y: DISTANCE_MAP_BUS_STOP_POINT.y, accent: '#38bdf8', kind: 'reference' },
  { id: 'library', label: '도서관', x: DISTANCE_MAP_LIBRARY_POINT.x, y: DISTANCE_MAP_LIBRARY_POINT.y, accent: '#34d399', kind: 'place' },
  { id: 'police', label: '경찰서', x: DISTANCE_MAP_POLICE_POINT.x, y: DISTANCE_MAP_POLICE_POINT.y, accent: '#fb923c', kind: 'place' },
  { id: 'stadium', label: '축구장', x: DISTANCE_MAP_STADIUM_POINT.x, y: DISTANCE_MAP_STADIUM_POINT.y, accent: '#8b5cf6', kind: 'place' },
  { id: 'science', label: '과학관', x: DISTANCE_MAP_SCIENCE_POINT.x, y: DISTANCE_MAP_SCIENCE_POINT.y, accent: '#ec4899', kind: 'place' },
  { id: 'park', label: '공원', x: DISTANCE_MAP_PARK_POINT.x, y: DISTANCE_MAP_PARK_POINT.y, accent: '#22c55e', kind: 'place' },
];

const DISTANCE_MAP_REFERENCE_ROUTE: DistanceMapPoint[] = [
  DISTANCE_MAP_HOME_POINT,
  { x: 356, y: 104 },
  DISTANCE_MAP_BUS_STOP_POINT,
];

interface DistanceCompareScenarioConfig {
  strategy: 'compare';
  targetLabel: string;
  targetMeters: number;
  targetRoute: DistanceMapPoint[];
}

interface DistanceChunkScenarioConfig {
  strategy: 'chunk';
  targetLabel: string;
  targetMeters: number;
  segments: DistanceChunkSegmentData[];
}

interface DistanceUnitizeScenarioConfig {
  strategy: 'unitize';
  targetLabel: string;
  targetMeters: number;
  targetRoute: DistanceMapPoint[];
}

type DistanceScenarioConfig =
  | DistanceCompareScenarioConfig
  | DistanceChunkScenarioConfig
  | DistanceUnitizeScenarioConfig;

function joinDistanceSegments(segments: DistanceChunkSegmentData[]) {
  return segments.reduce<DistanceMapPoint[]>((acc, segment, index) => {
    if (index === 0) {
      return [...segment.points];
    }

    return [...acc, ...segment.points.slice(1)];
  }, []);
}

function createDistanceMapScenario(config: DistanceScenarioConfig): Problem {
  const estimatedKilometers = Math.round(config.targetMeters / 1000);
  const base = {
    title: '거리 어림',
    question: '그림을 보고 거리를 어림해 보세요.',
    sentence: `집에서 ${config.targetLabel}까지의 거리는 약 □ km입니다.`,
    referenceMeters: DISTANCE_MAP_REFERENCE_METERS,
    targetLabel: config.targetLabel,
    targetMeters: config.targetMeters,
    estimatedKilometers,
    strategy: config.strategy,
    landmarks: DISTANCE_MAP_LANDMARKS,
  } as const;

  if (config.strategy === 'compare') {
    return createDistanceMapProblem({
      ...base,
      strategy: 'compare',
      referenceRoute: DISTANCE_MAP_REFERENCE_ROUTE,
      targetRoute: config.targetRoute,
      compareSlotCount: Math.min(5, Math.max(3, Math.round(config.targetMeters / DISTANCE_MAP_REFERENCE_METERS) + 1)),
    });
  }

  if (config.strategy === 'chunk') {
    return createDistanceMapProblem({
      ...base,
      strategy: 'chunk',
      targetRoute: joinDistanceSegments(config.segments),
      segments: config.segments,
    });
  }

  return createDistanceMapProblem({
    ...base,
    strategy: 'unitize',
    referenceRoute: DISTANCE_MAP_REFERENCE_ROUTE,
    targetRoute: config.targetRoute,
  });
}

const DISTANCE_COMPARE_SCENARIOS: DistanceCompareScenarioConfig[] = [
  {
    strategy: 'compare',
    targetLabel: '도서관',
    targetMeters: 1000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 240, y: 116 },
      DISTANCE_MAP_LIBRARY_POINT,
    ],
  },
  {
    strategy: 'compare',
    targetLabel: '공원',
    targetMeters: 2000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 362, y: 96 },
      { x: 446, y: 102 },
      DISTANCE_MAP_PARK_POINT,
    ],
  },
  {
    strategy: 'compare',
    targetLabel: '경찰서',
    targetMeters: 1500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 238, y: 124 },
      { x: 194, y: 208 },
      DISTANCE_MAP_POLICE_POINT,
    ],
  },
  {
    strategy: 'compare',
    targetLabel: '축구장',
    targetMeters: 2500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 352, y: 118 },
      { x: 388, y: 196 },
      { x: 382, y: 276 },
      DISTANCE_MAP_STADIUM_POINT,
    ],
  },
];

const DISTANCE_CHUNK_SCENARIOS: DistanceChunkScenarioConfig[] = [
  {
    strategy: 'chunk',
    targetLabel: '경찰서',
    targetMeters: 2000,
    segments: [
      { id: 'police-1', color: '#fb923c', points: [DISTANCE_MAP_HOME_POINT, { x: 276, y: 150 }], units: 2 },
      { id: 'police-2', color: '#f59e0b', points: [{ x: 276, y: 150 }, { x: 218, y: 242 }], units: 1 },
      { id: 'police-3', color: '#facc15', points: [{ x: 218, y: 242 }, DISTANCE_MAP_POLICE_POINT], units: 1 },
    ],
  },
  {
    strategy: 'chunk',
    targetLabel: '과학관',
    targetMeters: 2000,
    segments: [
      { id: 'science-1', color: '#38bdf8', points: [DISTANCE_MAP_HOME_POINT, { x: 360, y: 110 }, { x: 442, y: 152 }], units: 2 },
      { id: 'science-2', color: '#818cf8', points: [{ x: 442, y: 152 }, { x: 500, y: 208 }], units: 1 },
      { id: 'science-3', color: '#f472b6', points: [{ x: 500, y: 208 }, { x: 528, y: 238 }, DISTANCE_MAP_SCIENCE_POINT], units: 1 },
    ],
  },
  {
    strategy: 'chunk',
    targetLabel: '공원',
    targetMeters: 2500,
    segments: [
      { id: 'park-1', color: '#38bdf8', points: [DISTANCE_MAP_HOME_POINT, { x: 344, y: 102 }, { x: 414, y: 104 }], units: 2 },
      { id: 'park-2', color: '#60a5fa', points: [{ x: 414, y: 104 }, { x: 476, y: 108 }], units: 1 },
      { id: 'park-3', color: '#22c55e', points: [{ x: 476, y: 108 }, DISTANCE_MAP_PARK_POINT], units: 2 },
    ],
  },
  {
    strategy: 'chunk',
    targetLabel: '도서관',
    targetMeters: 1500,
    segments: [
      { id: 'library-1', color: '#f59e0b', points: [DISTANCE_MAP_HOME_POINT, { x: 252, y: 110 }], units: 1 },
      { id: 'library-2', color: '#fbbf24', points: [{ x: 252, y: 110 }, { x: 208, y: 128 }], units: 1 },
      { id: 'library-3', color: '#34d399', points: [{ x: 208, y: 128 }, DISTANCE_MAP_LIBRARY_POINT], units: 1 },
    ],
  },
];

const DISTANCE_UNITIZE_SCENARIOS: DistanceUnitizeScenarioConfig[] = [
  {
    strategy: 'unitize',
    targetLabel: '축구장',
    targetMeters: 2000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 346, y: 140 },
      { x: 392, y: 222 },
      { x: 366, y: 292 },
      DISTANCE_MAP_STADIUM_POINT,
    ],
  },
  {
    strategy: 'unitize',
    targetLabel: '과학관',
    targetMeters: 2000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 360, y: 110 },
      { x: 442, y: 152 },
      { x: 500, y: 208 },
      DISTANCE_MAP_SCIENCE_POINT,
    ],
  },
  {
    strategy: 'unitize',
    targetLabel: '경찰서',
    targetMeters: 1500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 256, y: 122 },
      { x: 214, y: 214 },
      DISTANCE_MAP_POLICE_POINT,
    ],
  },
  {
    strategy: 'unitize',
    targetLabel: '공원',
    targetMeters: 2500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 340, y: 102 },
      { x: 410, y: 102 },
      { x: 470, y: 106 },
      { x: 508, y: 110 },
      DISTANCE_MAP_PARK_POINT,
    ],
  },
];

const DISTANCE_STAGE7_SCENARIOS: DistanceScenarioConfig[] = [
  ...DISTANCE_COMPARE_SCENARIOS,
  ...DISTANCE_CHUNK_SCENARIOS,
  ...DISTANCE_UNITIZE_SCENARIOS,
];

const DISTANCE_WORKSHEET_TITLE = '거리 어림';
const DISTANCE_WORKSHEET_INSTRUCTION = '그림을 보고 두 장소 사이의 거리를 어림하여 문장을 완성해 보세요.';

const DISTANCE_WORKSHEET_PROBLEM_SETS: DistanceWorksheetProblemSetData[] = [
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'meadow',
    dotCount: 7,
    reference: { fromDotIndex: 2, toDotIndex: 3, label: '약 1 km' },
    landmarks: [
      { id: 'bookstore-a', label: '서점', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'bookstore' },
      { id: 'station-a', label: '기차역', dotIndex: 1, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'market-a', label: '시장', dotIndex: 2, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'fountain-a', label: '분수대', dotIndex: 3, row: 'top', accent: '#60a5fa', icon: 'fountain' },
      { id: 'park-a', label: '공원', dotIndex: 4, row: 'top', accent: '#86efac', icon: 'park' },
      { id: 'bank-a', label: '은행', dotIndex: 5, row: 'top', accent: '#93c5fd', icon: 'bank' },
      { id: 'school-a', label: '학교', dotIndex: 6, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'a-distance-1', prefix: '분수대에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-2', prefix: '서점에서 공원까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-3', prefix: '기차역에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '5', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-4', prefix: '시장에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-5', prefix: '서점에서 시장까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'town',
    dotCount: 7,
    reference: { fromDotIndex: 1, toDotIndex: 2, label: '약 1 km' },
    landmarks: [
      { id: 'library-b', label: '도서관', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'station-b', label: '버스터미널', dotIndex: 1, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'hospital-b', label: '병원', dotIndex: 2, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'park-b', label: '공원', dotIndex: 3, row: 'top', accent: '#86efac', icon: 'park' },
      { id: 'market-b', label: '마트', dotIndex: 4, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'bank-b', label: '은행', dotIndex: 5, row: 'top', accent: '#93c5fd', icon: 'bank' },
      { id: 'school-b', label: '학교', dotIndex: 6, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'b-distance-1', prefix: '병원에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-2', prefix: '도서관에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-3', prefix: '버스터미널에서 마트까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-4', prefix: '공원에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-5', prefix: '마트에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'river',
    dotCount: 8,
    reference: { fromDotIndex: 4, toDotIndex: 5, label: '약 1 km' },
    landmarks: [
      { id: 'park-c', label: '공원', dotIndex: 0, row: 'top', accent: '#86efac', icon: 'park' },
      { id: 'market-c', label: '시장', dotIndex: 1, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'station-c', label: '버스터미널', dotIndex: 2, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'library-c', label: '도서관', dotIndex: 3, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'fountain-c', label: '분수대', dotIndex: 4, row: 'top', accent: '#93c5fd', icon: 'fountain' },
      { id: 'hospital-c', label: '병원', dotIndex: 5, row: 'bottom', accent: '#fda4af', icon: 'hospital' },
      { id: 'bank-c', label: '은행', dotIndex: 6, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'school-c', label: '학교', dotIndex: 7, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'c-distance-1', prefix: '도서관에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-2', prefix: '공원에서 도서관까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-3', prefix: '시장에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-4', prefix: '버스터미널에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '5', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-5', prefix: '분수대에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'campus',
    dotCount: 6,
    reference: { fromDotIndex: 0, toDotIndex: 1, label: '약 1 km' },
    landmarks: [
      { id: 'bookstore-d', label: '서점', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'bookstore' },
      { id: 'park-d', label: '공원', dotIndex: 1, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'bank-d', label: '은행', dotIndex: 2, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'hospital-d', label: '병원', dotIndex: 3, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'fountain-d', label: '분수대', dotIndex: 4, row: 'bottom', accent: '#93c5fd', icon: 'fountain' },
      { id: 'school-d', label: '학교', dotIndex: 5, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'd-distance-1', prefix: '은행에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-2', prefix: '서점에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-3', prefix: '공원에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-4', prefix: '병원에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-5', prefix: '서점에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '5', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'orchard',
    dotCount: 8,
    reference: { fromDotIndex: 2, toDotIndex: 3, label: '약 1 km' },
    landmarks: [
      { id: 'library-e', label: '도서관', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'market-e', label: '마트', dotIndex: 1, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'park-e', label: '공원', dotIndex: 2, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'station-e', label: '버스터미널', dotIndex: 3, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'hospital-e', label: '병원', dotIndex: 4, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'market-outer-e', label: '시장', dotIndex: 5, row: 'top', accent: '#fcd34d', icon: 'market' },
      { id: 'bank-e', label: '은행', dotIndex: 6, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'school-e', label: '학교', dotIndex: 7, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'e-distance-1', prefix: '버스터미널에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-2', prefix: '도서관에서 공원까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-3', prefix: '마트에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-4', prefix: '공원에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-5', prefix: '시장에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'harbor',
    dotCount: 7,
    reference: { fromDotIndex: 3, toDotIndex: 4, label: '약 1 km' },
    landmarks: [
      { id: 'library-f', label: '도서관', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'park-f', label: '공원', dotIndex: 1, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'station-f', label: '버스터미널', dotIndex: 2, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'market-f', label: '시장', dotIndex: 3, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'hospital-f', label: '병원', dotIndex: 4, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'bank-f', label: '은행', dotIndex: 5, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'school-f', label: '학교', dotIndex: 6, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'f-distance-1', prefix: '버스터미널에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-2', prefix: '도서관에서 시장까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-3', prefix: '공원에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-4', prefix: '버스터미널에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-5', prefix: '병원에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'village',
    dotCount: 8,
    reference: { fromDotIndex: 1, toDotIndex: 2, label: '약 1 km' },
    landmarks: [
      { id: 'bookstore-g', label: '서점', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'bookstore' },
      { id: 'fountain-g', label: '분수대', dotIndex: 1, row: 'top', accent: '#93c5fd', icon: 'fountain' },
      { id: 'school-g', label: '학교', dotIndex: 2, row: 'top', accent: '#bfdbfe', icon: 'school' },
      { id: 'park-g', label: '공원', dotIndex: 3, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'hospital-g', label: '병원', dotIndex: 4, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'bank-g', label: '은행', dotIndex: 5, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'market-g', label: '마트', dotIndex: 6, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'station-g', label: '버스터미널', dotIndex: 7, row: 'bottom', accent: '#38bdf8', icon: 'station' },
    ],
    prompts: [
      { id: 'g-distance-1', prefix: '공원에서 버스터미널까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-2', prefix: '서점에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-3', prefix: '분수대에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-4', prefix: '학교에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-5', prefix: '병원에서 버스터미널까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
    ],
  },
];

const UNIT3_PROBLEM_FACTORIES: Record<number, Array<() => Problem>> = {
  1: SMALL_MEASUREMENT_FACTORY_CONFIGS.flatMap((config) => createMeasurementFactoryPair(config)),
  2: [
    () => createPromptProblem('1cm는 몇 mm인가요?', 10, 'mm'),
    () => {
      const centimeters = randomInt(2, 9);
      return createPromptProblem(`${centimeters}cm는 몇 mm인가요?`, toMillimeters(centimeters), 'mm');
    },
    () => {
      const centimeters = randomInt(2, 7);
      const millimeters = randomInt(1, 9);
      return createPromptProblem(`${centimeters}cm ${millimeters}mm는 몇 mm인가요?`, toMillimeters(centimeters, millimeters), 'mm');
    },
    () => {
      let totalMillimeters = randomInt(12, 89);
      while (totalMillimeters % 10 === 0) {
        totalMillimeters = randomInt(12, 89);
      }
      return createPromptProblem(
        `${totalMillimeters}mm는 ${Math.floor(totalMillimeters / 10)}cm □mm입니다.\n□에 들어갈 수는?`,
        totalMillimeters % 10,
      );
    },
    () => {
      const centimeters = randomInt(2, 8);
      return createPromptProblem(`${toMillimeters(centimeters)}mm는 □cm입니다.\n□에 들어갈 수는?`, centimeters);
    },
    () => {
      let totalMillimeters = randomInt(21, 87);
      while (totalMillimeters % 10 === 0) {
        totalMillimeters = randomInt(21, 87);
      }
      const centimeters = Math.floor(totalMillimeters / 10);
      const millimeters = totalMillimeters % 10;
      return createPromptProblem(`${totalMillimeters}mm는 □cm ${millimeters}mm입니다.\n□에 들어갈 수는?`, centimeters);
    },
    () => {
      const centimeters = randomInt(2, 8);
      const isCorrect = Math.random() < 0.5;
      const shownMillimeters = isCorrect ? toMillimeters(centimeters) : toMillimeters(centimeters) + sample([1, 2, 3, 4]);
      return createPromptProblem(
        `${centimeters}cm는 ${shownMillimeters}mm와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const centimeters = randomInt(2, 7);
      const millimeters = randomInt(1, 9);
      return createPromptProblem(
        `□cm ${millimeters}mm는 ${toMillimeters(centimeters, millimeters)}mm입니다.\n□에 들어갈 수는?`,
        centimeters,
      );
    },
    () => {
      const totalMillimeters = randomInt(24, 88);
      const correctText = formatLengthAsMixedUnits(totalMillimeters);
      const wrongValues = new Set<number>();
      while (wrongValues.size < 2) {
        const candidate = totalMillimeters + sample([-4, -3, -2, 2, 3, 4]);
        if (candidate > 10 && candidate !== totalMillimeters) {
          wrongValues.add(candidate);
        }
      }
      return createShuffledOptionsProblem(
        `${totalMillimeters}mm와 같은 것을 고르면 몇 번일까요?`,
        [correctText, ...[...wrongValues].map((value) => formatLengthAsMixedUnits(value))],
        correctText,
      );
    },
    () => {
      const shorter = randomInt(2, 6);
      const longer = shorter + randomInt(1, 3);
      const extraMillimeters = randomInt(1, 9);
      return createPromptProblem(
        `${shorter}cm와 ${longer}cm ${extraMillimeters}mm 중 더 긴 것은 몇 mm인가요?`,
        toMillimeters(longer, extraMillimeters),
        'mm',
      );
    },
    () => {
      const centimeters = randomInt(2, 7);
      const millimeters = randomInt(1, 9);
      const totalMillimeters = toMillimeters(centimeters, millimeters);
      const isCorrect = Math.random() < 0.5;
      const shownMillimeters = isCorrect ? totalMillimeters : totalMillimeters + sample([-3, -2, -1, 1, 2, 3]);
      return createPromptProblem(
        `${centimeters}cm ${millimeters}mm는 ${shownMillimeters}mm와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
  ],
  3: LARGE_MEASUREMENT_FACTORY_CONFIGS.flatMap((config) => createMeasurementFactoryPair(config)),
  4: [
    () => {
      const [a, b, c] = getDistinctRandomNumbers(3, 118, 149);
      return createPromptProblem(
        `연필은 ${formatLengthValue(a)}, 가위는 ${formatLengthValue(b)}, 사인펜은 ${formatLengthValue(c)}입니다.\n가장 긴 것의 길이는 몇 mm인가요?`,
        Math.max(a, b, c),
        'mm',
      );
    },
    () => {
      const [a, b, c] = getDistinctRandomNumbers(3, 36, 98);
      return createPromptProblem(
        `지우개는 ${formatLengthValue(a)}, 리본은 ${formatLengthValue(b)}, 색연필은 ${formatLengthValue(c)}입니다.\n가장 짧은 것의 길이는 몇 mm인가요?`,
        Math.min(a, b, c),
        'mm',
      );
    },
    () => {
      const shorter = randomInt(45, 88);
      const longer = randomInt(shorter + 5, shorter + 32);
      const options = shuffleValues([
        `막대 ${formatLengthValue(longer)}`,
        `지우개 ${formatLengthValue(shorter)}`,
      ]);
      return createPromptProblem(
        buildNumberedOptionsPrompt('더 긴 것을 고르면 몇 번일까요?', options),
        options.findIndex((option) => option.startsWith('막대')) + 1,
      );
    },
    () => {
      const totalMillimeters = randomInt(48, 156);
      const isCorrect = Math.random() < 0.5;
      const shownMillimeters = isCorrect ? totalMillimeters : totalMillimeters + sample([-3, -2, -1, 1, 2, 3]);
      return createPromptProblem(
        `${formatLengthAsMixedUnits(totalMillimeters)}는 ${shownMillimeters}mm와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const lengths = getDistinctRandomNumbers(3, 55, 142);
      const options = [
        `색연필 ${formatLengthValue(lengths[0])}`,
        `가위 ${formatLengthValue(lengths[1])}`,
        `자 ${formatLengthValue(lengths[2])}`,
      ];
      return createPromptProblem(
        buildNumberedOptionsPrompt('가장 긴 것을 고르면 몇 번일까요?', options),
        lengths.indexOf(Math.max(...lengths)) + 1,
      );
    },
  ],
  5: [
    () => createPromptProblem('1km는 몇 m인가요?', 1000, 'm'),
    () => createPromptProblem('1000m는 몇 km인가요?', 1, 'km'),
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`학교에서 공원까지 ${kilometers}km입니다.\n모두 몇 m인가요?`, kilometers * 1000, 'm');
    },
    () => {
      const kilometers = randomInt(2, 8);
      return createPromptProblem(`${toMeters(kilometers)}m는 몇 km인가요?`, kilometers, 'km');
    },
    () => {
      const kilometers = randomInt(2, 8);
      const isCorrect = Math.random() < 0.5;
      const shownMeters = isCorrect ? toMeters(kilometers) : toMeters(kilometers) + sample([100, 200, 300, 400]);
      return createPromptProblem(
        `${kilometers}km는 ${shownMeters}m와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`${kilometers * 1000}m는 □km입니다.\n□에 들어갈 수는?`, kilometers);
    },
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`□km는 ${kilometers * 1000}m입니다.\n□에 들어갈 수는?`, kilometers);
    },
    () => {
      const kilometers = randomInt(2, 8);
      const correctText = `${kilometers * 1000}m`;
      return createShuffledOptionsProblem(
        `${kilometers}km와 같은 것을 고르면 몇 번일까요?`,
        [correctText, `${kilometers * 100}m`, `${kilometers}m`],
        correctText,
      );
    },
    () => {
      const shorter = randomInt(2, 5);
      const longer = shorter + randomInt(1, 3);
      return createPromptProblem(`${shorter}km와 ${longer}km 중 더 먼 거리는 몇 m인가요?`, longer * 1000, 'm');
    },
    () => {
      const kilometers = randomInt(2, 8);
      const isCorrect = Math.random() < 0.5;
      const shownKilometers = isCorrect ? kilometers : kilometers + sample([-1, 1]);
      return createPromptProblem(
        `${kilometers * 1000}m는 ${shownKilometers}km입니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
  ],
  6: [
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`${kilometers}km는 몇 m인가요?`, kilometers * 1000, 'm');
    },
    () => {
      const kilometers = randomInt(1, 8);
      const meters = randomInt(20, 980);
      return createPromptProblem(`${kilometers}km ${meters}m는 몇 m인가요?`, kilometers * 1000 + meters, 'm');
    },
    () => {
      const kilometers = randomInt(2, 8);
      const meters = randomInt(10, 980);
      return createPromptProblem(`${kilometers * 1000 + meters}m는 ${kilometers}km □m입니다.\n□에 들어갈 수는?`, meters);
    },
    () => {
      const first = toMeters(randomInt(1, 3), randomInt(120, 880));
      const second = toMeters(randomInt(1, 3), randomInt(120, 880));
      if (first === second) {
        return createPromptProblem(
          `등산로는 ${formatDistanceValue(first)}, 산책로는 ${formatDistanceValue(second + 100)}입니다.\n더 긴 거리는 몇 m인가요?`,
          second + 100,
          'm',
        );
      }

      return createPromptProblem(
        `등산로는 ${formatDistanceValue(first)}, 산책로는 ${formatDistanceValue(second)}입니다.\n더 긴 거리는 몇 m인가요?`,
        Math.max(first, second),
        'm',
      );
    },
    () => {
      const totalMeters = toMeters(randomInt(2, 6), randomInt(50, 980));
      const isCorrect = Math.random() < 0.5;
      const shownMeters = isCorrect ? totalMeters : totalMeters + sample([-200, -100, 100, 200]);
      return createPromptProblem(
        `${formatDistanceAsMixedUnits(totalMeters)}는 ${shownMeters}m와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
  ],
  7: [
    ...DISTANCE_WORKSHEET_PROBLEM_SETS.flatMap(({ prompts, ...worksheetBase }) => (
      prompts
        .filter((prompt) => prompt.kind === 'number')
        .map((prompt) => () => createDistanceWorksheetProblem({ ...worksheetBase, prompt }))
    )),
  ],
  8: [
    () => createPromptProblem('1분은 몇 초인가요?', 60, '초'),
    () => createPromptProblem('85초는 1분 □초입니다.\n□에 들어갈 수는?', 25),
    () => createPromptProblem('2분 35초는 몇 초인가요?', 155, '초'),
    () => createPromptProblem('180초는 몇 분인가요?', 3, '분'),
    () => {
      const minutes = randomInt(2, 5);
      return createPromptProblem(`${minutes}분은 몇 초인가요?`, minutes * 60, '초');
    },
    () => {
      const minutes = randomInt(2, 4);
      const seconds = randomInt(5, 55);
      return createPromptProblem(`${minutes}분 ${seconds}초는 몇 초인가요?`, minutes * 60 + seconds, '초');
    },
    () => {
      const minutes = randomInt(2, 5);
      const seconds = randomInt(10, 55);
      return createPromptProblem(`${minutes * 60 + seconds}초는 ${minutes}분 □초입니다.\n□에 들어갈 수는?`, seconds);
    },
    () => {
      const minutes = randomInt(3, 6);
      return createPromptProblem(`${minutes * 60}초는 몇 분인가요?`, minutes, '분');
    },
    () => {
      const minutes = randomInt(2, 6);
      return createPromptProblem(`${minutes * 60}초는 □분입니다.\n□에 들어갈 수는?`, minutes);
    },
    () => {
      const minutes = randomInt(2, 5);
      const seconds = randomInt(5, 55);
      const totalSeconds = minutes * 60 + seconds;
      const correctText = formatDuration(0, minutes, seconds);
      const wrongValues = new Set<number>();
      while (wrongValues.size < 2) {
        const candidate = totalSeconds + sample([-15, -10, -5, 5, 10, 15]);
        if (candidate > 60 && candidate !== totalSeconds) {
          wrongValues.add(candidate);
        }
      }
      return createShuffledOptionsProblem(
        `${totalSeconds}초와 같은 것을 고르면 몇 번일까요?`,
        [correctText, ...[...wrongValues].map((value) => {
          const converted = splitClockSeconds(value);
          return formatDuration(0, converted.minutes, converted.seconds);
        })],
        correctText,
      );
    },
    () => {
      const minutes = randomInt(2, 5);
      const isCorrect = Math.random() < 0.5;
      const shownSeconds = isCorrect ? minutes * 60 : minutes * 60 + sample([-20, -10, 10, 20]);
      return createPromptProblem(
        `${minutes}분은 ${shownSeconds}초입니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const minutes = randomInt(2, 5);
      const seconds = randomInt(10, 50);
      return createPromptProblem(
        `${minutes}분 ${seconds}초는 ${minutes}분보다 □초 더 깁니다.\n□에 들어갈 수는?`,
        seconds,
      );
    },
  ],
  9: [createClockReadingVisualProblem],
  10: [
    () => createClockTimeAdditionProblem(1),
    () => createBarModelTimeAdditionProblem(1),
    () => createVerticalTimeAdditionProblem(1),
  ],
  11: [
    () => {
      const secondMinutes = randomInt(2, 4);
      const secondSeconds = randomInt(15, 45);
      const firstMinutes = randomInt(secondMinutes + 2, secondMinutes + 5);
      const firstSeconds = randomInt(10, 55);
      const difference = firstMinutes * 60 + firstSeconds - (secondMinutes * 60 + secondSeconds);
      return createPromptProblem(
        `${firstMinutes}분 ${firstSeconds}초 - ${secondMinutes}분 ${secondSeconds}초 = ${Math.floor(difference / 60)}분 □초입니다.\n□에 들어갈 수는?`,
        difference % 60,
      );
    },
    () => {
      while (true) {
        const endHour = randomInt(2, 12);
        const endMinute = randomInt(8, 58);
        const endSecond = randomInt(10, 55);
        const subtractMinutes = randomInt(1, 18);
        const subtractSeconds = randomInt(10, 45);
        const result = splitClockSeconds(endHour * 3600 + endMinute * 60 + endSecond - (subtractMinutes * 60 + subtractSeconds));

        if (result.hours >= 1) {
          return createPromptProblem(
            `${formatClockTime(endHour, endMinute, endSecond)}에서 ${formatDuration(0, subtractMinutes, subtractSeconds)} 전은 ${result.hours}시 ${result.minutes}분 □초입니다.\n□에 들어갈 수는?`,
            result.seconds,
          );
        }
      }
    },
    () => {
      while (true) {
        const startHour = randomInt(1, 10);
        const startMinute = randomInt(5, 45);
        const startSecond = randomInt(10, 50);
        const durationHours = randomInt(0, 1);
        const durationMinutes = randomInt(20, 48);
        const durationSeconds = randomInt(10, 45);
        const arrival = splitClockSeconds(
          startHour * 3600 + startMinute * 60 + startSecond + durationHours * 3600 + durationMinutes * 60 + durationSeconds,
        );

        if (arrival.hours <= 12) {
          return createPromptProblem(
            `${formatDuration(durationHours, durationMinutes, durationSeconds)} 동안 산책하고 ${formatClockTime(arrival.hours, arrival.minutes, arrival.seconds)}에 집에 도착했습니다.\n산책을 시작한 시각은 ${startHour}시 □분 ${startSecond}초입니다.\n□에 들어갈 수는?`,
            startMinute,
          );
        }
      }
    },
    () => {
      while (true) {
        const hour = randomInt(2, 11);
        const minute = randomInt(10, 55);
        const second = randomInt(10, 55);
        const subtractMinutes = randomInt(1, 15);
        const subtractSeconds = randomInt(5, 40);
        const result = splitClockSeconds(hour * 3600 + minute * 60 + second - (subtractMinutes * 60 + subtractSeconds));

        if (result.hours >= 1) {
          const isCorrect = Math.random() < 0.5;
          const wrongSeconds = result.seconds >= 57 ? result.seconds - 2 : result.seconds + 2;
          return createPromptProblem(
            `${formatClockTime(hour, minute, second)}에서 ${subtractMinutes}분 ${subtractSeconds}초를 빼면 ${result.hours}시 ${result.minutes}분 ${isCorrect ? result.seconds : wrongSeconds}초입니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
            isCorrect ? 1 : 2,
          );
        }
      }
    },
  ],
};

function createUnitSelectionChallenge(level: number): UnitSelectionChallenge {
  const pool = UNIT_SELECTION_CHALLENGE_POOLS[level] ?? UNIT_SELECTION_CHALLENGE_POOLS[11] ?? [];
  return sample(pool);
}

function generateUnit3Problem(level: number, opponentHP: number, problemSequence?: number): Problem {
  if (level === 1) {
    if (problemSequence === 1 || (problemSequence === undefined && opponentHP === 100)) {
      return createMillimeterNeedIntroProblem();
    }

    if (problemSequence === 2) {
      return createMillimeterNeedChoiceProblem();
    }
  }

  if (level === 5) {
    if (problemSequence === 1 || (problemSequence === undefined && opponentHP === 100)) {
      return createKilometerNeedIntroProblem();
    }

    if (problemSequence === 2) {
      return createKilometerNeedChoiceProblem();
    }
  }

  if (level === 8) {
    if (problemSequence === 1 || (problemSequence === undefined && opponentHP === 100)) {
      return createSecondNeedIntroProblem();
    }

    if (problemSequence === 2) {
      return createSecondNeedChoiceProblem();
    }
  }

  if (level === 9) {
    return createClockReadingVisualProblem(getClockReadingDifficulty(problemSequence, opponentHP));
  }

  if (level === 10) {
    return createLevel10TimeAdditionProblem(problemSequence, opponentHP);
  }

  if (level === 11) {
    return createLevel11TimeSubtractionProblem(problemSequence, opponentHP);
  }

  if (level === 12) {
    return createLevel12TimeMixedProblem(problemSequence, opponentHP);
  }

  const factories = UNIT3_PROBLEM_FACTORIES[level] ?? UNIT3_PROBLEM_FACTORIES[11];

  if ((level === 1 || level === 3) && opponentHP >= 50) {
    const zeroStartFactories = factories.filter((_, index) => index % 2 === 0);
    return sample(zeroStartFactories)();
  }

  if (level === 1 || level === 3) {
    const shiftedStartFactories = factories.filter((_, index) => index % 2 === 1);
    return sample(shiftedStartFactories)();
  }

  return sample(factories)();
}

function countCarries(a: number, b: number): number {
  let carries = 0; let carry = 0; let tempA = a; let tempB = b;
  while (tempA > 0 || tempB > 0) {
    const sum = (tempA % 10) + (tempB % 10) + carry;
    if (sum >= 10) { carries++; carry = 1; } else { carry = 0; }
    tempA = Math.floor(tempA / 10); tempB = Math.floor(tempB / 10);
  }
  return carries;
}

function countBorrows(a: number, b: number): number {
  let borrows = 0; let borrow = 0; let tempA = a; let tempB = b;
  while (tempA > 0 || tempB > 0) {
    let diff = (tempA % 10) - (tempB % 10) - borrow;
    if (diff < 0) { borrows++; borrow = 1; } else { borrow = 0; }
    tempA = Math.floor(tempA / 10); tempB = Math.floor(tempB / 10);
  }
  return borrows;
}

function generateStorySeed({
  op,
  aRange,
  bRange,
  validate = () => true,
}: {
  op: '+' | '-';
  aRange: [number, number];
  bRange: [number, number];
  validate?: (a: number, b: number, answer: number) => boolean;
}): GeneratedStoryProblem {
  for (let attempt = 0; attempt < 400; attempt++) {
    const a = randomInt(aRange[0], aRange[1]);
    const b = randomInt(bRange[0], bRange[1]);

    if (op === '-' && a <= b) {
      continue;
    }

    const answer = op === '+' ? a + b : a - b;

    if (validate(a, b, answer)) {
      return { a, b, op, answer };
    }
  }

  if (op === '+') {
    return { a: 428, b: 163, op, answer: 591 };
  }

  return { a: 864, b: 278, op, answer: 586 };
}

const STORY_NUMBER_GENERATORS: Record<number, Array<() => GeneratedStoryProblem>> = {
  8: [
    () =>
      generateStorySeed({
        op: '+',
        aRange: [100, 699],
        bRange: [100, 399],
        validate: (a, b, answer) => answer <= 999 && countCarries(a, b) === 0,
      }),
    () =>
      generateStorySeed({
        op: '+',
        aRange: [140, 799],
        bRange: [100, 499],
        validate: (a, b, answer) => answer <= 999 && countCarries(a, b) === 1,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [300, 999],
        bRange: [100, 499],
        validate: (a, b, answer) => answer >= 100 && countBorrows(a, b) === 0,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [300, 999],
        bRange: [100, 699],
        validate: (a, b, answer) => answer >= 100 && countBorrows(a, b) === 1,
      }),
  ],
  9: [
    () =>
      generateStorySeed({
        op: '+',
        aRange: [200, 999],
        bRange: [200, 999],
        validate: (a, b, answer) => {
          const carries = countCarries(a, b);
          return answer <= 1998 && (carries === 2 || carries === 3);
        },
      }),
    () =>
      generateStorySeed({
        op: '+',
        aRange: [350, 999],
        bRange: [250, 999],
        validate: (a, b, answer) => answer >= 1000 && answer <= 1998 && countCarries(a, b) >= 1,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [400, 999],
        bRange: [100, 899],
        validate: (a, b, answer) => answer >= 100 && countBorrows(a, b) === 2,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [400, 999],
        bRange: [100, 899],
        validate: (a, b, answer) => answer >= 50 && isZeroTensBorrowCase(a, b),
      }),
  ],
};

function generateStoryProblemNumbers(level: number): GeneratedStoryProblem {
  const generators = STORY_NUMBER_GENERATORS[level] ?? STORY_NUMBER_GENERATORS[9];
  return sample(generators)();
}

function isFinalBuilderTurn(level: number, opponentHP: number) {
  return level <= 6 && opponentHP <= FINAL_BUILDER_HP;
}

function canOfferEstimation(unitId: LearningUnitId, opponentHP: number) {
  return unitId === 'unit2' && opponentHP > ESTIMATION_SAFE_HP;
}

function createBuilderProblem(level: number): Problem {
  const baseTitle = '문제 만들기';
  let builder: BuilderProblemData;

  switch (level) {
    case 1:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level1-mid-mid',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '2[a]4',
          bottomTemplate: '3[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]42',
          bottomTemplate: '3[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '24[a]',
          bottomTemplate: '[b]31',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-alt-mid-mid',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '1[a]3',
          bottomTemplate: '2[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]13',
          bottomTemplate: '2[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '3[a]2',
          bottomTemplate: '1[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
      ]);
      break;
    case 2:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level2-mid-mid',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '8[a]6',
          bottomTemplate: '4[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]64',
          bottomTemplate: '4[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '86[a]',
          bottomTemplate: '[b]21',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-alt-mid-mid',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]8',
          bottomTemplate: '2[b]3',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]75',
          bottomTemplate: '3[b]2',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 6),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-alt-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '9[a]4',
          bottomTemplate: '[b]21',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 2, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 8),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
      ]);
      break;
    case 3:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level3-mid-mid',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '2[a]4',
          bottomTemplate: '3[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-top-hund-bottom-ones',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]48',
          bottomTemplate: '31[b]',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 일의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '24[a]',
          bottomTemplate: '[b]15',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-alt-mid-mid',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '4[a]8',
          bottomTemplate: '2[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '5[a]4',
          bottomTemplate: '2[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 6, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 4, 5),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-alt-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '1[a]9',
          bottomTemplate: '[b]30',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 7, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 7),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
      ]);
      break;
    case 4:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level4-mid-mid',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '6[a]8',
          bottomTemplate: '4[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-top-hund-bottom-ones',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]30',
          bottomTemplate: '41[b]',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 일의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '6[a]8',
          bottomTemplate: '[b]51',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-alt-ones-borrow',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '8[a]2',
          bottomTemplate: '3[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 6, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 5),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]40',
          bottomTemplate: '2[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 3),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]3',
          bottomTemplate: '4[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
      ]);
      break;
    case 5:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level5-mid-mid',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '4[a]8',
          bottomTemplate: '3[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]87',
          bottomTemplate: '3[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '48[a]',
          bottomTemplate: '[b]75',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-alt-mid-mid',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '5[a]7',
          bottomTemplate: '2[b]6',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]89',
          bottomTemplate: '1[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 7),
            createBuilderSlot('b', '아랫수의 십의 자리', 1, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '7[a]9',
          bottomTemplate: '1[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 4, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
      ]);
      break;
    case 6:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level6-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '5[a]3',
          bottomTemplate: '[b]48',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 백의 자리', 2, 4),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-top-hund-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]30',
          bottomTemplate: '[b]48',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 2, 4),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-mid-mid',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '6[a]2',
          bottomTemplate: '3[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-alt-mid-mid',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]1',
          bottomTemplate: '4[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]20',
          bottomTemplate: '3[b]6',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-alt-top-hund-bottom-tens-2',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]41',
          bottomTemplate: '2[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 4, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 4, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
      ]);
      break;
    case 7:
      builder = sample([
        {
          title: baseTitle,
          instruction: '자유롭게 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]64',
          bottomTemplate: '2[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 9),
          ],
          invalidMessage: '빈칸을 채워 덧셈 문제를 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: baseTitle,
          instruction: '자유롭게 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '36[a]',
          bottomTemplate: '[b]74',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 5),
          ],
          invalidMessage: '빈칸을 채워 덧셈 문제를 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: baseTitle,
          instruction: '자유롭게 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]45',
          bottomTemplate: '3[b]2',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 4, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '뺄셈이 되도록 알맞은 수를 넣어 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: baseTitle,
          instruction: '자유롭게 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '8[a]4',
          bottomTemplate: '[b]35',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 7),
          ],
          invalidMessage: '뺄셈이 되도록 알맞은 수를 넣어 주세요.',
          validate: (left, right) => left > right,
        },
      ]);
      break;
    case 8:
      builder = sample([
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '37[a]',
          bottomTemplate: '24[b]',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 일의 자리', 0, 9),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '4[a]6',
          bottomTemplate: '25[b]',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 일의 자리', 0, 9),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]58',
          bottomTemplate: '24[b]',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 일의 자리', 0, 9),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '5[a]0',
          bottomTemplate: '3[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 5),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
      ]);
      break;
    case 9:
    default:
      builder = sample([
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '94[a]',
          bottomTemplate: '3[b]6',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 9),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]5',
          bottomTemplate: '[b]38',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 6),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]60',
          bottomTemplate: '2[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 4, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 9),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '93[a]',
          bottomTemplate: '4[b]2',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 8),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
      ]);
      break;
  }

  return {
    text: '',
    prompt: builder.title,
    answer: 0,
    kind: 'builder',
    builder,
  };
}

interface RegularProblemOptions {
  requireZeroTensBorrow?: boolean;
}

function isZeroTensBorrowCase(minuend: number, subtrahend: number) {
  const tensDigit = Math.floor((minuend % 100) / 10);
  const onesDigit = minuend % 10;
  const subtrahendOnesDigit = subtrahend % 10;

  return tensDigit === 0 && onesDigit < subtrahendOnesDigit;
}

function generateRegularProblem(level: number, options: RegularProblemOptions = {}): Problem {
  const { requireZeroTensBorrow = false } = options;
  let a = 0, b = 0, answer = 0;
  let op: '+' | '-' = '+';
  let valid = false;

  if (level >= 8) {
    const storyProblem = generateStoryProblemNumbers(level);
    return createStoryProblem(level, storyProblem.a, storyProblem.b, storyProblem.op, storyProblem.answer);
  }

  while (!valid) {
    a = Math.floor(Math.random() * 900) + 100; b = Math.floor(Math.random() * 900) + 100;
    if (level === 1) { if (a + b <= 999 && countCarries(a, b) === 0) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 2) { if (a > b && countBorrows(a, b) === 0) { valid = true; answer = a - b; op = '-'; } }
    else if (level === 3) { if (a + b <= 999 && countCarries(a, b) === 1) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 4) { if (a > b && countBorrows(a, b) === 1) { valid = true; answer = a - b; op = '-'; } }
    else if (level === 5) { const carries = countCarries(a, b); if (a + b <= 1998 && (carries === 2 || carries === 3)) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 6) {
      if (
        a > b &&
        countBorrows(a, b) === 2 &&
        (!requireZeroTensBorrow || isZeroTensBorrowCase(a, b))
      ) {
        valid = true; answer = a - b; op = '-';
      }
    }
    else {
      const isAdd = requireZeroTensBorrow ? false : Math.random() > 0.5;
      if (isAdd) { answer = a + b; op = '+'; valid = true; }
      else if (a > b && (!requireZeroTensBorrow || isZeroTensBorrowCase(a, b))) {
        answer = a - b; op = '-'; valid = true;
      }
    }
  }
  return createEquationProblem(a, b, op, answer);
}

function createShapeDrawProblem(
  mode: ShapeDrawMode,
  title: string,
  task: ShapeDrawTask = 'draw',
  identifyVariant?: ShapeDrawProblemData['identifyVariant'],
  figureVariant = randomIntInRange(0, 2),
  drawVariant?: ShapeDrawProblemData['drawVariant'],
): Problem {
  const answerToken = task === 'identify'
    ? identifyVariant === 'definition'
      ? figureVariant % 2 === 0
        ? '반듯'
        : '두 번'
      : identifyVariant === 'rightTriangleDefinition'
        ? getRightTriangleDefinitionAnswerToken(figureVariant)
      : identifyVariant === 'rightTriangleClassify'
        ? RIGHT_TRIANGLE_CLASSIFY_ANSWER_TOKENS[figureVariant % RIGHT_TRIANGLE_CLASSIFY_ANSWER_TOKENS.length]
      : identifyVariant === 'shapeDefinition'
        ? getShapeDefinitionAnswerToken(mode, figureVariant)
      : identifyVariant === 'shapeClassify' && (mode === 'rectangle' || mode === 'square')
        ? SHAPE_CLASSIFY_ANSWER_TOKENS[mode][figureVariant % SHAPE_CLASSIFY_ANSWER_TOKENS[mode].length]
      : identifyVariant === 'rightAngleMark'
        ? getRightAngleMarkAnswerToken(figureVariant)
      : identifyVariant === 'rightAngleCount'
        ? getRightAngleCountAnswerToken(figureVariant)
      : identifyVariant === 'rightAngleNames'
        ? getRightAngleNamesAnswerToken(figureVariant)
      : identifyVariant === 'clockRightAngles'
        ? '3시9시|9시3시|3시,9시|9시,3시'
      : getShapeReadAnswerToken(mode, figureVariant)
    : `${mode}-ok`;

  return {
    text: title,
    prompt: title,
    answer: 1,
    kind: 'shapeDraw',
    shapeDraw: {
      mode,
      task,
      title,
      answerToken,
      identifyVariant,
      drawVariant,
      figureVariant,
    },
  };
}

const UNIT1_PROBLEM_COUNTS: Record<number, number> = {
  1: 4,
  2: 4,
  3: 4,
  4: 4,
  5: 4,
  6: 4,
  7: 4,
  8: 4,
  9: 4,
};

type Unit1ShapeProblemEntry =
  | [ShapeDrawMode, string]
  | [ShapeDrawMode, string, ShapeDrawTask]
  | [ShapeDrawMode, string, ShapeDrawTask, ShapeDrawProblemData['identifyVariant']]
  | [ShapeDrawMode, string, ShapeDrawTask, ShapeDrawProblemData['identifyVariant'], number]
  | [ShapeDrawMode, string, ShapeDrawTask, ShapeDrawProblemData['identifyVariant'], number, ShapeDrawProblemData['drawVariant']];

const unit1ProblemOrderCache = new Map<number, Unit1ShapeProblemEntry[]>();
const previousUnit1EntrySignaturesByLevel = new Map<number, string[]>();

function resetUnit1ProblemOrders() {
  unit1ProblemOrderCache.clear();
}

function getUnit1EntrySignature(entry: Unit1ShapeProblemEntry) {
  const [mode, , task = 'draw', identifyVariant, figureVariant, drawVariant] = entry;
  return [mode, task, identifyVariant ?? 'none', figureVariant ?? 'random', drawVariant ?? 'none'].join(':');
}

function arrangeUnit1EntriesWithoutAdjacentRepeats(entries: Unit1ShapeProblemEntry[]) {
  const remainingEntries = [...entries];
  const arrangedEntries: Unit1ShapeProblemEntry[] = [];
  let previousSignature = '';

  while (remainingEntries.length > 0) {
    const candidates = shuffleValues(remainingEntries.map((entry, index) => ({ entry, index })));
    const nextCandidate = candidates.find(({ entry }) => getUnit1EntrySignature(entry) !== previousSignature) ?? candidates[0];

    arrangedEntries.push(nextCandidate.entry);
    previousSignature = getUnit1EntrySignature(nextCandidate.entry);
    remainingEntries.splice(nextCandidate.index, 1);
  }

  return arrangedEntries;
}

function arrangeUnit1EntriesForRound(level: number, entries: Unit1ShapeProblemEntry[]) {
  const previousSignatures = previousUnit1EntrySignaturesByLevel.get(level) ?? [];
  const remainingEntries = arrangeUnit1EntriesWithoutAdjacentRepeats(entries);
  const arrangedEntries: Unit1ShapeProblemEntry[] = [];
  let previousSignature = '';

  while (remainingEntries.length > 0) {
    const position = arrangedEntries.length;
    const candidates = remainingEntries.map((entry, index) => ({
      entry,
      index,
      signature: getUnit1EntrySignature(entry),
    }));
    const nextCandidate =
      candidates.find(({ signature }) => signature !== previousSignature && signature !== previousSignatures[position])
      ?? candidates.find(({ signature }) => signature !== previousSignature)
      ?? candidates.find(({ signature }) => signature !== previousSignatures[position])
      ?? candidates[0];

    arrangedEntries.push(nextCandidate.entry);
    previousSignature = nextCandidate.signature;
    remainingEntries.splice(nextCandidate.index, 1);
  }

  previousUnit1EntrySignaturesByLevel.set(level, arrangedEntries.map(getUnit1EntrySignature));
  return arrangedEntries;
}

function arrangeUnit1EntriesWithFixedFirstForRound(level: number, firstEntry: Unit1ShapeProblemEntry, restEntries: Unit1ShapeProblemEntry[]) {
  const entries = [firstEntry, ...shuffleValues(restEntries)];

  previousUnit1EntrySignaturesByLevel.set(level, entries.map(getUnit1EntrySignature));
  return entries;
}

function getUnit1Level1ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(1);
  if (cachedEntries) {
    return cachedEntries;
  }

  const drawEntries = shuffleValues<Unit1ShapeProblemEntry>([
    ['segment', '두 점을 곧게 이어 선분을 만들어 보세요.'],
    ['segment', '점 ㄱ과 점 ㄴ을 이어 선분을 완성해 보세요.'],
    ['line', '두 점을 지나 양쪽으로 끝없이 이어지는 직선을 만들어 보세요.'],
    ['line', '두 점을 지나 계속 이어지는 직선을 그려 보세요.'],
    ['ray', '시작점에서 한쪽으로 끝없이 이어지는 반직선을 만들어 보세요.'],
    ['ray', '점 ㄱ에서 시작해 한쪽으로 이어지는 반직선을 만들어 보세요.'],
  ]).slice(0, 4);
  const readEntries = shuffleValues<Unit1ShapeProblemEntry>([
    ['ray', '제시된 선의 이름을 써 보세요.', 'identify', undefined, 0],
    [Math.random() < 0.5 ? 'segment' : 'line', '선을 보고 알맞은 이름을 써 보세요.', 'identify', undefined, 1],
    ['segment', '제시된 선의 이름을 써 보세요.', 'identify', undefined, 2],
    ['line', '선을 보고 알맞은 이름을 써 보세요.', 'identify', undefined, 3],
  ]);
  const entries = arrangeUnit1EntriesForRound(1, [...drawEntries, ...readEntries]);

  unit1ProblemOrderCache.set(1, entries);
  return entries;
}

function getUnit1Level2ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(2);
  if (cachedEntries) {
    return cachedEntries;
  }

  const angleReadVariants = shuffleValues([...SHAPE_READ_ANGLE_LABEL_SETS.keys()]);
  const entries = arrangeUnit1EntriesForRound(2, [
    ['angle', '점 ㄴ에서 두 반직선을 그어 각을 만들어 보세요.'],
    ['angle', '점 ㄴ을 꼭짓점으로 하는 각을 만들어 보세요.'],
    ['angle', '두 반직선이 만나는 점을 꼭짓점으로 하여 각을 그려 보세요.'],
    ['angle', '점 ㄴ에서 시작하는 두 반직선으로 각을 완성해 보세요.'],
    ['angle', '각을 보고 이름을 써 보세요.', 'identify', undefined, angleReadVariants[0] ?? 0],
    ['angle', '제시된 각의 이름을 써 보세요.', 'identify', undefined, angleReadVariants[1] ?? 1],
    ['angle', '각의 이름을 알맞게 써 보세요.', 'identify', undefined, angleReadVariants[2] ?? 2],
    ['angle', '그림 속 각을 읽고 이름을 써 보세요.', 'identify', undefined, angleReadVariants[3] ?? 3],
  ]);

  unit1ProblemOrderCache.set(2, entries);
  return entries;
}

function getUnit1Level3ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(3);
  if (cachedEntries) {
    return cachedEntries;
  }

  const foldEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rightAngle', '접어서 생긴 각의 이름을 써 보세요.', 'identify', 'fold', 0]
    : ['rightAngle', '종이를 접어 생긴 반듯한 각의 이름을 써 보세요.', 'identify', 'fold', 1];
  const definitionEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rightAngle', '빈칸에 알맞은 말을 써 보세요.', 'identify', 'definition']
    : ['rightAngle', '직각의 뜻을 떠올려 빈칸을 채워 보세요.', 'identify', 'definition', 1];
  const drawEntries = shuffleValues<Unit1ShapeProblemEntry>([
    ['rightAngle', '점 ㄴ에서 두 반직선을 그어 직각을 만들어 보세요.', 'draw', undefined, randomIntInRange(0, 9), 'point'],
    ['rightAngle', '꼭짓점 ㄴ을 기준으로 직각을 완성해 보세요.', 'draw', undefined, randomIntInRange(0, 9), 'point'],
    ['rightAngle', '주어진 반직선과 직각이 되도록 점 ㄴ에서 반직선을 그어 보세요.', 'draw', undefined, randomIntInRange(0, 9), 'ray'],
    ['rightAngle', '반직선 하나를 더 그어 직각을 만들어 보세요.', 'draw', undefined, randomIntInRange(0, 9), 'ray'],
  ]).slice(0, 2);
  const entries = arrangeUnit1EntriesForRound(3, [foldEntry, definitionEntry, ...drawEntries]);

  unit1ProblemOrderCache.set(3, entries);
  return entries;
}

function getUnit1Level4ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(4);
  if (cachedEntries) {
    return cachedEntries;
  }

  const markVariant = randomIntInRange(0, RIGHT_ANGLE_MARK_ANSWER_TOKENS.length - 1);
  const countVariant = randomIntInRange(0, RIGHT_ANGLE_COUNT_ANSWERS.length - 1);
  const nameVariant = randomIntInRange(0, RIGHT_ANGLE_NAME_PROBLEM_VARIANTS.length - 1);
  const clockVariant = randomIntInRange(0, CLOCK_RIGHT_ANGLE_OPTION_VARIANTS.length - 1);
  const entries = arrangeUnit1EntriesForRound(4, [
    ['rightAngle', '도형 속 직각이 모두 몇 개인지 써 보세요.', 'identify', 'rightAngleMark', markVariant],
    ['rightAngle', '도형 속 직각이 모두 몇 개인지 세어 보세요.', 'identify', 'rightAngleMark', (markVariant + 1) % RIGHT_ANGLE_MARK_ANSWER_TOKENS.length],
    ['rightAngle', '왼쪽 도형부터 직각이 몇 개인지 차례대로 써 보세요.', 'identify', 'rightAngleCount', countVariant],
    ['rightAngle', '세 도형의 직각 수를 차례대로 써 보세요.', 'identify', 'rightAngleCount', (countVariant + 1) % RIGHT_ANGLE_COUNT_ANSWERS.length],
    ['rightAngle', '직각을 모두 찾아 각의 이름을 써 보세요.', 'identify', 'rightAngleNames', nameVariant],
    ['rightAngle', '그림에서 직각인 각의 이름을 모두 써 보세요.', 'identify', 'rightAngleNames', (nameVariant + 1) % RIGHT_ANGLE_NAME_PROBLEM_VARIANTS.length],
    ['rightAngle', '직각이 되는 시각을 모두 써 보세요.', 'identify', 'clockRightAngles', clockVariant],
    ['rightAngle', '시계에서 직각을 만드는 시각을 찾아 써 보세요.', 'identify', 'clockRightAngles', (clockVariant + 1) % CLOCK_RIGHT_ANGLE_OPTION_VARIANTS.length],
  ]);

  unit1ProblemOrderCache.set(4, entries);
  return entries;
}

function getUnit1Level5ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(5);
  if (cachedEntries) {
    return cachedEntries;
  }

  const classifyVariant = randomIntInRange(0, RIGHT_TRIANGLE_CLASSIFY_ANSWER_TOKENS.length - 1);
  const definitionVariant = randomIntInRange(0, RIGHT_TRIANGLE_DEFINITION_VARIANTS.length - 1);
  const pointCompletionVariant = randomIntInRange(0, 7);
  const twoTriangleVariant = randomIntInRange(0, 5);
  const classifyTitles = [
    '삼각형을 알맞은 곳으로 옮겨 분류해 보세요.',
    '직각이 있는 삼각형과 없는 삼각형으로 나누어 보세요.',
    '삼각형 카드를 알맞은 칸에 넣어 보세요.',
  ];
  const pointTitles = [
    '나머지 한 점을 찍어 직각삼각형을 완성해 보세요.',
    '주어진 선분에 점 하나를 더 찍어 직각삼각형을 만들어 보세요.',
    '한 점을 찍어 선분과 함께 직각삼각형이 되게 해 보세요.',
  ];
  const polygonTitles = [
    '모양이 다른 직각삼각형 2개를 그려 보세요.',
    '삼각형 도구로 서로 다른 모양의 직각삼각형 2개를 만들어 보세요.',
    '모양이 다른 직각삼각형을 두 개 그려 보세요.',
  ];
  const definitionEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rightTriangle', '빈칸에 알맞은 말을 써 보세요.', 'identify', 'rightTriangleDefinition', definitionVariant]
    : [
        'rightTriangle',
        '직각삼각형의 뜻에 맞게 빈칸을 채워 보세요.',
        'identify',
        'rightTriangleDefinition',
        (definitionVariant + 1) % RIGHT_TRIANGLE_DEFINITION_VARIANTS.length,
      ];
  const pointEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rightTriangle', pointTitles[pointCompletionVariant % pointTitles.length], 'draw', undefined, pointCompletionVariant, 'point']
    : [
        'rightTriangle',
        pointTitles[(pointCompletionVariant + 1) % pointTitles.length],
        'draw',
        undefined,
        (pointCompletionVariant + 3) % 8,
        'point',
      ];
  const polygonEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rightTriangle', polygonTitles[twoTriangleVariant % polygonTitles.length], 'draw', undefined, twoTriangleVariant, 'twoRightTriangles']
    : [
        'rightTriangle',
        polygonTitles[(twoTriangleVariant + 1) % polygonTitles.length],
        'draw',
        undefined,
        (twoTriangleVariant + 2) % 6,
        'twoRightTriangles',
      ];
  const entries = arrangeUnit1EntriesWithFixedFirstForRound(
    5,
    ['rightTriangle', classifyTitles[classifyVariant % classifyTitles.length], 'identify', 'rightTriangleClassify', classifyVariant],
    [definitionEntry, pointEntry, polygonEntry],
  );

  unit1ProblemOrderCache.set(5, entries);
  return entries;
}

function getUnit1Level6ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(6);
  if (cachedEntries) {
    return cachedEntries;
  }

  const classifyVariant = randomIntInRange(0, RECTANGLE_CLASSIFY_VARIANTS.length - 1);
  const definitionVariant = randomIntInRange(0, SHAPE_DEFINITION_VARIANTS.rectangle.length - 1);
  const pointCompletionVariant = randomIntInRange(0, 5);
  const twoRectangleVariant = randomIntInRange(0, 5);
  const classifyEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rectangle', '직각의 수에 따라 사각형 카드를 분류해 보세요.', 'identify', 'shapeClassify', classifyVariant]
    : [
        'rectangle',
        '직사각형인 도형과 아닌 도형을 나누어 보세요.',
        'identify',
        'shapeClassify',
        (classifyVariant + 1) % RECTANGLE_CLASSIFY_VARIANTS.length,
      ];
  const definitionEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rectangle', '빈칸에 알맞은 말을 써 보세요.', 'identify', 'shapeDefinition', definitionVariant]
    : [
        'rectangle',
        '직사각형의 뜻을 생각하며 빈칸을 채워 보세요.',
        'identify',
        'shapeDefinition',
        (definitionVariant + 1) % SHAPE_DEFINITION_VARIANTS.rectangle.length,
      ];
  const pointEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rectangle', '나머지 한 점을 찍어 직사각형을 완성해 보세요.', 'draw', undefined, pointCompletionVariant, 'point']
    : [
        'rectangle',
        '세 점을 보고 알맞은 곳에 한 점을 찍어 직사각형을 만들어 보세요.',
        'draw',
        undefined,
        (pointCompletionVariant + 2) % 6,
        'point',
      ];
  const polygonEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['rectangle', '모양이나 크기가 다른 직사각형 2개를 그려 보세요.', 'draw', undefined, twoRectangleVariant, 'twoPolygons']
    : [
        'rectangle',
        '서로 다른 모양이나 크기의 직사각형 두 개를 완성해 보세요.',
        'draw',
        undefined,
        (twoRectangleVariant + 3) % 6,
        'twoPolygons',
      ];
  const entries = arrangeUnit1EntriesWithFixedFirstForRound(6, classifyEntry, [definitionEntry, pointEntry, polygonEntry]);

  unit1ProblemOrderCache.set(6, entries);
  return entries;
}

function getUnit1Level7ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(7);
  if (cachedEntries) {
    return cachedEntries;
  }

  const classifyVariant = randomIntInRange(0, SQUARE_CLASSIFY_VARIANTS.length - 1);
  const definitionVariant = randomIntInRange(0, SHAPE_DEFINITION_VARIANTS.square.length - 1);
  const pointCompletionVariant = randomIntInRange(0, 5);
  const twoSquareVariant = randomIntInRange(0, 5);
  const classifyEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['square', '도형 카드를 알맞은 칸에 넣어 정사각형을 분류해 보세요.', 'identify', 'shapeClassify', classifyVariant]
    : [
        'square',
        '정사각형인 도형과 아닌 도형을 나누어 보세요.',
        'identify',
        'shapeClassify',
        (classifyVariant + 1) % SQUARE_CLASSIFY_VARIANTS.length,
      ];
  const definitionEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['square', '빈칸에 알맞은 말을 써 보세요.', 'identify', 'shapeDefinition', definitionVariant]
    : [
        'square',
        '정사각형의 뜻을 생각하며 빈칸을 채워 보세요.',
        'identify',
        'shapeDefinition',
        (definitionVariant + 1) % SHAPE_DEFINITION_VARIANTS.square.length,
      ];
  const pointEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['square', '나머지 한 점을 찍어 정사각형을 완성해 보세요.', 'draw', undefined, pointCompletionVariant, 'point']
    : [
        'square',
        '세 점을 보고 알맞은 곳에 한 점을 찍어 정사각형을 만들어 보세요.',
        'draw',
        undefined,
        (pointCompletionVariant + 2) % 6,
        'point',
      ];
  const polygonEntry: Unit1ShapeProblemEntry = Math.random() < 0.5
    ? ['square', '크기가 다른 정사각형 2개를 그려 보세요.', 'draw', undefined, twoSquareVariant, 'twoPolygons']
    : [
        'square',
        '서로 크기가 다른 정사각형 두 개를 완성해 보세요.',
        'draw',
        undefined,
        (twoSquareVariant + 3) % 6,
        'twoPolygons',
      ];
  const entries = arrangeUnit1EntriesWithFixedFirstForRound(7, classifyEntry, [definitionEntry, pointEntry, polygonEntry]);

  unit1ProblemOrderCache.set(7, entries);
  return entries;
}

function getUnit1Level8ProblemEntries() {
  const cachedEntries = unit1ProblemOrderCache.get(8);
  if (cachedEntries) {
    return cachedEntries;
  }

  const rightTriangleVariant = randomIntInRange(0, 7);
  const rectangleVariant = randomIntInRange(0, 7);
  const squareVariant = randomIntInRange(0, 7);
  const entriesPool = shuffleValues<Unit1ShapeProblemEntry>([
    ['rightTriangle', '나머지 한 점을 찍어 직각삼각형을 완성해 보세요.', 'draw', undefined, rightTriangleVariant, 'point'],
    ['rightTriangle', '선분을 이어 직각삼각형을 완성해 보세요.', 'draw', undefined, (rightTriangleVariant + 1) % 8, 'lineCompletion'],
    ['rightTriangle', '모양 또는 크기가 다른 직각삼각형 3개를 그려 보세요.', 'draw', undefined, (rightTriangleVariant + 2) % 8, 'threeRightTriangles'],
    ['rectangle', '나머지 한 점을 찍어 직사각형을 완성해 보세요.', 'draw', undefined, rectangleVariant, 'point'],
    ['rectangle', '선분을 이어 직사각형을 완성해 보세요.', 'draw', undefined, (rectangleVariant + 1) % 8, 'lineCompletion'],
    ['rectangle', '모양 또는 크기가 다른 직사각형 3개를 그려 보세요.', 'draw', undefined, (rectangleVariant + 2) % 8, 'threePolygons'],
    ['square', '나머지 한 점을 찍어 정사각형을 완성해 보세요.', 'draw', undefined, squareVariant, 'point'],
    ['square', '선분을 이어 정사각형을 완성해 보세요.', 'draw', undefined, (squareVariant + 1) % 8, 'lineCompletion'],
    ['square', '크기가 다른 정사각형 3개를 그려 보세요.', 'draw', undefined, (squareVariant + 2) % 8, 'threePolygons'],
  ]);
  const entries = arrangeUnit1EntriesForRound(
    8,
    entriesPool.slice(0, UNIT1_PROBLEM_COUNTS[8] ?? entriesPool.length),
  );

  unit1ProblemOrderCache.set(8, entries);
  return entries;
}

function createShapeRainProblem(problemSequence = 1): Problem {
  const wave = Math.max(1, Math.min(UNIT1_PROBLEM_COUNTS[9] ?? 4, problemSequence));
  const phaseConfig: Record<number, Pick<ShapeRainProblemData, 'targetCount' | 'fallDurationMs' | 'maxActiveDrops' | 'spawnIntervalMs' | 'initialDropCount' | 'pairSpawnEvery'>> = {
    1: {
      targetCount: 6,
      fallDurationMs: 54000,
      maxActiveDrops: 2,
      spawnIntervalMs: 12000,
      initialDropCount: 1,
    },
    2: {
      targetCount: 7,
      fallDurationMs: 50000,
      maxActiveDrops: 2,
      spawnIntervalMs: 8500,
      initialDropCount: 1,
    },
    3: {
      targetCount: 8,
      fallDurationMs: 46000,
      maxActiveDrops: 3,
      spawnIntervalMs: 6800,
      initialDropCount: 1,
      pairSpawnEvery: 4,
    },
    4: {
      targetCount: 10,
      fallDurationMs: 42000,
      maxActiveDrops: 3,
      spawnIntervalMs: 5400,
      initialDropCount: 2,
      pairSpawnEvery: 3,
    },
    5: {
      targetCount: 11,
      fallDurationMs: 40000,
      maxActiveDrops: 3,
      spawnIntervalMs: 5000,
      initialDropCount: 2,
      pairSpawnEvery: 3,
    },
    6: {
      targetCount: 12,
      fallDurationMs: 38000,
      maxActiveDrops: 4,
      spawnIntervalMs: 4600,
      initialDropCount: 2,
      pairSpawnEvery: 3,
    },
    7: {
      targetCount: 13,
      fallDurationMs: 36000,
      maxActiveDrops: 4,
      spawnIntervalMs: 4200,
      initialDropCount: 3,
      pairSpawnEvery: 2,
    },
    8: {
      targetCount: 14,
      fallDurationMs: 34000,
      maxActiveDrops: 4,
      spawnIntervalMs: 3800,
      initialDropCount: 3,
      pairSpawnEvery: 2,
    },
  };
  const config = phaseConfig[wave] ?? phaseConfig[8];
  const requiredShapes: ShapeRainShapeKind[] =
    wave === 1
      ? ['segment', 'line', 'ray', 'angle']
      : wave === 2
        ? ['rightAngle', 'rightTriangle', 'rectangle', 'square']
        : wave === 3
          ? ['segment', 'ray', 'rightAngle', 'rectangle', 'rightTriangle']
          : wave <= 5
            ? ['line', 'angle', 'rightAngle', 'rightTriangle', 'rectangle', 'square']
            : ['segment', 'line', 'ray', 'angle', 'rightAngle', 'rightTriangle', 'rectangle', 'square'];
  const shapePool = shuffleValues([...requiredShapes, ...SHAPE_RAIN_SHAPES, ...requiredShapes]).slice(0, config.targetCount);

  return {
    text: '평면도형 산성비',
    prompt: '하늘에서 떨어지는 평면도형의 이름을 정확히 입력해 막아 보세요.',
    answer: 1,
    kind: 'shapeRain',
    shapeRain: {
      title: `${wave}웨이브: 평면도형 산성비`,
      wave,
      ...config,
      shapes: shapePool,
    },
  };
}

function generateUnit1Problem(level: number, problemSequence = 1): Problem {
  if (level === 9) {
    return createShapeRainProblem(problemSequence);
  }

  const modeSets: Record<number, Unit1ShapeProblemEntry[]> = {
    1: getUnit1Level1ProblemEntries(),
    2: getUnit1Level2ProblemEntries(),
    3: getUnit1Level3ProblemEntries(),
    4: getUnit1Level4ProblemEntries(),
    5: getUnit1Level5ProblemEntries(),
    6: getUnit1Level6ProblemEntries(),
    7: getUnit1Level7ProblemEntries(),
    8: getUnit1Level8ProblemEntries(),
  };
  const entries = modeSets[level] ?? modeSets[1];
  const [mode, title, task = 'draw', identifyVariant, figureVariant, drawVariant] = entries[(problemSequence - 1) % entries.length];
  return createShapeDrawProblem(mode, title, task, identifyVariant, figureVariant, drawVariant);
}

function getProblemForTurn(unitId: LearningUnitId, level: number, opponentHP: number, problemSequence?: number): Problem {
  if (unitId === 'unit1') {
    return generateUnit1Problem(level, problemSequence);
  }

  if (unitId === 'unit3') {
    return generateUnit3Problem(level, opponentHP, problemSequence);
  }

  return isFinalBuilderTurn(level, opponentHP) ? createBuilderProblem(level) : generateRegularProblem(level);
}

function fillBuilderTemplate(template: string, slotValues: Record<string, string>, emptyValue = '') {
  return template.replace(/\[([a-z]+)\]/g, (_, slotId: string) => slotValues[slotId] ?? emptyValue);
}

function parseProblemExpression(text: string) {
  const match = text.match(/(\d+)\s*([+-])\s*(\d+)/);

  if (!match) {
    return null;
  }

  return {
    left: Number(match[1]),
    op: match[2] as '+' | '-',
    right: Number(match[3]),
  };
}

function isZeroTensBorrowProblem(problem: Problem) {
  const expression = parseProblemExpression(problem.text);

  if (!expression || expression.op !== '-') {
    return false;
  }

  return isZeroTensBorrowCase(expression.left, expression.right);
}

function evaluateBuilderProblem(problem: Problem, slotValues: Record<string, string>) {
  if (problem.kind !== 'builder' || !problem.builder) {
    return null;
  }

  for (const slot of problem.builder.slots) {
    const value = slotValues[slot.id];

    if (!value) {
      return { status: 'incomplete' as const, message: '빈칸에 숫자를 넣어주세요.' };
    }

    if (!slot.digits.includes(value)) {
      return { status: 'invalid' as const, message: '제시된 범위 안의 숫자만 넣을 수 있어요.' };
    }
  }

  const leftText = fillBuilderTemplate(problem.builder.topTemplate, slotValues);
  const rightText = fillBuilderTemplate(problem.builder.bottomTemplate, slotValues);
  const left = Number(leftText);
  const right = Number(rightText);

  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    return { status: 'invalid' as const, message: '빈칸의 숫자를 다시 확인해 주세요.' };
  }

  if (!problem.builder.validate(left, right)) {
    return { status: 'invalid' as const, message: problem.builder.invalidMessage };
  }

  return {
    status: 'ready' as const,
    text: `${left} ${problem.builder.op} ${right}`,
    answer: problem.builder.op === '+' ? left + right : left - right,
  };
}

function shuffleNumbers(values: number[]) {
  const next = [...values];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function randomIntInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEstimationBoundaryValue(value: number) {
  const lastTwoDigits = Math.abs(value) % ESTIMATION_ROUNDING_UNIT;
  return lastTwoDigits >= ESTIMATION_BOUNDARY_RANGE_MIN && lastTwoDigits <= ESTIMATION_BOUNDARY_RANGE_MAX;
}

const PROMPT_EMPHASIS_CLASS_MAP: Record<string, string> = {
  정확하게: 'font-black text-rose-600',
  편하게: 'font-black text-emerald-600',
};

function renderPromptWithHighlight(text: string, shouldHighlight = true) {
  return text
    .split(/(\[\[[^\]]+\]\]|\d+)/)
    .filter((part) => part.length > 0)
    .map((part, index) => {
      const emphasisMatch = part.match(/^\[\[([^\]]+)\]\]$/);

      if (emphasisMatch) {
        const emphasisText = emphasisMatch[1];
        return (
          <span
            key={`${emphasisText}-${index}`}
            className={PROMPT_EMPHASIS_CLASS_MAP[emphasisText] ?? 'font-black text-violet-600'}
          >
            {emphasisText}
          </span>
        );
      }

      if (shouldHighlight && /^\d+$/.test(part)) {
        return (
          <span key={`${part}-${index}`} className="font-black text-sky-600">
            {part}
          </span>
        );
      }

      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    });
}

function getStoryPromptLines(prompt: string) {
  return prompt
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function splitStoryPromptSections(prompt: string) {
  const lines = getStoryPromptLines(prompt);
  const optionStartIndex = lines.findIndex((line) => /^\d+\)/.test(line));

  if (optionStartIndex === -1) {
    return {
      introLines: lines,
      optionLines: [] as string[],
    };
  }

  const optionLines = lines.slice(optionStartIndex);
  if (!optionLines.every((line) => /^\d+\)/.test(line))) {
    return {
      introLines: lines,
      optionLines: [] as string[],
    };
  }

  return {
    introLines: lines.slice(0, optionStartIndex),
    optionLines,
  };
}

function formatDigitChoices(digits: string[]) {
  if (digits.length > 1 && Number(digits[digits.length - 1]) - Number(digits[0]) === digits.length - 1) {
    return `${digits[0]}~${digits[digits.length - 1]}`;
  }

  return digits.join(', ');
}

function BuilderNumberRow({
  template,
  slotsById,
  slotValues,
  onSlotChange,
}: {
  template: string;
  slotsById: Record<string, BuildSlotConfig>;
  slotValues: Record<string, string>;
  onSlotChange: (slotId: string, nextValue: string) => void;
}) {
  const tokens = template.match(/\[[a-z]+\]|./g) ?? [];

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
      {tokens.map((token, index) => {
        const slotMatch = token.match(/^\[([a-z]+)\]$/);

        if (slotMatch) {
          const slotId = slotMatch[1];
          const slot = slotsById[slotId];

          if (!slot) {
            return (
              <span
                key={`${slotId}-${index}`}
                className="flex h-14 w-14 items-center justify-center rounded-[22px] border-4 border-rose-200 bg-rose-50 text-3xl font-black text-rose-500 sm:h-20 sm:w-20 sm:rounded-[28px] sm:text-5xl md:h-24 md:w-24 md:text-6xl"
                title="잘못된 빈칸 설정"
              >
                ?
              </span>
            );
          }

          return (
            <input
              key={`${slotId}-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={slotValues[slotId] ?? ''}
              onChange={(event) => onSlotChange(slotId, event.target.value)}
              placeholder="?"
              aria-label={slot.label}
              className="h-14 w-14 rounded-[22px] border-4 border-sky-200 bg-sky-50 text-center text-3xl font-black text-sky-700 outline-none transition focus:border-sky-500 sm:h-20 sm:w-20 sm:rounded-[28px] sm:text-5xl md:h-24 md:w-24 md:text-6xl"
              title={`${slot.label}: ${formatDigitChoices(slot.digits)} 중에서 넣기`}
            />
          );
        }

        return (
          <span
            key={`${token}-${index}`}
            className="flex h-14 w-14 items-center justify-center rounded-[22px] border-4 border-slate-200 bg-slate-50 text-3xl font-black text-slate-900 sm:h-20 sm:w-20 sm:rounded-[28px] sm:text-5xl md:h-24 md:w-24 md:text-6xl"
          >
            {token}
          </span>
        );
      })}
    </div>
  );
}

function MeasurementObjectIllustration({
  kind,
  x,
  y,
  width,
}: {
  kind: MeasurementObjectKind;
  label: string;
  x: number;
  y: number;
  width: number;
}) {
  const left = x;
  const right = x + width;

  if (kind === 'seed') {
    const centerY = y + 16;
    const d = [
      `M ${left} ${centerY}`,
      `C ${x + width * 0.16} ${y + 4}, ${x + width * 0.42} ${y + 2}, ${right} ${centerY}`,
      `C ${x + width * 0.42} ${y + 30}, ${x + width * 0.16} ${y + 28}, ${left} ${centerY}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 36} rx={Math.max(10, width * 0.26)} ry={3.4} fill="#d7dde5" opacity="0.18" />
        <path d={d} fill="#8f4a25" stroke="#6e3417" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <path
          d={`M ${x + width * 0.22} ${y + 10} C ${x + width * 0.34} ${y + 6}, ${x + width * 0.5} ${y + 6}, ${x + width * 0.68} ${y + 12}`}
          fill="none"
          stroke="#c78861"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'rice') {
    const centerY = y + 18;
    const d = [
      `M ${left} ${centerY}`,
      `C ${x + width * 0.14} ${y + 5}, ${x + width * 0.38} ${y + 3}, ${right} ${centerY}`,
      `C ${x + width * 0.38} ${y + 31}, ${x + width * 0.14} ${y + 29}, ${left} ${centerY}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 38} rx={Math.max(9, width * 0.2)} ry={3} fill="#d7dde5" opacity="0.16" />
        <path d={d} fill="#fff8ec" stroke="#d7c7a9" strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
        <path
          d={`M ${x + width * 0.18} ${y + 15} C ${x + width * 0.34} ${y + 11}, ${x + width * 0.54} ${y + 11}, ${x + width * 0.74} ${y + 17}`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.92"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'paperClip') {
    const outerStroke = 6.2;
    const innerStroke = 5;
    const outerX = x + outerStroke / 2;
    const outerY = y + 8;
    const outerWidth = width - outerStroke;
    const outerHeight = 40;
    const innerX = x + width * 0.22;
    const innerY = y + 17;
    const innerWidth = width * 0.45;
    const innerHeight = 22;
    const outerGapX = outerX + outerWidth;
    const innerGapX = innerX + innerWidth;

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 58} rx={width * 0.22} ry={3.1} fill="#d7dde5" opacity="0.16" />
        <rect
          x={outerX}
          y={outerY}
          width={outerWidth}
          height={outerHeight}
          rx="18"
          fill="none"
          stroke="#98a4b7"
          strokeWidth={outerStroke}
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={innerX}
          y={innerY}
          width={innerWidth}
          height={innerHeight}
          rx="12"
          fill="none"
          stroke="#bcc5d4"
          strokeWidth={innerStroke}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${outerGapX} ${outerY + 5} V ${outerY + 19}`}
          stroke="#fbfdff"
          strokeWidth="8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${innerGapX} ${innerY + 5} V ${innerY + 14}`}
          stroke="#fbfdff"
          strokeWidth="7"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'chocolate') {
    const top = y + 7;
    const height = 34;

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 47} rx={Math.max(12, width * 0.26)} ry={4.2} fill="#d7dde5" opacity="0.16" />
        <rect x={x} y={top} width={width} height={height} rx="8" fill="#8d4f2e" stroke="#67351a" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + 7} ${top + 6} H ${x + width - 7}`} stroke="#b87752" strokeWidth="2" opacity="0.78" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + 6} ${top + height - 6} H ${x + width - 6}`} stroke="#653417" strokeWidth="1.7" opacity="0.45" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </g>
    );
  }

  if (kind === 'toothpick') {
    const centerY = y + 24;
    const halfHeight = 4.5;
    const tipWidth = Math.max(14, width * 0.035);

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 38} rx={width * 0.24} ry={2.6} fill="#d7dde5" opacity="0.12" />
        <path
          d={[
            `M ${left} ${centerY}`,
            `L ${left + tipWidth} ${centerY - halfHeight}`,
            `H ${right - tipWidth}`,
            `L ${right} ${centerY}`,
            `L ${right - tipWidth} ${centerY + halfHeight}`,
            `H ${left + tipWidth}`,
            'Z',
          ].join(' ')}
          fill="#e7c08b"
          stroke="#b9874f"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${left + tipWidth + 4} ${centerY - 1.4} H ${right - tipWidth - 4}`}
          stroke="#f6d8aa"
          strokeWidth="1.2"
          opacity="0.9"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'eraser') {
    const bodyTop = y + 3;
    const bodyHeight = 58;
    const bodyBottom = bodyTop + bodyHeight;
    const wrapperX = x;
    const wrapperWidth = width * 0.84;
    const wrapperTop = y;
    const wrapperHeight = 66;
    const labelX = wrapperX + wrapperWidth * 0.22;
    const labelWidth = wrapperWidth * 0.56;
    const labelY = y + 18;
    const labelHeight = 30;

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 73} rx={width * 0.31} ry={5.8} fill="#d7dde5" opacity="0.18" />
        <rect
          x={x}
          y={bodyTop}
          width={width}
          height={bodyHeight}
          rx="14"
          fill="#83c85d"
          stroke="#5d9b3e"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + 8} ${bodyTop + 7} H ${x + width - 8}`}
          stroke="#c8eca7"
          strokeWidth="2.3"
          opacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + 8} ${bodyBottom - 8} H ${x + width - 8}`}
          stroke="#649f42"
          strokeWidth="1.9"
          opacity="0.28"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={wrapperX}
          y={wrapperTop}
          width={wrapperWidth}
          height={wrapperHeight}
          rx="8"
          fill="#f5efdf"
          stroke="#cbbb90"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${wrapperX + wrapperWidth * 0.08} ${wrapperTop + 5} V ${wrapperTop + wrapperHeight - 5}`}
          stroke="#d7c79e"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${wrapperX + wrapperWidth - wrapperWidth * 0.08} ${wrapperTop + 5} V ${wrapperTop + wrapperHeight - 5}`}
          stroke="#d7c79e"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={labelX}
          y={labelY}
          width={labelWidth}
          height={labelHeight}
          rx="7"
          fill="#98cf6d"
          stroke="#6aa548"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={x + width / 2}
          y={labelY + 20}
          textAnchor="middle"
          fontSize={Math.min(16, Math.max(10, width * 0.054))}
          fontWeight="800"
          fill="#5a7c3d"
        >
          지우개
        </text>
      </g>
    );
  }

  if (kind === 'leaf') {
    const centerY = y + 25;
    const d = [
      `M ${left} ${centerY}`,
      `C ${x + width * 0.18} ${y + 4}, ${x + width * 0.42} ${y + 4}, ${x + width * 0.6} ${centerY - 3}`,
      `C ${x + width * 0.75} ${y + 6}, ${x + width * 0.88} ${y + 11}, ${right} ${centerY}`,
      `C ${x + width * 0.88} ${y + 39}, ${x + width * 0.75} ${y + 44}, ${x + width * 0.6} ${centerY + 3}`,
      `C ${x + width * 0.42} ${y + 46}, ${x + width * 0.18} ${y + 46}, ${left} ${centerY}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 54} rx={width * 0.28} ry={3.4} fill="#d7dde5" opacity="0.18" />
        <path d={d} fill="#9ad16a" stroke="#5d9938" strokeWidth="2.7" vectorEffect="non-scaling-stroke" />
        <path d={`M ${left + 4} ${centerY} C ${x + width * 0.34} ${centerY - 3}, ${x + width * 0.64} ${centerY - 2}, ${right - 6} ${centerY}`} fill="none" stroke="#6aa547" strokeWidth="2.1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + width * 0.3} ${centerY - 1} C ${x + width * 0.26} ${centerY - 7}, ${x + width * 0.22} ${centerY - 11}, ${x + width * 0.17} ${centerY - 14}`} fill="none" stroke="#84bb58" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + width * 0.55} ${centerY + 1} C ${x + width * 0.58} ${centerY + 7}, ${x + width * 0.64} ${centerY + 12}, ${x + width * 0.71} ${centerY + 14}`} fill="none" stroke="#84bb58" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + width * 0.58} ${centerY - 1} C ${x + width * 0.63} ${centerY - 8}, ${x + width * 0.7} ${centerY - 12}, ${x + width * 0.76} ${centerY - 15}`} fill="none" stroke="#84bb58" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke" />
      </g>
    );
  }

  if (kind === 'crayon') {
    const top = y + 5;
    const bottom = y + 53;
    const centerY = (top + bottom) / 2;
    const tipWidth = Math.max(22, width * 0.14);
    const tailBevel = Math.max(8, width * 0.035);
    const bodyStart = x + tipWidth;
    const coreStart = x + Math.max(7, tipWidth * 0.28);

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 61} rx={width * 0.25} ry={4.4} fill="#d7dde5" opacity="0.16" />
        <path
          d={`M ${x} ${centerY} L ${bodyStart} ${top} L ${bodyStart} ${bottom} Z`}
          fill="#e9cfaa"
          stroke="#bb8e58"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={[
            `M ${bodyStart} ${top}`,
            `H ${right - tailBevel}`,
            `L ${right} ${centerY}`,
            `L ${right - tailBevel} ${bottom}`,
            `H ${bodyStart}`,
            'Z',
          ].join(' ')}
          fill="#e25858"
          stroke="#b63e3e"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 8} ${top + 8} H ${right - tailBevel - 8}`}
          stroke="#ffaaaa"
          strokeWidth="2.5"
          opacity="0.78"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 8} ${bottom - 9} H ${right - tailBevel - 8}`}
          stroke="#c84848"
          strokeWidth="2"
          opacity="0.34"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 12} ${top + 4} V ${bottom - 4}`}
          stroke="#cf4a4a"
          strokeWidth="1.5"
          opacity="0.46"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 20} ${top + 3} V ${bottom - 3}`}
          stroke="#cf4a4a"
          strokeWidth="1.3"
          opacity="0.34"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${coreStart} ${centerY} L ${x} ${centerY}`}
          stroke="#7a2d2d"
          strokeWidth="2.4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'chalk') {
    const top = y + 12;
    const bottom = y + 34;
    const bevel = Math.max(8, width * 0.06);

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 41} rx={width * 0.22} ry={3} fill="#d7dde5" opacity="0.14" />
        <path
          d={[
            `M ${left + bevel} ${top}`,
            `H ${right - bevel}`,
            `L ${right} ${y + 23}`,
            `L ${right - bevel} ${bottom}`,
            `H ${left + bevel}`,
            `L ${left} ${y + 23}`,
            'Z',
          ].join(' ')}
          fill="#fbfcff"
          stroke="#cfd8e3"
          strokeWidth="2.1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${left + bevel + 4} ${top + 4} H ${right - bevel - 4}`}
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.95"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${left + bevel + 8} ${bottom - 5} H ${right - bevel - 8}`}
          stroke="#dbe4ef"
          strokeWidth="1.3"
          opacity="0.8"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'paperStrip') {
    const top = y + 11;
    const bottom = y + 33;
    const foldWidth = Math.min(12, width * 0.2);
    const d = [
      `M ${left} ${top}`,
      `H ${right - foldWidth}`,
      `L ${right} ${y + 22}`,
      `L ${right - foldWidth} ${bottom}`,
      `L ${left} ${bottom}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 41} rx={width * 0.3} ry={3.1} fill="#d7dde5" opacity="0.16" />
        <path d={d} fill="#ff93b8" stroke="#d95784" strokeWidth="2.3" vectorEffect="non-scaling-stroke" />
        <path d={`M ${left + 3} ${y + 16} H ${right - foldWidth - 3}`} stroke="#ffd0e0" strokeWidth="1.8" opacity="0.95" vectorEffect="non-scaling-stroke" />
        <path d={`M ${right - foldWidth} ${top} L ${right - foldWidth} ${bottom}`} stroke="#e96e98" strokeWidth="1.4" opacity="0.75" vectorEffect="non-scaling-stroke" />
        <path d={`M ${right - foldWidth} ${top} L ${right} ${y + 22} L ${right - foldWidth} ${bottom}`} fill="#ff74a4" opacity="0.82" />
      </g>
    );
  }

  if (kind === 'pencil') {
    const top = y + 4;
    const bottom = y + 50;
    const centerY = (top + bottom) / 2;
    const eraserWidth = Math.max(16, width * 0.17);
    const ferruleWidth = Math.max(10, width * 0.1);
    const tipWidth = Math.max(20, width * 0.16);
    const woodStart = right - tipWidth;
    const leadStart = right - Math.max(6, tipWidth * 0.3);
    const bodyWidth = width - eraserWidth - ferruleWidth - tipWidth;

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 58} rx={width * 0.28} ry={4.3} fill="#d7dde5" opacity="0.16" />
        <rect x={x} y={top} width={eraserWidth} height={bottom - top} rx="6" fill="#ee8ea5" stroke="#c96279" strokeWidth="1.9" vectorEffect="non-scaling-stroke" />
        <rect x={x + eraserWidth} y={top} width={ferruleWidth} height={bottom - top} fill="#d7dce4" stroke="#9da7b4" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + eraserWidth + ferruleWidth * 0.5} ${top + 1} V ${bottom - 1}`} stroke="#aeb6c1" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
        <rect
          x={x + eraserWidth + ferruleWidth}
          y={top}
          width={bodyWidth}
          height={bottom - top}
          fill="#f2c347"
          stroke="#c79227"
          strokeWidth="1.9"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + eraserWidth + ferruleWidth + 6} ${top + 7} H ${woodStart - 7}`}
          stroke="#ffe291"
          strokeWidth="1.9"
          opacity="0.85"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + eraserWidth + ferruleWidth + 6} ${bottom - 8} H ${woodStart - 7}`}
          stroke="#d49a23"
          strokeWidth="1.7"
          opacity="0.28"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${woodStart} ${top} L ${leadStart} ${centerY} L ${woodStart} ${bottom} Z`}
          fill="#ead0a8"
          stroke="#b98949"
          strokeWidth="1.7"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${leadStart} ${centerY} L ${right} ${centerY}`}
          stroke="#45484e"
          strokeWidth="2.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'stick') {
    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 42} rx={width * 0.26} ry={3.1} fill="#d7dde5" opacity="0.16" />
        <rect x={x} y={y + 11} width={width} height="18" rx="5" fill="#d9a067" stroke="#a86c38" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + 4} ${y + 14} H ${x + width - 4}`} stroke="#efc08b" strokeWidth="1.7" opacity="0.7" vectorEffect="non-scaling-stroke" />
        {Array.from({ length: Math.max(3, Math.floor(width / 56)) }, (_, index) => {
          const lineX = x + 16 + index * ((width - 32) / Math.max(1, Math.max(3, Math.floor(width / 56)) - 1));
          return (
            <line
              key={`stick-line-${index}`}
              x1={lineX}
              y1={y + 13}
              x2={lineX}
              y2={y + 27}
              stroke="#bc804d"
              strokeWidth="1.5"
              opacity="0.72"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </g>
    );
  }

  return (
    <g>
      <ellipse cx={x + width / 2} cy={y + 40} rx={Math.max(10, width * 0.25)} ry={3} fill="#d7dde5" opacity="0.16" />
      <rect x={x} y={y + 12} width={width} height="22" rx="4" fill="#cfd9e6" stroke="#7b8ba0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

function MeasurementProblemCard({ measurement }: { measurement: MeasurementProblemData }) {
  const millimeterWidth = 14.5;
  const leftPadding = 86;
  const rightPadding = 58;
  const rulerWidth = measurement.rulerCm * 10 * millimeterWidth;
  const svgWidth = leftPadding + rulerWidth + rightPadding;
  const svgHeight = 288;
  const rulerX = leftPadding;
  const rulerY = 166;
  const rulerHeight = 82;
  const startX = rulerX + measurement.startMm * millimeterWidth;
  const endX = startX + measurement.lengthMm * millimeterWidth;
  const objectY = 56;
  const gradientIdSuffix = `${measurement.objectKind}-${measurement.startMm}-${measurement.lengthMm}`;
  const rulerFillId = `measurement-ruler-fill-${gradientIdSuffix}`;
  const rulerHighlightId = `measurement-ruler-highlight-${gradientIdSuffix}`;
  const rulerClipId = `measurement-ruler-clip-${gradientIdSuffix}`;
  const rulerPath = [
    `M ${rulerX + 12} ${rulerY}`,
    `H ${rulerX + rulerWidth - 12}`,
    `Q ${rulerX + rulerWidth} ${rulerY} ${rulerX + rulerWidth} ${rulerY + 12}`,
    `V ${rulerY + rulerHeight - 10}`,
    `Q ${rulerX + rulerWidth} ${rulerY + rulerHeight} ${rulerX + rulerWidth - 12} ${rulerY + rulerHeight}`,
    `H ${rulerX + 12}`,
    `Q ${rulerX} ${rulerY + rulerHeight} ${rulerX} ${rulerY + rulerHeight - 10}`,
    `V ${rulerY + 12}`,
    `Q ${rulerX} ${rulerY} ${rulerX + 12} ${rulerY}`,
    'Z',
  ].join(' ');

  return (
    <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-4 text-left text-slate-900 sm:gap-5">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50/85 px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-7">
        <p className="text-[1.1rem] font-black leading-[1.5] text-slate-900 sm:text-[1.4rem] md:text-[1.85rem]">
          {measurement.title}
        </p>

        <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="block w-full" role="img" aria-label={`${measurement.objectLabel}와 자가 함께 있는 길이 재기 그림`}>
            <defs>
              <linearGradient id={rulerFillId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e4f5ff" />
                <stop offset="56%" stopColor="#d4ebfb" />
                <stop offset="100%" stopColor="#c5e1f4" />
              </linearGradient>
              <linearGradient id={rulerHighlightId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <clipPath id={rulerClipId}>
                <path d={rulerPath} />
              </clipPath>
            </defs>
            <rect x={rulerX - 30} y="26" width={rulerWidth + 60} height="96" rx="22" fill="#fbfdff" stroke="#e3f0f8" strokeWidth="1.6" />
            <line
              x1={startX}
              y1="36"
              x2={startX}
              y2={rulerY - 12}
              stroke="#ff63b3"
              strokeWidth="3.4"
              strokeDasharray="8 7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1={endX}
              y1="36"
              x2={endX}
              y2={rulerY - 12}
              stroke="#ff63b3"
              strokeWidth="3.4"
              strokeDasharray="8 7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />

            <MeasurementObjectIllustration
              kind={measurement.objectKind}
              label={measurement.objectLabel}
              x={startX}
              y={objectY}
              width={measurement.lengthMm * millimeterWidth}
            />

            <path d={rulerPath} fill={`url(#${rulerFillId})`} stroke="#6f96b3" strokeWidth="4.2" vectorEffect="non-scaling-stroke" />
            <g clipPath={`url(#${rulerClipId})`} opacity="0.52">
              {Array.from({ length: measurement.rulerCm }, (_, centimeter) => (
                <rect
                  key={`ruler-band-${centimeter}`}
                  x={rulerX + centimeter * 10 * millimeterWidth}
                  y={rulerY + 2}
                  width={10 * millimeterWidth}
                  height={rulerHeight - 8}
                  fill={centimeter % 2 === 0 ? '#d9eefc' : '#cde5f6'}
                />
              ))}
            </g>
            <path
              d={`M ${rulerX + 8} ${rulerY + 9} H ${rulerX + rulerWidth - 8}`}
              stroke={`url(#${rulerHighlightId})`}
              strokeWidth="5"
              opacity="0.95"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`M ${rulerX + 10} ${rulerY + rulerHeight - 21} H ${rulerX + rulerWidth - 10}`}
              stroke="#aac7dc"
              strokeWidth="2.4"
              opacity="0.85"
              vectorEffect="non-scaling-stroke"
            />

            {Array.from({ length: measurement.rulerCm * 10 + 1 }, (_, tickIndex) => {
              const tickX = rulerX + tickIndex * millimeterWidth;
              const isCentimeter = tickIndex % 10 === 0;
              const isHalfCentimeter = tickIndex % 5 === 0;
              const tickHeight = isCentimeter ? 40 : isHalfCentimeter ? 28 : 16;

              return (
                <line
                  key={`tick-${tickIndex}`}
                  x1={tickX}
                  y1={rulerY + 6}
                  x2={tickX}
                  y2={rulerY + 6 + tickHeight}
                  stroke="#264a67"
                  strokeWidth={isCentimeter ? 3 : isHalfCentimeter ? 2.2 : 1.55}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}

            {Array.from({ length: measurement.rulerCm + 1 }, (_, centimeter) => {
              const isFirst = centimeter === 0;
              const isLast = centimeter === measurement.rulerCm;
              const labelX = isFirst
                ? rulerX + 1
                : isLast
                  ? rulerX + centimeter * 10 * millimeterWidth - 1
                  : rulerX + centimeter * 10 * millimeterWidth;

              return (
                <text
                  key={`label-${centimeter}`}
                  x={labelX}
                  y={rulerY + rulerHeight - 12}
                  textAnchor={isFirst ? 'start' : isLast ? 'end' : 'middle'}
                  fontSize="28"
                  fontWeight="900"
                  fill="#254f73"
                  stroke="#f7fbff"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  {centimeter}
                </text>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-amber-200 bg-amber-50/85 px-4 py-4 shadow-sm sm:px-5">
          <p className="break-keep text-[1.15rem] font-black leading-[1.55] text-slate-900 sm:text-[1.45rem] md:text-[2rem]">
            {renderPromptWithHighlight(measurement.question)}
          </p>
        </div>
      </div>
    </div>
  );
}

function getClockFacePoint(cx: number, cy: number, radius: number, degrees: number) {
  const radians = (degrees - 90) * (Math.PI / 180);
  return {
    x: cx + Math.cos(radians) * radius,
    y: cy + Math.sin(radians) * radius,
  };
}

function AnalogClockFigure({
  hour,
  minute,
  second,
  palette = 'default',
  activeHand = null,
  displayMode = 'real',
  ariaLabel,
}: {
  hour: number;
  minute: number;
  second: number;
  palette?: 'default' | 'result';
  activeHand?: 'minutes' | 'seconds' | null;
  displayMode?: 'real' | 'teaching';
  ariaLabel?: string;
}) {
  const cx = 180;
  const cy = 180;
  const radius = 128;
  const minuteProgress = displayMode === 'real' ? minute + second / 60 : minute;
  const hourProgress = displayMode === 'real' ? (hour % 12) + minuteProgress / 60 : (hour % 12) + minute / 60;
  const hourDegrees = hourProgress * 30;
  const minuteDegrees = minuteProgress * 6;
  const secondDegrees = second * 6;
  const hourPoint = getClockFacePoint(cx, cy, radius * 0.47, hourDegrees);
  const minutePoint = getClockFacePoint(cx, cy, radius * 0.72, minuteDegrees);
  const secondPoint = getClockFacePoint(cx, cy, radius * 0.82, secondDegrees);
  const secondTailPoint = getClockFacePoint(cx, cy, radius * 0.18, secondDegrees + 180);
  const roundedHour = hour === 0 ? 12 : Math.floor(hour);
  const roundedMinute = Math.floor(minute);
  const roundedSecond = Math.floor(second);
  const isResultPalette = palette === 'result';
  const outerFill = isResultPalette ? '#dbeafe' : '#c8e19a';
  const innerStroke = isResultPalette ? '#bfdbfe' : '#dbe6f3';
  const majorTickColor = isResultPalette ? '#60a5fa' : '#111827';
  const minorTickColor = isResultPalette ? '#93c5fd' : '#4b5563';
  const numberColor = isResultPalette ? '#1e3a8a' : '#111827';
  const hourOpacity = activeHand === 'seconds' ? 0.78 : 1;
  const minuteOpacity = activeHand === 'seconds' ? 0.72 : 1;
  const secondOpacity = activeHand === 'minutes' ? 0.65 : 1;
  const minuteWidth = activeHand === 'minutes' ? 8.5 : 7;
  const secondWidth = activeHand === 'seconds' ? 3.2 : 2.4;
  const handHighlightColor = activeHand === 'minutes' ? '#fecaca' : activeHand === 'seconds' ? '#cbd5e1' : '#dbeafe';

  return (
    <svg
      viewBox="0 0 360 360"
      className="block w-full"
      role="img"
      aria-label={ariaLabel ?? `${roundedHour}시 ${roundedMinute}분 ${roundedSecond}초를 가리키는 시계`}
    >
      <circle cx={cx} cy={cy} r="144" fill={outerFill} />
      <circle cx={cx} cy={cy} r="130" fill="#ffffff" stroke={innerStroke} strokeWidth="2" />
      {Array.from({ length: 60 }, (_, tickIndex) => {
        const isHourTick = tickIndex % 5 === 0;
        const outer = getClockFacePoint(cx, cy, radius - 4, tickIndex * 6);
        const inner = getClockFacePoint(cx, cy, isHourTick ? radius - 18 : radius - 11, tickIndex * 6);

        return (
          <line
            key={`clock-tick-${tickIndex}`}
            x1={outer.x}
            y1={outer.y}
            x2={inner.x}
            y2={inner.y}
            stroke={isHourTick ? majorTickColor : minorTickColor}
            strokeWidth={isHourTick ? 3.4 : 1.5}
            strokeLinecap="round"
          />
        );
      })}
      {Array.from({ length: 12 }, (_, index) => {
        const value = index + 1;
        const labelPoint = getClockFacePoint(cx, cy, radius - 38, value * 30);
        return (
          <text
            key={`clock-number-${value}`}
            x={labelPoint.x}
            y={labelPoint.y + 7}
            textAnchor="middle"
            fontSize="31"
            fontWeight="900"
            fill={numberColor}
          >
            {value}
          </text>
        );
      })}
      {activeHand ? (
        <circle cx={cx} cy={cy} r="142" fill="none" stroke={handHighlightColor} strokeWidth="7" opacity="0.75" />
      ) : null}
      <line
        x1={cx}
        y1={cy}
        x2={hourPoint.x}
        y2={hourPoint.y}
        stroke="#23a34a"
        strokeWidth="10"
        strokeLinecap="round"
        opacity={hourOpacity}
      />
      <line
        x1={cx}
        y1={cy}
        x2={minutePoint.x}
        y2={minutePoint.y}
        stroke="#ef4444"
        strokeWidth={minuteWidth}
        strokeLinecap="round"
        opacity={minuteOpacity}
      />
      <line
        x1={secondTailPoint.x}
        y1={secondTailPoint.y}
        x2={secondPoint.x}
        y2={secondPoint.y}
        stroke="#1f2937"
        strokeWidth={secondWidth}
        strokeLinecap="round"
        opacity={secondOpacity}
      />
      <circle cx={cx} cy={cy} r="8.5" fill="#ffd166" stroke="#f59e0b" strokeWidth="2.2" />
      <circle cx={cx} cy={cy} r="2.8" fill="#f8fafc" />
    </svg>
  );
}

function ClockReadingProblemCard({
  clockReading,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  clockReading: ClockReadingProblemData;
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
}) {
  const fields: Array<{ key: ClockInputPart; label: string; placeholder: string }> = [
    { key: 'hours', label: '시', placeholder: '시' },
    { key: 'minutes', label: '분', placeholder: '분' },
    { key: 'seconds', label: '초', placeholder: '초' },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-4 text-left text-slate-900 sm:gap-5">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50/85 px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-7">
        <p className="text-[1.1rem] font-black leading-[1.5] text-slate-900 sm:text-[1.4rem] md:text-[1.85rem]">
          {clockReading.title}
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,18rem)] lg:items-center">
          <div className="overflow-hidden rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
            <div className="mx-auto w-full max-w-[20rem]">
              <AnalogClockFigure hour={clockReading.hour} minute={clockReading.minute} second={clockReading.second} />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50/85 px-4 py-4 shadow-sm sm:px-5">
            <div className="grid gap-2 text-sm font-bold text-slate-700 sm:text-base">
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2">
                <span className="inline-block h-3 w-3 rounded-full bg-[#23a34a]" />
                <span>짧고 굵은 초록색은 시침</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2">
                <span className="inline-block h-3 w-3 rounded-full bg-[#ef4444]" />
                <span>길고 굵은 빨간색은 분침</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2">
                <span className="inline-block h-3 w-3 rounded-full bg-[#1f2937]" />
                <span>가늘고 긴 검은색은 초침</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
          {fields.map((field) => (
            (() => {
              const isEditable = clockReading.editableParts.includes(field.key);
              const displayValue = isEditable
                ? answerValue[field.key]
                : String(getClockReadingPartValue(clockReading, field.key));

              return (
                <label
                  key={field.key}
                  className={`flex items-center justify-center gap-2 rounded-[1.5rem] border px-3 py-3 shadow-sm sm:gap-3 sm:px-4 sm:py-4 ${
                    isEditable
                      ? 'border-slate-200 bg-white'
                      : 'border-emerald-200 bg-emerald-50/80'
                  }`}
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={2}
                    value={displayValue}
                    disabled={!isEditable}
                    readOnly={!isEditable}
                    onChange={(event) => onAnswerChange(field.key, event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                        event.preventDefault();
                        onSubmit();
                      }
                    }}
                    className={`w-full min-w-0 rounded-2xl border-2 px-3 py-3 text-center text-xl font-black text-slate-900 outline-none transition sm:text-2xl ${
                      isEditable
                        ? 'border-slate-200 bg-slate-50 focus:border-sky-400 focus:bg-white'
                        : 'border-emerald-200 bg-white text-emerald-700'
                    }`}
                    placeholder={isEditable ? field.placeholder : ''}
                    aria-label={field.label}
                  />
                  <span className="shrink-0 text-2xl font-black text-slate-900 sm:text-3xl">{field.label}</span>
                </label>
              );
            })()
          ))}
        </div>
      </div>
    </div>
  );
}

function ClockResultPlaceholderFigure() {
  const cx = 180;
  const cy = 180;
  const radius = 128;

  return (
    <svg viewBox="0 0 360 360" className="block w-full" role="img" aria-label="결과 시각을 생각해 보는 시계">
      <circle cx={cx} cy={cy} r="144" fill="#dbeafe" />
      <circle cx={cx} cy={cy} r="130" fill="#ffffff" stroke="#bfdbfe" strokeWidth="3" />
      {Array.from({ length: 60 }, (_, tickIndex) => {
        const isHourTick = tickIndex % 5 === 0;
        const outer = getClockFacePoint(cx, cy, radius - 4, tickIndex * 6);
        const inner = getClockFacePoint(cx, cy, isHourTick ? radius - 18 : radius - 11, tickIndex * 6);

        return (
          <line
            key={`placeholder-tick-${tickIndex}`}
            x1={outer.x}
            y1={outer.y}
            x2={inner.x}
            y2={inner.y}
            stroke={isHourTick ? '#60a5fa' : '#93c5fd'}
            strokeWidth={isHourTick ? 3.2 : 1.5}
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="12" fill="#e0f2fe" stroke="#60a5fa" strokeWidth="3" />
      <text x={cx} y={cy + 24} textAnchor="middle" fontSize="88" fontWeight="900" fill="#60a5fa">?</text>
    </svg>
  );
}

function ClockTimeAdditionFigure({
  start,
  add,
  result,
  operation,
  playAnimationSound,
}: {
  start: TimeValue;
  add: TimeValue;
  result: TimeValue;
  operation: TimeArithmeticOperation;
  playAnimationSound?: AnimationSoundPlayer;
}) {
  const problemSignature = `${operation}-${start.hours}:${start.minutes}:${start.seconds}-${add.hours}:${add.minutes}:${add.seconds}-${result.hours}:${result.minutes}:${result.seconds}`;
  const startTotalSeconds = toTotalTimeSeconds(start);
  const minuteDeltaSeconds = add.hours * 3600 + add.minutes * 60;
  const minuteStepTargetSeconds = startTotalSeconds + (operation === '+' ? minuteDeltaSeconds : -minuteDeltaSeconds);
  const finalTargetSeconds = toTotalTimeSeconds(result);
  const animationFrameRef = useRef<number | null>(null);
  const queuedSoundTimeoutIdsRef = useRef<number[]>([]);
  const [displayClockSeconds, setDisplayClockSeconds] = useState(startTotalSeconds);
  const [animationStep, setAnimationStep] = useState<'idle' | 'minutesDone' | 'secondsDone'>('idle');
  const [activeHand, setActiveHand] = useState<'minutes' | 'seconds' | null>(null);
  const [isResultClockVisible, setIsResultClockVisible] = useState(false);

  const clearQueuedAnimationSounds = () => {
    queuedSoundTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    queuedSoundTimeoutIdsRef.current = [];
  };

  const stopClockAnimation = () => {
    clearQueuedAnimationSounds();
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const resetClockAnimation = () => {
    stopClockAnimation();
    setDisplayClockSeconds(startTotalSeconds);
    setAnimationStep('idle');
    setActiveHand(null);
    setIsResultClockVisible(false);
  };

  useEffect(() => {
    resetClockAnimation();

    return () => {
      stopClockAnimation();
    };
  }, [problemSignature]);

  useEffect(() => clearQueuedAnimationSounds, []);

  const animateClockHands = (
    targetSeconds: number,
    hand: 'minutes' | 'seconds',
    nextStep: 'minutesDone' | 'secondsDone',
  ) => {
    stopClockAnimation();
    setIsResultClockVisible(true);
    setActiveHand(hand);

    const initialSeconds = displayClockSeconds;
    const duration = hand === 'minutes' ? 1200 : 900;
    let animationStartTime: number | null = null;
    const tickSchedule =
      hand === 'minutes'
        ? [
            { delay: 0, gainMultiplier: 0.9, detune: operation === '+' ? -120 : -180 },
            { delay: 260, gainMultiplier: 0.82, detune: operation === '+' ? -80 : -140 },
            { delay: 560, gainMultiplier: 0.76, detune: operation === '+' ? -40 : -90 },
            { delay: 860, gainMultiplier: 0.72, detune: operation === '+' ? 0 : -40 },
          ]
        : [
            { delay: 0, gainMultiplier: 0.82, detune: operation === '+' ? 60 : 10 },
            { delay: 180, gainMultiplier: 0.78, detune: operation === '+' ? 100 : 50 },
            { delay: 380, gainMultiplier: 0.74, detune: operation === '+' ? 140 : 90 },
            { delay: 600, gainMultiplier: 0.7, detune: operation === '+' ? 180 : 130 },
          ];

    queuedSoundTimeoutIdsRef.current = tickSchedule.map((entry) =>
      window.setTimeout(() => {
        playAnimationSound?.('tick', {
          gainMultiplier: entry.gainMultiplier,
          detune: entry.detune,
          noisePlaybackRateMultiplier: hand === 'minutes' ? 0.98 : 1.04,
        });
      }, entry.delay),
    );

    const stepAnimation = (timestamp: number) => {
      if (animationStartTime === null) {
        animationStartTime = timestamp;
      }

      const progress = clamp((timestamp - animationStartTime) / duration, 0, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextClockSeconds = initialSeconds + (targetSeconds - initialSeconds) * easedProgress;
      setDisplayClockSeconds(nextClockSeconds);

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(stepAnimation);
        return;
      }

      animationFrameRef.current = null;
      setDisplayClockSeconds(targetSeconds);
      setActiveHand(null);
      setAnimationStep(nextStep);
    };

    animationFrameRef.current = window.requestAnimationFrame(stepAnimation);
  };

  const animatedClock = splitAnimatedClockSeconds(displayClockSeconds);
  const isAnimating = activeHand !== null;
  const canAnimateMinutes = !isAnimating && animationStep === 'idle';
  const canAnimateSeconds = !isAnimating && animationStep === 'minutesDone';
  const hasCompletedAllSteps = animationStep === 'secondsDone';
  const totalAddText = formatDuration(add.hours, add.minutes, add.seconds);
  const operationLabel = operation === '+' ? '더할 시간' : '뺄 시간';
  return (
    <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_minmax(16.5rem,18rem)_minmax(0,1fr)] xl:items-center">
      <div className="rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
        <div className="mx-auto w-full max-w-[18rem]">
          <AnalogClockFigure hour={start.hours} minute={start.minutes} second={start.seconds} displayMode="teaching" />
        </div>
        <div className="mt-3 px-2 text-center text-slate-900">
          <div className="text-[0.78rem] font-black tracking-[0.08em] text-slate-500 sm:text-[0.84rem]">시작 시각</div>
          <div className="mt-1 text-[clamp(1rem,1.4vw,1.18rem)] font-black leading-tight break-keep">
            {formatClockTime(start.hours, start.minutes, start.seconds)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5">
        <div className="w-full max-w-[17.5rem] rounded-[1.35rem] border-2 border-sky-300 bg-gradient-to-b from-sky-50 to-white px-4 py-2.5 text-center text-[#0f172a] shadow-[0_10px_24px_rgba(14,165,233,0.14)]">
          <div className="text-[0.76rem] font-black tracking-[0.08em] text-sky-700 sm:text-[0.82rem]">
            {operationLabel}
          </div>
          <div className="mt-1 text-[1.2rem] font-black leading-none text-[#0f172a] sm:text-[1.4rem]">
            {totalAddText}
          </div>
        </div>
        <div className="grid w-full max-w-[16.5rem] grid-cols-2 gap-2">
        <button
          type="button"
          disabled={!canAnimateMinutes}
          onClick={() => animateClockHands(minuteStepTargetSeconds, 'minutes', 'minutesDone')}
          className={`flex min-w-0 items-center justify-between gap-1.5 rounded-[1.15rem] border px-2.5 py-2 text-left shadow-sm transition ${
            canAnimateMinutes
              ? 'border-rose-300 bg-rose-50 text-rose-900 hover:-translate-y-0.5 hover:bg-rose-100'
            : animationStep !== 'idle'
              ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
              : 'cursor-not-allowed border-[#e2e8f0] bg-[#f1f5f9] text-[#64748b]'
          }`}
        >
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <div className="min-w-0">
              <div className="text-[0.74rem] font-black sm:text-[0.8rem]">분침</div>
              <div className="mt-0.5 text-[1.05rem] font-black leading-none sm:text-[1.15rem]">{operation} {add.minutes}분</div>
            </div>
          </div>
          {animationStep === 'idle' ? <Play className="h-3.5 w-3.5 shrink-0" /> : <Check className="h-3.5 w-3.5 shrink-0" />}
        </button>

        <button
          type="button"
          disabled={!canAnimateSeconds}
          onClick={() => animateClockHands(finalTargetSeconds, 'seconds', 'secondsDone')}
          className={`flex min-w-0 items-center justify-between gap-1.5 rounded-[1.15rem] border px-2.5 py-2 text-left shadow-sm transition ${
            canAnimateSeconds
              ? 'border-[#94a3b8] bg-[#f1f5f9] text-[#0f172a] hover:-translate-y-0.5 hover:bg-[#e2e8f0]'
            : hasCompletedAllSteps
              ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
              : 'cursor-not-allowed border-[#e2e8f0] bg-[#f1f5f9] text-[#64748b]'
          }`}
        >
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1f2937]" />
            <div className="min-w-0">
              <div className="text-[0.74rem] font-black sm:text-[0.8rem]">초침</div>
              <div className="mt-0.5 text-[1.05rem] font-black leading-none sm:text-[1.15rem]">{operation} {add.seconds}초</div>
            </div>
          </div>
          {hasCompletedAllSteps ? <Check className="h-3.5 w-3.5 shrink-0" /> : <Play className="h-3.5 w-3.5 shrink-0" />}
        </button>

        </div>

        <button
          type="button"
          onClick={resetClockAnimation}
          disabled={!isResultClockVisible && !isAnimating}
          className={`inline-flex w-full max-w-[16.5rem] items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-black shadow-sm transition ${
            !isResultClockVisible && !isAnimating
              ? 'cursor-not-allowed border-slate-200 bg-white text-slate-300'
              : 'border-sky-300 bg-sky-50 text-sky-800 hover:-translate-y-0.5 hover:bg-sky-100'
          }`}
        >
          <RotateCcw className="h-4 w-4" />
          다시 보기
        </button>

      </div>

      <div className="rounded-[1.75rem] border border-dashed border-sky-300 bg-sky-50/60 p-3 shadow-[inset_0_2px_14px_rgba(125,211,252,0.1)] sm:p-4">
        <div className="mx-auto w-full max-w-[18rem]">
          <div className="relative">
            <AnalogClockFigure
              hour={animatedClock.hours}
              minute={animatedClock.minutes}
              second={animatedClock.seconds}
              palette="result"
              activeHand={activeHand}
              displayMode="teaching"
              ariaLabel="버튼을 눌러 결과 시각을 확인하는 시계"
            />
            <AnimatePresence>
              {!isResultClockVisible ? (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <ClockResultPlaceholderFigure />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-3 text-center text-base font-black text-sky-800 sm:text-lg">결과 시각을 써 보세요.</p>
      </div>
    </div>
  );
}

function TimeAdditionBarModelFigure({
  left,
  right,
  result,
  playAnimationSound,
}: {
  left: TimeValue;
  right: TimeValue;
  result: TimeValue;
  playAnimationSound?: AnimationSoundPlayer;
}) {
  const blockSeconds = 10;
  const leftBlocks = Math.floor(toTotalTimeSeconds(left) / blockSeconds);
  const rightBlocks = Math.floor(toTotalTimeSeconds(right) / blockSeconds);
  const totalBlocks = Math.floor(toTotalTimeSeconds(result) / blockSeconds);
  const maxBlocks = Math.max(Math.ceil((totalBlocks + 3) / 6) * 6, 24);
  const blockWidth = maxBlocks > 48 ? 9 : maxBlocks > 36 ? 11 : 13;
  const blockGap = 2;
  const blockHeight = 28;
  const metaX = 8;
  const metaWidth = 126;
  const metaGap = 18;
  const leftPadding = metaX + metaWidth + metaGap;
  const topScaleY = 26;
  const rowStartY = 50;
  const rowGap = 72;
  const totalRowY = rowStartY + rowGap * 2;
  const blockStep = blockWidth + blockGap;
  const chartWidth = maxBlocks * blockWidth + (maxBlocks - 1) * blockGap;
  const width = leftPadding + chartWidth + 18;
  const height = 236;
  const scaleMinutes = maxBlocks / 6;
  const problemSignature = `${left.hours}:${left.minutes}:${left.seconds}-${right.hours}:${right.minutes}:${right.seconds}-${result.hours}:${result.minutes}:${result.seconds}`;
  const [mergeState, setMergeState] = useState<'idle' | 'merging' | 'merged'>('idle');
  const queuedSoundTimeoutIdsRef = useRef<number[]>([]);
  const rows = [
    {
      key: 'left',
      label: '처음 시간',
      valueText: formatDuration(0, left.minutes, left.seconds),
      blocks: leftBlocks,
      y: rowStartY,
      fill: '#f4e2ff',
      stroke: '#9b5cf6',
      text: '#6d28d9',
      glow: 'rgba(192, 132, 252, 0.35)',
      accent: '#fcfaff',
    },
    {
      key: 'right',
      label: '더할 시간',
      valueText: formatDuration(0, right.minutes, right.seconds),
      blocks: rightBlocks,
      y: rowStartY + rowGap,
      fill: '#fee9b8',
      stroke: '#f59e0b',
      text: '#9a3412',
      glow: 'rgba(251, 191, 36, 0.32)',
      accent: '#fffaf0',
    },
    {
      key: 'total',
      label: '합한 시간',
      valueText: formatDuration(0, result.minutes, result.seconds),
      blocks: totalBlocks,
      y: rowStartY + rowGap * 2,
      fill: '#d8ecff',
      stroke: '#0ea5e9',
      text: '#0f766e',
      glow: 'rgba(14, 165, 233, 0.32)',
      accent: '#f7fbff',
    },
  ] as const;

  const clearQueuedAnimationSounds = () => {
    queuedSoundTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    queuedSoundTimeoutIdsRef.current = [];
  };

  useEffect(() => {
    clearQueuedAnimationSounds();
    setMergeState('idle');
  }, [problemSignature]);

  useEffect(() => clearQueuedAnimationSounds, []);

  useEffect(() => {
    if (mergeState !== 'merging') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setMergeState('merged');
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [mergeState, problemSignature]);

  const getBlockX = (blockIndex: number) => leftPadding + blockIndex * blockStep;
  const getMinuteBoundaryX = (minuteIndex: number) =>
    minuteIndex === 0 ? leftPadding : leftPadding + minuteIndex * 6 * blockStep - blockGap;
  const getSegmentWidth = (blocks: number) =>
    blocks > 0 ? blocks * blockWidth + Math.max(0, blocks - 1) * blockGap : 0;
  const getSegmentEndX = (blocks: number) => (blocks > 0 ? leftPadding + blocks * blockStep - blockGap : leftPadding);
  const leftSegmentWidth = getSegmentWidth(leftBlocks);
  const rightSegmentWidth = getSegmentWidth(rightBlocks);
  const totalSegmentWidth = getSegmentWidth(totalBlocks);
  const totalEndX = getSegmentEndX(totalBlocks);
  const totalMarkerX = totalEndX + blockGap / 2;
  const leftFadeOpacity = mergeState === 'idle' ? 1 : mergeState === 'merging' ? 0.28 : 0.16;
  const rightFadeOpacity = mergeState === 'idle' ? 1 : mergeState === 'merging' ? 0.28 : 0.16;
  const totalTrackEmphasis = mergeState === 'idle' ? 0.7 : 1;
  const connectorLeft = `M ${leftPadding + leftSegmentWidth * 0.5} ${rowStartY + blockHeight * 0.5} C ${leftPadding + leftSegmentWidth * 0.56} ${rowStartY + 28}, ${leftPadding + leftSegmentWidth * 0.5} ${totalRowY - 26}, ${leftPadding + leftSegmentWidth * 0.5} ${totalRowY + blockHeight * 0.5}`;
  const connectorRight = `M ${leftPadding + rightSegmentWidth * 0.5} ${rowStartY + rowGap + blockHeight * 0.5} C ${leftPadding + rightSegmentWidth * 0.6} ${rowStartY + rowGap + 26}, ${getBlockX(leftBlocks) + rightSegmentWidth * 0.56} ${totalRowY - 24}, ${getBlockX(leftBlocks) + rightSegmentWidth * 0.5} ${totalRowY + blockHeight * 0.5}`;

  const renderFilledCells = (row: (typeof rows)[number], opacity: number) =>
    Array.from({ length: maxBlocks }, (_, blockIndex) => {
      let fill = '#ffffff';
      let stroke = '#d7e3f0';
      let strokeWidth = 1;

      if (row.key === 'left' && blockIndex < leftBlocks) {
        fill = rows[0].fill;
        stroke = rows[0].stroke;
        strokeWidth = 1.3;
      }

      if (row.key === 'right' && blockIndex < rightBlocks) {
        fill = rows[1].fill;
        stroke = rows[1].stroke;
        strokeWidth = 1.3;
      }

      if (row.key === 'total' && mergeState === 'merged' && blockIndex < totalBlocks) {
        const sourceRow = blockIndex < leftBlocks ? rows[0] : rows[1];
        fill = sourceRow.fill;
        stroke = sourceRow.stroke;
        strokeWidth = 1.3;
      }

      const isFilled = fill !== '#ffffff';

      return (
        <rect
          key={`${row.key}-${blockIndex}`}
          x={getBlockX(blockIndex)}
          y={row.y}
          width={blockWidth}
          height={blockHeight}
          rx="5"
          fill={isFilled ? fill : '#fbfdff'}
          fillOpacity={isFilled ? opacity : 0.98}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    });

  const renderMovingSegmentCells = (blocks: number, fill: string, stroke: string) =>
    Array.from({ length: blocks }, (_, blockIndex) => (
      <rect
        key={`moving-segment-${fill}-${blockIndex}`}
        x={blockIndex * blockStep}
        y={0}
        width={blockWidth}
        height={blockHeight}
        rx="8"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
      />
    ));

  return (
    <div className="rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(148,163,184,0.14)] sm:p-5">
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            if (mergeState === 'idle') {
              clearQueuedAnimationSounds();
              playAnimationSound?.('hintStep', { gainMultiplier: 0.88, detune: 10 });
              queuedSoundTimeoutIdsRef.current = [
                window.setTimeout(() => {
                  playAnimationSound?.('hintCarry', { gainMultiplier: 0.96, detune: 26 });
                }, 180),
                window.setTimeout(() => {
                  playAnimationSound?.('hintResolve', { gainMultiplier: 1.02, detune: 42 });
                }, 820),
              ];
              setMergeState('merging');
            }
          }}
          disabled={mergeState !== 'idle'}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            mergeState === 'idle'
              ? 'border border-sky-500 bg-sky-500 text-white hover:-translate-y-0.5 hover:bg-sky-600'
              : 'cursor-default border border-slate-200 bg-slate-100 text-slate-400'
          }`}
        >
          <Play className="h-4 w-4" />
          합쳐 보기
        </button>
        <button
          type="button"
          onClick={() => {
            clearQueuedAnimationSounds();
            setMergeState('idle');
          }}
          disabled={mergeState === 'idle'}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            mergeState === 'idle'
              ? 'cursor-default border-slate-200 bg-white text-slate-300'
              : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:-translate-y-0.5 hover:bg-emerald-100'
          }`}
        >
          <RotateCcw className="h-4 w-4" />
          다시 보기
        </button>
      </div>

      <div className="mt-4 overflow-x-auto pb-2">
        <div style={{ minWidth: `${Math.max(width, 620)}px` }}>
          <svg viewBox={`0 0 ${width} ${height}`} className="block w-full" role="img" aria-label="띠모형으로 표현한 시간 덧셈">
            <defs>
              <filter id="time-bar-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.18" />
              </filter>
              <linearGradient id="merge-destination-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(14,165,233,0.04)" />
                <stop offset="50%" stopColor="rgba(14,165,233,0.18)" />
                <stop offset="100%" stopColor="rgba(14,165,233,0.04)" />
              </linearGradient>
            </defs>

            <line
              x1={leftPadding}
              y1={topScaleY + 4}
              x2={leftPadding + chartWidth - blockGap}
              y2={topScaleY + 4}
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />

            {Array.from({ length: scaleMinutes + 1 }, (_, minuteIndex) => {
              const x = getMinuteBoundaryX(minuteIndex);
              return (
                <g key={`bar-scale-${minuteIndex}`}>
                  <text x={x} y={topScaleY} textAnchor="middle" fontSize="14" fontWeight="900" fill="#475569">
                    {minuteIndex}
                  </text>
                  <line
                    x1={x}
                    y1={rowStartY - 8}
                    x2={x}
                    y2={rowStartY + rowGap * 2 + blockHeight + 6}
                    stroke="#94a3b8"
                    strokeWidth="1.15"
                    strokeDasharray="4 7"
                    opacity="0.72"
                  />
                </g>
              );
            })}
            <text
              x={leftPadding + chartWidth - blockGap + 18}
              y={topScaleY}
              textAnchor="start"
              fontSize="14"
              fontWeight="900"
              fill="#64748b"
            >
              분
            </text>

            {rows.map((row) => {
              const isTotalRow = row.key === 'total';
              const labelOpacity = !isTotalRow
                ? row.key === 'left'
                  ? leftFadeOpacity
                  : rightFadeOpacity
                : 1;
              const totalGlow = isTotalRow && mergeState !== 'idle';
              const showValueText = row.key !== 'total';
              const visibleBlocks = isTotalRow ? (mergeState === 'merged' ? totalBlocks : 0) : row.blocks;
              const segmentWidth = getSegmentWidth(visibleBlocks);
              const segmentTint =
                row.key === 'left'
                  ? 'rgba(168,85,247,0.12)'
                  : row.key === 'right'
                    ? 'rgba(245,158,11,0.12)'
                    : 'rgba(14,165,233,0.14)';

              return (
                <motion.g
                  key={row.key}
                  animate={{
                    opacity: labelOpacity,
                    scale: totalGlow && mergeState === 'merged' ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <circle cx={metaX + 8} cy={showValueText ? row.y + 2 : row.y + 14} r="5" fill={row.stroke} />
                  <text
                    x={metaX + 20}
                    y={showValueText ? row.y + 7 : row.y + 19}
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="900"
                    fill={row.text}
                  >
                    {row.label}
                  </text>

                  {showValueText ? (
                    <>
                      <rect
                        x={metaX + 18}
                        y={row.y + 16}
                        width={metaWidth - 18}
                        height={28}
                        rx="14"
                        fill="#ffffff"
                        stroke={row.stroke}
                        strokeOpacity="0.28"
                        strokeWidth="1.4"
                      />
                      <text
                        x={metaX + 18 + (metaWidth - 18) / 2}
                        y={row.y + 35}
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="900"
                        fill={row.text}
                      >
                        {row.valueText}
                      </text>
                    </>
                  ) : null}

                  <rect
                    x={leftPadding - 8}
                    y={row.y - 6}
                    width={chartWidth + 16}
                    height={blockHeight + 12}
                    rx="18"
                    fill={row.accent}
                    stroke={isTotalRow && mergeState !== 'idle' ? row.stroke : '#dbe6f2'}
                    strokeWidth={isTotalRow && mergeState !== 'idle' ? 2 : 1.2}
                    opacity={isTotalRow ? totalTrackEmphasis : 0.96}
                  />
                  {segmentWidth > 0 ? (
                    <rect
                      x={leftPadding - 2}
                      y={row.y - 2}
                      width={segmentWidth + 4}
                      height={blockHeight + 4}
                      rx="14"
                      fill={segmentTint}
                      opacity={isTotalRow ? (mergeState === 'merged' ? 0.58 : 0) : 0.62}
                    />
                  ) : null}
                  {isTotalRow && mergeState === 'merging' ? (
                    <motion.rect
                      x={leftPadding - 2}
                      y={row.y - 2}
                      width={Math.max(totalSegmentWidth + 4, 0)}
                      height={blockHeight + 4}
                      rx="16"
                      fill="url(#merge-destination-glow)"
                      initial={{ opacity: 0.18, scaleX: 0.75, transformOrigin: `${leftPadding}px ${row.y}px` }}
                      animate={{ opacity: 0.46, scaleX: 1 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  ) : null}
                  {renderFilledCells(
                    row,
                    row.key === 'left' ? leftFadeOpacity : row.key === 'right' ? rightFadeOpacity : 1,
                  )}
                </motion.g>
              );
            })}

            <AnimatePresence>
              {mergeState === 'merged' && totalBlocks > 0 ? (
                <motion.g
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                  <rect
                    x={totalEndX - 0.5}
                    y={totalRowY - 4}
                    width={blockGap + 1}
                    height={blockHeight + 8}
                    rx="2"
                    fill="#ffffff"
                    stroke={rows[2].stroke}
                    strokeWidth="1"
                  />
                  <line
                    x1={totalMarkerX}
                    y1={totalRowY - 10}
                    x2={totalMarkerX}
                    y2={totalRowY + blockHeight + 8}
                    stroke={rows[2].stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={totalMarkerX}
                    cy={totalRowY - 14}
                    r="5"
                    fill="#ffffff"
                    stroke={rows[2].stroke}
                    strokeWidth="1.6"
                  />
                  <circle cx={totalMarkerX} cy={totalRowY - 14} r="2" fill={rows[2].stroke} />
                </motion.g>
              ) : null}
            </AnimatePresence>

            <AnimatePresence>
              {mergeState === 'merging' && (
                <g key={`merge-run-${problemSignature}`}>
                  <motion.path
                    d={connectorLeft}
                    fill="none"
                    stroke={rows[0].stroke}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.35 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.46, ease: 'easeOut' }}
                  />
                  <motion.path
                    d={connectorRight}
                    fill="none"
                    stroke={rows[1].stroke}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.35 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.46, delay: 0.16, ease: 'easeOut' }}
                  />
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0.95 }}
                    animate={{ x: 0, y: totalRowY - rowStartY, opacity: 0.98 }}
                    exit={{ opacity: 0 }}
                    style={{ filter: `drop-shadow(0 8px 14px ${rows[0].glow})` }}
                    transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY})`}>
                      {renderMovingSegmentCells(leftBlocks, rows[0].fill, rows[0].stroke)}
                    </g>
                  </motion.g>
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0.95 }}
                    animate={{
                      x: getBlockX(leftBlocks) - leftPadding,
                      y: totalRowY - (rowStartY + rowGap),
                      opacity: 0.98,
                    }}
                    exit={{ opacity: 0 }}
                    style={{ filter: `drop-shadow(0 8px 14px ${rows[1].glow})` }}
                    transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY + rowGap})`}>
                      {renderMovingSegmentCells(rightBlocks, rows[1].fill, rows[1].stroke)}
                    </g>
                  </motion.g>
                </g>
              )}
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeSubtractionBarModelFigure({
  left,
  right,
  result,
  playAnimationSound,
}: {
  left: TimeValue;
  right: TimeValue;
  result: TimeValue;
  playAnimationSound?: AnimationSoundPlayer;
}) {
  const blockSeconds = 10;
  const leftBlocks = Math.floor(toTotalTimeSeconds(left) / blockSeconds);
  const rightBlocks = Math.floor(toTotalTimeSeconds(right) / blockSeconds);
  const resultBlocks = Math.floor(toTotalTimeSeconds(result) / blockSeconds);
  const maxBlocks = Math.max(Math.ceil((leftBlocks + 3) / 6) * 6, 24);
  const blockWidth = maxBlocks > 48 ? 9 : maxBlocks > 36 ? 11 : 13;
  const blockGap = 2;
  const blockHeight = 28;
  const metaX = 8;
  const metaWidth = 126;
  const metaGap = 18;
  const leftPadding = metaX + metaWidth + metaGap;
  const topScaleY = 26;
  const rowStartY = 50;
  const rowGap = 72;
  const resultRowY = rowStartY + rowGap * 2;
  const blockStep = blockWidth + blockGap;
  const chartWidth = maxBlocks * blockWidth + (maxBlocks - 1) * blockGap;
  const width = leftPadding + chartWidth + 18;
  const height = 236;
  const scaleMinutes = maxBlocks / 6;
  const problemSignature = `${left.hours}:${left.minutes}:${left.seconds}-${right.hours}:${right.minutes}:${right.seconds}-${result.hours}:${result.minutes}:${result.seconds}`;
  const hatchPatternId = `time-subtraction-hatch-${problemSignature.replace(/[^a-zA-Z0-9]+/g, '-')}`;
  const [subtractionState, setSubtractionState] = useState<'idle' | 'subtracting' | 'subtracted'>('idle');
  const queuedSoundTimeoutIdsRef = useRef<number[]>([]);

  const clearQueuedAnimationSounds = () => {
    queuedSoundTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    queuedSoundTimeoutIdsRef.current = [];
  };

  useEffect(() => {
    clearQueuedAnimationSounds();
    setSubtractionState('idle');
  }, [problemSignature]);

  useEffect(() => clearQueuedAnimationSounds, []);

  useEffect(() => {
    if (subtractionState !== 'subtracting') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSubtractionState('subtracted');
    }, 1800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [subtractionState, problemSignature]);

  const rows = [
    {
      key: 'left',
      label: '처음 시간',
      valueText: formatDuration(0, left.minutes, left.seconds),
      blocks: leftBlocks,
      fill: '#f4e2ff',
      stroke: '#9b5cf6',
      text: '#6d28d9',
      accent: '#fcfaff',
      y: rowStartY,
    },
    {
      key: 'right',
      label: '뺄 시간',
      valueText: formatDuration(0, right.minutes, right.seconds),
      blocks: rightBlocks,
      fill: '#fee9b8',
      stroke: '#f59e0b',
      text: '#8b5c14',
      accent: '#fffaf0',
      y: rowStartY + rowGap,
    },
    {
      key: 'result',
      label: '남은 시간',
      valueText: '',
      blocks: resultBlocks,
      fill: '#d8ecff',
      stroke: '#0ea5e9',
      text: '#0f766e',
      accent: '#f7fbff',
      y: resultRowY,
    },
  ] as const;

  const getBlockX = (blockIndex: number) => leftPadding + blockIndex * blockStep;
  const getMinuteBoundaryX = (minuteIndex: number) =>
    minuteIndex === 0 ? leftPadding : leftPadding + minuteIndex * 6 * blockStep - blockGap;
  const getSegmentWidth = (blocks: number) =>
    blocks > 0 ? blocks * blockWidth + Math.max(0, blocks - 1) * blockGap : 0;
  const resultBoundaryX = resultBlocks > 0 ? getBlockX(resultBlocks) - blockGap / 2 : leftPadding;
  const removalSegmentStartX = getBlockX(resultBlocks);
  const removalSegmentWidth = getSegmentWidth(rightBlocks);
  const removalSegmentEndX = removalSegmentStartX + removalSegmentWidth;
  const bracketY = rowStartY + blockHeight + 12;
  const bracketLabelWidth = Math.min(104, Math.max(72, removalSegmentWidth * 0.48));
  const bracketLabelHalf = bracketLabelWidth / 2;
  const bracketLabelX = Math.min(
    leftPadding + chartWidth - blockGap - bracketLabelHalf,
    Math.max(leftPadding + bracketLabelHalf, removalSegmentStartX + removalSegmentWidth / 2),
  );
  const movingRemovalSegmentOffsetX = removalSegmentStartX - leftPadding;
  const movingRemovalSegmentOffsetY = rowStartY - (rowStartY + rowGap);
  const movingResultSegmentOffsetY = resultRowY - rowStartY;
  const smoothEase: [number, number, number, number] = [0.2, 0.78, 0.24, 1];

  const renderFilledCells = (row: (typeof rows)[number]) =>
    Array.from({ length: maxBlocks }, (_, blockIndex) => {
      let fill = '#fbfdff';
      let stroke = '#d7e3f0';
      let strokeWidth = 1;
      let fillOpacity = 1;
      const shouldFill =
        row.key === 'left'
          ? blockIndex < leftBlocks
          : row.key === 'right'
            ? blockIndex < rightBlocks
            : subtractionState === 'subtracted' && blockIndex < resultBlocks;

      if (shouldFill) {
        fill = row.fill;
        stroke = row.stroke;
        strokeWidth = 1.3;

        if (row.key === 'right' && subtractionState === 'subtracting') {
          fillOpacity = 0.26;
        }
      }

      return (
        <rect
          key={`${row.key}-${blockIndex}`}
          x={getBlockX(blockIndex)}
          y={row.y}
          width={blockWidth}
          height={blockHeight}
          rx="5"
          fill={fill}
          fillOpacity={fillOpacity}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    });

  const renderMovingSegmentCells = (blocks: number, fill: string, stroke: string) =>
    Array.from({ length: blocks }, (_, blockIndex) => (
      <rect
        key={`moving-segment-${fill}-${blockIndex}`}
        x={blockIndex * blockStep}
        y={0}
        width={blockWidth}
        height={blockHeight}
        rx="8"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
      />
    ));

  return (
    <div className="rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(148,163,184,0.14)] sm:p-5">
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            if (subtractionState === 'idle') {
              clearQueuedAnimationSounds();
              playAnimationSound?.('hintBorrow', { gainMultiplier: 0.94, detune: -18 });
              queuedSoundTimeoutIdsRef.current = [
                window.setTimeout(() => {
                  playAnimationSound?.('hintStep', { gainMultiplier: 0.82, detune: -42 });
                }, 680),
                window.setTimeout(() => {
                  playAnimationSound?.('hintResolve', { gainMultiplier: 0.96, detune: -10 });
                }, 1480),
              ];
              setSubtractionState('subtracting');
            }
          }}
          disabled={subtractionState !== 'idle'}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            subtractionState !== 'idle'
              ? 'cursor-default border border-slate-200 bg-slate-100 text-slate-400'
              : 'border border-sky-500 bg-sky-500 text-white hover:-translate-y-0.5 hover:bg-sky-600'
          }`}
        >
          <Play className="h-4 w-4" />
          남은 시간 보기
        </button>
        <button
          type="button"
          onClick={() => {
            clearQueuedAnimationSounds();
            setSubtractionState('idle');
          }}
          disabled={subtractionState === 'idle'}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            subtractionState === 'idle'
              ? 'cursor-default border-slate-200 bg-white text-slate-300'
              : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:-translate-y-0.5 hover:bg-emerald-100'
          }`}
        >
          <RotateCcw className="h-4 w-4" />
          다시 보기
        </button>
      </div>

      <div className="mt-4 overflow-x-auto pb-2">
        <div style={{ minWidth: `${Math.max(width, 620)}px` }}>
          <svg viewBox={`0 0 ${width} ${height}`} className="block w-full" role="img" aria-label="띠모형으로 표현한 시간 뺄셈">
            <defs>
              <pattern id={hatchPatternId} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
                <rect width="12" height="12" fill="#ffeaf2" />
                <line x1="0" y1="0" x2="0" y2="12" stroke="#ff5a95" strokeWidth="3" />
                <line x1="6" y1="0" x2="6" y2="12" stroke="#ff7aa9" strokeWidth="2" opacity="0.92" />
              </pattern>
            </defs>
            <line
              x1={leftPadding}
              y1={topScaleY + 4}
              x2={leftPadding + chartWidth - blockGap}
              y2={topScaleY + 4}
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />

            {Array.from({ length: scaleMinutes + 1 }, (_, minuteIndex) => {
              const x = getMinuteBoundaryX(minuteIndex);
              return (
                <g key={`time-subtraction-bar-scale-${minuteIndex}`}>
                  <text x={x} y={topScaleY} textAnchor="middle" fontSize="14" fontWeight="900" fill="#475569">
                    {minuteIndex}
                  </text>
                  <line
                    x1={x}
                    y1={rowStartY - 8}
                    x2={x}
                    y2={resultRowY + blockHeight + 6}
                    stroke="#94a3b8"
                    strokeWidth="1.15"
                    strokeDasharray="4 7"
                    opacity="0.72"
                  />
                </g>
              );
            })}
            <text
              x={leftPadding + chartWidth - blockGap + 18}
              y={topScaleY}
              textAnchor="start"
              fontSize="14"
              fontWeight="900"
              fill="#64748b"
            >
              분
            </text>

            {rows.map((row) => (
              <g key={row.key}>
                <rect
                  x={metaX}
                  y={row.y - 10}
                  width={metaWidth}
                  height={blockHeight + 20}
                  rx="18"
                  fill={row.accent}
                  stroke={row.stroke}
                  strokeWidth="1.4"
                />
                {row.valueText ? (
                  <>
                    <text x={metaX + 16} y={row.y + 10} textAnchor="start" fontSize="18" fontWeight="900" fill={row.text}>
                      {row.label}
                    </text>
                    <text x={metaX + 16} y={row.y + 29} textAnchor="start" fontSize="15" fontWeight="800" fill={row.text}>
                      {row.valueText}
                    </text>
                  </>
                ) : (
                  <text
                    x={metaX + 16}
                    y={row.y + 14}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize="18"
                    fontWeight="900"
                    fill={row.text}
                  >
                    {row.label}
                  </text>
                )}
                <rect
                  x={leftPadding - 8}
                  y={row.y - 6}
                  width={chartWidth + 16}
                  height={blockHeight + 12}
                  rx="18"
                  fill={row.accent}
                  stroke="#dbe6f2"
                  strokeWidth="1.2"
                />
                {renderFilledCells(row)}
              </g>
            ))}

            <AnimatePresence>
              {subtractionState === 'subtracting' && rightBlocks > 0 ? (
                <motion.g key={`subtracting-group-${problemSignature}`} exit={{ opacity: 0 }} transition={{ duration: 0.24 }}>
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0.96 }}
                    animate={{ x: movingRemovalSegmentOffsetX, y: movingRemovalSegmentOffsetY, opacity: 1 }}
                    transition={{ duration: 0.58, ease: smoothEase }}
                    style={{ filter: 'drop-shadow(0 8px 14px rgba(245, 158, 11, 0.22))' }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY + rowGap})`}>
                      {renderMovingSegmentCells(rightBlocks, rows[1].fill, rows[1].stroke)}
                    </g>
                  </motion.g>
                  <motion.rect
                    x={removalSegmentStartX}
                    y={rowStartY}
                    width={removalSegmentWidth}
                    height={blockHeight}
                    rx="9"
                    fill="#ffeaf2"
                    stroke="#ff5a95"
                    strokeWidth="1.2"
                    initial={{ opacity: 0, scaleX: 0.2, transformOrigin: `${removalSegmentStartX}px ${rowStartY}px` }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.46, delay: 0.52, ease: smoothEase }}
                  />
                  <motion.rect
                    x={removalSegmentStartX}
                    y={rowStartY}
                    width={removalSegmentWidth}
                    height={blockHeight}
                    rx="9"
                    fill={`url(#${hatchPatternId})`}
                    stroke="#ff5a95"
                    strokeWidth="1.25"
                    initial={{ opacity: 0, scaleX: 0.2, transformOrigin: `${removalSegmentStartX}px ${rowStartY}px` }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.58, delay: 0.58, ease: smoothEase }}
                  />
                  <motion.path
                    d={`M ${removalSegmentStartX} ${bracketY - 8} V ${bracketY} H ${removalSegmentEndX} V ${bracketY - 8}`}
                    fill="none"
                    stroke="#a16207"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.42, delay: 0.82, ease: smoothEase }}
                  />
                  <motion.g
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.34, delay: 0.94, ease: smoothEase }}
                  >
                    <rect
                      x={bracketLabelX - bracketLabelHalf}
                      y={bracketY + 4}
                      width={bracketLabelWidth}
                      height={18}
                      rx="9"
                      fill="#eff7c8"
                      stroke="#b7cd6c"
                      strokeWidth="1.2"
                    />
                    <text
                      x={bracketLabelX}
                      y={bracketY + 17}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="900"
                      fill="#6b7b1f"
                    >
                      빼는 부분
                    </text>
                  </motion.g>
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: movingResultSegmentOffsetY, opacity: [0, 0.98, 0.16] }}
                    transition={{ duration: 0.62, delay: 1.18, ease: smoothEase }}
                    style={{ filter: 'drop-shadow(0 8px 14px rgba(14, 165, 233, 0.2))' }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY})`}>
                      {renderMovingSegmentCells(resultBlocks, rows[2].fill, rows[2].stroke)}
                    </g>
                  </motion.g>
                </motion.g>
              ) : null}
            </AnimatePresence>

            <AnimatePresence>
              {subtractionState === 'subtracted' ? (
                <motion.g
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.34, delay: 0.1, ease: smoothEase }}
                >
                  <line
                    x1={resultBoundaryX}
                    y1={resultRowY - 10}
                    x2={resultBoundaryX}
                    y2={resultRowY + blockHeight + 8}
                    stroke={rows[2].stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={resultBoundaryX}
                    cy={resultRowY - 14}
                    r="5"
                    fill="#ffffff"
                    stroke={rows[2].stroke}
                    strokeWidth="1.6"
                  />
                  <circle cx={resultBoundaryX} cy={resultRowY - 14} r="2" fill={rows[2].stroke} />
                </motion.g>
              ) : null}
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeStoryProblemFigure({
  timeAddition,
  condensed = false,
}: {
  timeAddition: TimeAdditionProblemData;
  condensed?: boolean;
}) {
  const storyLines = timeAddition.storyLines ?? [];
  const infoLines = storyLines.length > 1 ? storyLines.slice(0, -1) : [];
  const questionLine = storyLines.length > 1 ? storyLines[storyLines.length - 1] : storyLines[0] ?? '';
  const infoTextClass = condensed
    ? 'text-[1rem] font-bold leading-[1.58] text-slate-700 sm:text-[1.15rem] lg:text-[1.45rem]'
    : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.45rem] md:text-[2rem]';
  const questionTextClass = condensed
    ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.5rem] lg:text-[1.9rem]'
    : 'text-[1.3rem] font-black leading-[1.55] text-slate-900 sm:text-[1.75rem] md:text-[2.45rem]';
  const cardPaddingClass = condensed ? 'px-4 py-3 sm:px-5 sm:py-4' : 'px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7';

  return (
    <div className={`mx-auto flex w-full max-w-[52rem] flex-col text-left text-slate-900 ${
      condensed ? 'gap-3' : 'gap-4 sm:gap-6'
    }`}>
      {infoLines.length > 0 ? (
        <div className={`rounded-[2rem] border border-slate-200 bg-slate-50/85 shadow-sm ${cardPaddingClass}`}>
          <div className={`flex flex-col ${condensed ? 'gap-4' : 'gap-5 md:gap-6'}`}>
            {infoLines.map((line, index) => (
              <p key={`${line}-${index}`} className={`break-keep tracking-[-0.01em] ${infoTextClass}`}>
                {renderPromptWithHighlight(line)}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {questionLine ? (
        <div className={`rounded-[2rem] border border-amber-200 bg-amber-50/80 shadow-sm ${cardPaddingClass}`}>
          <p className={`break-keep tracking-[-0.01em] ${questionTextClass}`}>{renderPromptWithHighlight(questionLine)}</p>
        </div>
      ) : null}
    </div>
  );
}

function TimeAdditionVerticalFigure({
  left,
  right,
  operation,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  left: TimeValue;
  right: TimeValue;
  operation: TimeArithmeticOperation;
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
}) {
  const columns: Array<{ key: ClockInputPart; label: string }> = [
    { key: 'hours', label: '시간' },
    { key: 'minutes', label: '분' },
    { key: 'seconds', label: '초' },
  ];
  const renderValueText = (value: number, tone: 'slate' | 'amber' = 'slate') => (
    <div
      className={`min-w-[4rem] text-center text-[2rem] font-black leading-none sm:min-w-[4.8rem] sm:text-[2.75rem] ${
        tone === 'amber' ? 'text-amber-900' : 'text-slate-900'
      }`}
    >
      {value}
    </div>
  );

  return (
    <div className="rounded-[1.85rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mx-auto max-w-[34rem]">
        <div className="grid grid-cols-[2.4rem_repeat(3,minmax(0,1fr)_auto)] items-end gap-x-2 gap-y-3 sm:grid-cols-[3rem_repeat(3,minmax(0,1fr)_auto)] sm:gap-x-3">
          <div />
          {columns.map((column) => (
            <React.Fragment key={`top-${column.key}`}>
              {renderValueText(getTimeValuePartValue(left, column.key))}
              <div className="pb-1 text-[2rem] font-black leading-none text-slate-900 sm:text-[2.75rem]">
                {column.label}
              </div>
            </React.Fragment>
          ))}

          <div className="pb-1 text-[2.3rem] font-black leading-none text-slate-900 sm:text-[3.2rem]">{operation}</div>
          {columns.map((column) => (
            <React.Fragment key={`bottom-${column.key}`}>
              {renderValueText(getTimeValuePartValue(right, column.key), 'amber')}
              <div className="pb-1 text-[2rem] font-black leading-none text-slate-900 sm:text-[2.75rem]">
                {column.label}
              </div>
            </React.Fragment>
          ))}

          <div className="col-span-7 mt-1 h-[2px] rounded-full bg-slate-900" />

          <div />
          {columns.map((column) => (
            <React.Fragment key={`answer-${column.key}`}>
              <label className="block">
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={2}
                  value={answerValue[column.key]}
                  onChange={(event) => onAnswerChange(column.key, event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                      event.preventDefault();
                      onSubmit();
                    }
                  }}
                  className="h-[4.2rem] w-full min-w-0 rounded-[0.9rem] border border-slate-400 bg-slate-50 px-2 text-center text-[2rem] font-black text-sky-500 outline-none transition focus:border-sky-400 focus:bg-white sm:h-[4.8rem] sm:text-[2.75rem]"
                  placeholder=""
                  aria-label={column.label}
                />
              </label>
              <div className="pb-1 text-[2rem] font-black leading-none text-slate-900 sm:text-[2.75rem]">
                {column.label}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryPromptTableCard({
  table,
  condensed = false,
  dense = false,
}: {
  table: StoryPromptTableData;
  condensed?: boolean;
  dense?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-emerald-50/90">
            {table.headers.map((header) => (
              <th
                key={header}
                className={`border-b border-slate-200 text-center font-black text-slate-900 ${
                  dense
                    ? 'px-3 py-2 text-[0.95rem] sm:text-[1rem]'
                    : condensed
                      ? 'px-4 py-3 text-[1rem] sm:text-[1.15rem]'
                      : 'px-4 py-3 text-[1.1rem] sm:text-[1.35rem] md:text-[1.6rem]'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row.cells.join('-')}-${rowIndex}`} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}>
              {row.cells.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`text-center font-bold text-slate-800 ${
                    dense
                      ? 'px-3 py-2 text-[0.92rem] leading-[1.32] sm:text-[1rem]'
                      : condensed
                        ? 'px-4 py-3 text-[1rem] leading-[1.45] sm:text-[1.1rem]'
                        : 'px-4 py-3 text-[1.08rem] leading-[1.5] sm:text-[1.3rem] md:text-[1.6rem]'
                  } ${rowIndex > 0 ? 'border-t border-slate-200' : ''} ${cellIndex > 0 ? 'border-l border-slate-200' : ''}`}
                >
                  {renderPromptWithHighlight(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BattleStructuredTimeInput({
  parts,
  answerValue,
  onAnswerChange,
  onSubmit,
  canSubmit,
  condensed = false,
}: {
  parts: ClockInputPart[];
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
  canSubmit: boolean;
  condensed?: boolean;
}) {
  const labels: Record<ClockInputPart, string> = { hours: '시', minutes: '분', seconds: '초' };
  const textSizeClass = condensed ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl';

  return (
    <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-stretch ${condensed ? 'gap-2' : 'gap-3'}`}>
      <div
        className={`flex min-w-0 items-center rounded-2xl border-4 border-slate-500 bg-slate-700 px-2 focus-within:border-emerald-500 ${
          condensed ? 'py-1.5' : 'py-2'
        }`}
      >
        <div
          className="grid min-w-0 flex-1"
          style={{ gridTemplateColumns: `repeat(${parts.length}, minmax(0, 1fr))` }}
        >
          {parts.map((part, index) => (
            <label
              key={part}
              className={`flex min-w-0 items-center justify-center gap-2 px-3 ${
                condensed ? 'py-1.5 sm:px-3' : 'py-2 sm:px-4'
              } ${index > 0 ? 'border-l-2 border-slate-500/80' : ''}`}
            >
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                maxLength={2}
                value={answerValue[part]}
                onChange={(event) => onAnswerChange(part, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                    event.preventDefault();
                    onSubmit();
                  }
                }}
                className={`min-w-0 flex-1 bg-transparent text-center font-black text-slate-100 outline-none placeholder:text-slate-400 ${textSizeClass}`}
                placeholder=""
                aria-label={labels[part]}
              />
              <span className={`shrink-0 font-black text-slate-100 ${textSizeClass}`}>{labels[part]}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled={!canSubmit}
        onClick={onSubmit}
        className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-lg font-black text-white shadow-lg sm:min-w-[170px] sm:w-auto sm:px-6 sm:text-xl ${
          canSubmit
            ? 'bg-emerald-600 hover:bg-emerald-500'
            : 'cursor-not-allowed bg-slate-500 opacity-60'
        }`}
      >
        <Sword size={22} /> 공격!
      </button>
    </div>
  );
}

function TimeAdditionProblemCard({
  timeAddition,
  answerValue,
  onAnswerChange,
  onSubmit,
  playAnimationSound,
  condensed = false,
  showAnswerFields = true,
}: {
  timeAddition: TimeAdditionProblemData;
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
  playAnimationSound?: AnimationSoundPlayer;
  condensed?: boolean;
  showAnswerFields?: boolean;
}) {
  const fields: Array<{ key: ClockInputPart; label: string; placeholder: string }> = [
    { key: 'hours' as const, label: '시', placeholder: '시' },
    { key: 'minutes' as const, label: '분', placeholder: '분' },
    { key: 'seconds' as const, label: '초', placeholder: '초' },
  ].filter((field) => timeAddition.editableParts.includes(field.key));
  const isVerticalMode = timeAddition.mode === 'vertical';
  const isStoryMode = timeAddition.mode === 'story';
  const shouldCenterCard = isVerticalMode || timeAddition.mode === 'clock';

  if (isStoryMode) {
    return (
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4 text-left text-slate-900 sm:gap-5">
        <TimeStoryProblemFigure timeAddition={timeAddition} condensed={condensed} />

        {showAnswerFields ? (
          <div
            className="grid gap-3 sm:gap-4"
            style={{ gridTemplateColumns: `repeat(${fields.length}, minmax(0, 1fr))` }}
          >
            {fields.map((field) => (
              <label
                key={field.key}
                className="flex items-center justify-center gap-2 rounded-[1.5rem] border border-slate-200 bg-white px-3 py-3 shadow-sm sm:gap-3 sm:px-4 sm:py-4"
              >
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={2}
                  value={answerValue[field.key]}
                  onChange={(event) => onAnswerChange(field.key, event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                      event.preventDefault();
                      onSubmit();
                    }
                  }}
                  className="w-full min-w-0 rounded-2xl border-2 border-slate-200 bg-slate-50 px-3 py-3 text-center text-xl font-black text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white sm:text-2xl"
                  placeholder={field.placeholder}
                  aria-label={field.label}
                />
                <span className="shrink-0 text-2xl font-black text-slate-900 sm:text-3xl">{field.label}</span>
              </label>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`mx-auto flex w-full flex-col gap-4 text-left text-slate-900 sm:gap-5 ${
        shouldCenterCard ? 'my-auto' : ''
      } ${
        isVerticalMode ? 'max-w-[62rem]' : timeAddition.mode === 'clock' ? 'max-w-[60rem]' : 'max-w-[58rem]'
      }`}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50/85 px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-7">
        <div>
          {timeAddition.mode === 'clock' ? (
            <ClockTimeAdditionFigure
              start={timeAddition.left}
              add={timeAddition.right}
              result={timeAddition.result}
              operation={timeAddition.operation}
              playAnimationSound={playAnimationSound}
            />
          ) : timeAddition.mode === 'bar' ? (
            <div className="overflow-hidden rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
              {timeAddition.operation === '+' ? (
                <TimeAdditionBarModelFigure
                  left={timeAddition.left}
                  right={timeAddition.right}
                  result={timeAddition.result}
                  playAnimationSound={playAnimationSound}
                />
              ) : (
                <TimeSubtractionBarModelFigure
                  left={timeAddition.left}
                  right={timeAddition.right}
                  result={timeAddition.result}
                  playAnimationSound={playAnimationSound}
                />
              )}
            </div>
          ) : (
            <TimeAdditionVerticalFigure
              left={timeAddition.left}
              right={timeAddition.right}
              operation={timeAddition.operation}
              answerValue={answerValue}
              onAnswerChange={onAnswerChange}
              onSubmit={onSubmit}
            />
          )}
        </div>

        {!isVerticalMode && showAnswerFields ? (
          <>
            <div
              className="mt-4 grid gap-3 sm:gap-4"
              style={{ gridTemplateColumns: `repeat(${fields.length}, minmax(0, 1fr))` }}
            >
              {fields.map((field) => (
                <label
                  key={field.key}
                  className="flex items-center justify-center gap-2 rounded-[1.5rem] border border-slate-200 bg-white px-3 py-3 shadow-sm sm:gap-3 sm:px-4 sm:py-4"
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={2}
                    value={answerValue[field.key]}
                    onChange={(event) => onAnswerChange(field.key, event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                        event.preventDefault();
                        onSubmit();
                      }
                    }}
                    className="w-full min-w-0 rounded-2xl border-2 border-slate-200 bg-slate-50 px-3 py-3 text-center text-xl font-black text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white sm:text-2xl"
                    placeholder={field.placeholder}
                    aria-label={field.label}
                  />
                  <span className="shrink-0 text-2xl font-black text-slate-900 sm:text-3xl">{field.label}</span>
                </label>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function formatDistanceMapPoints(points: DistanceMapPoint[]) {
  return points.map((point) => `${point.x},${point.y}`).join(' ');
}

function getDistanceMapMidpoint(point: DistanceMapPoint, nextPoint: DistanceMapPoint) {
  return {
    x: (point.x + nextPoint.x) / 2,
    y: (point.y + nextPoint.y) / 2,
  };
}

function renderDistanceMapLandmark(landmark: DistanceMapLandmarkData, scale = 1) {
  const transform = scale === 1
    ? undefined
    : `translate(${landmark.x} ${landmark.y}) scale(${scale}) translate(${-landmark.x} ${-landmark.y})`;

  if (landmark.kind === 'home') {
    return (
      <g key={landmark.id} transform={transform}>
        <polygon
          points={`${landmark.x - 18},${landmark.y - 4} ${landmark.x},${landmark.y - 24} ${landmark.x + 18},${landmark.y - 4}`}
          fill="#fb923c"
          stroke="#c2410c"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={landmark.x - 14}
          y={landmark.y - 4}
          width="28"
          height="22"
          rx="5"
          fill="#fff7ed"
          stroke="#c2410c"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <rect x={landmark.x - 4} y={landmark.y + 5} width="8" height="13" rx="2" fill="#fdba74" />
        <text x={landmark.x} y={landmark.y + 38} textAnchor="middle" fontSize="18" fontWeight="900" fill="#7c2d12">
          {landmark.label}
        </text>
      </g>
    );
  }

  if (landmark.kind === 'reference') {
    return (
      <g key={landmark.id} transform={transform}>
        <line
          x1={landmark.x}
          y1={landmark.y - 4}
          x2={landmark.x}
          y2={landmark.y + 18}
          stroke="#0f172a"
          strokeWidth="3.2"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={landmark.x - 20}
          y={landmark.y - 20}
          width="40"
          height="20"
          rx="7"
          fill="#e0f2fe"
          stroke="#0284c7"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <text x={landmark.x} y={landmark.y - 6} textAnchor="middle" fontSize="11" fontWeight="900" fill="#0c4a6e">
          BUS
        </text>
        <text x={landmark.x} y={landmark.y + 38} textAnchor="middle" fontSize="18" fontWeight="900" fill="#0c4a6e">
          {landmark.label}
        </text>
      </g>
    );
  }

  return (
    <g key={landmark.id} transform={transform}>
      <rect
        x={landmark.x - 19}
        y={landmark.y - 18}
        width="38"
        height="28"
        rx="8"
        fill={landmark.accent}
        stroke="#334155"
        strokeWidth="2.6"
        vectorEffect="non-scaling-stroke"
      />
      <rect
        x={landmark.x - 11}
        y={landmark.y - 10}
        width="22"
        height="12"
        rx="4"
        fill="rgba(255,255,255,0.6)"
      />
      <text x={landmark.x} y={landmark.y + 30} textAnchor="middle" fontSize="18" fontWeight="900" fill="#1e293b">
        {landmark.label}
      </text>
    </g>
  );
}

const DISTANCE_CARD_VIEWBOX_WIDTH = 640;
const DISTANCE_CARD_VIEWBOX_HEIGHT = 410;
const DISTANCE_ROUTE_LEFT_X = 102;
const DISTANCE_ROUTE_RIGHT_X = 538;
const DISTANCE_ROUTE_Y = 196;
const DISTANCE_LANDMARK_Y = 114;
const DISTANCE_HOME_X = 72;
const DISTANCE_TARGET_X = 568;
const DISTANCE_DISPLAY_LANDMARK_SCALE = 1.18;
const DISTANCE_ROUTE_STROKE_WIDTH = 32;
const DISTANCE_PROGRESS_STROKE_WIDTH = 16;
const DISTANCE_STEP_BUBBLE_RADIUS = 23;

function getDistanceMapPathLength(points: DistanceMapPoint[]) {
  let total = 0;

  for (let index = 0; index < points.length - 1; index += 1) {
    total += Math.hypot(points[index + 1].x - points[index].x, points[index + 1].y - points[index].y);
  }

  return total;
}

function relocateDistanceMapLandmark(landmark: DistanceMapLandmarkData, x: number, y: number): DistanceMapLandmarkData {
  return { ...landmark, x, y };
}

function createHorizontalDistanceRoute(
  units: number,
  leftX = DISTANCE_ROUTE_LEFT_X,
  rightX = DISTANCE_ROUTE_RIGHT_X,
  y = DISTANCE_ROUTE_Y,
) {
  const safeUnits = Math.max(units, 1);
  return Array.from({ length: safeUnits + 1 }, (_, index) => ({
    x: leftX + ((rightX - leftX) * index) / safeUnits,
    y,
  }));
}

function createHorizontalDistanceSegmentLayouts(
  segments: DistanceChunkSegmentData[],
  leftX = DISTANCE_ROUTE_LEFT_X,
  rightX = DISTANCE_ROUTE_RIGHT_X,
  y = DISTANCE_ROUTE_Y,
) {
  const totalUnits = Math.max(1, segments.reduce((sum, segment) => sum + segment.units, 0));
  const totalWidth = rightX - leftX;
  let cursor = leftX;

  return segments.map((segment) => {
    const width = (totalWidth * segment.units) / totalUnits;
    const startX = cursor;
    const endX = startX + width;
    cursor = endX;

    return {
      ...segment,
      width,
      centerX: (startX + endX) / 2,
      points: [
        { x: startX, y },
        { x: endX, y },
      ],
    };
  });
}

function renderDistanceReferenceBadge({
  x,
  y,
  previewWidth,
  fill,
  stroke,
  textColor,
  lineColor,
  lineStroke,
}: {
  x: number;
  y: number;
  previewWidth: number;
  fill: string;
  stroke: string;
  textColor: string;
  lineColor: string;
  lineStroke: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`} pointerEvents="none">
      <rect width="222" height="78" rx="24" fill="#ffffff" stroke={stroke} strokeWidth="2.8" />
      <text x="18" y="31" fontSize="18" fontWeight="900" fill={textColor}>집→정류장 500m</text>
      <line x1="18" y1="54" x2={18 + previewWidth} y2="54" stroke={lineColor} strokeWidth="12" strokeLinecap="round" />
      <line x1="18" y1="54" x2={18 + previewWidth} y2="54" stroke={lineStroke} strokeWidth="4" strokeLinecap="round" strokeDasharray="11 8" />
      <rect x="0" y="0" width="222" height="78" rx="24" fill="none" stroke={fill} strokeWidth="0.6" opacity="0.01" />
    </g>
  );
}

function getDistanceMapPointAtDistance(points: DistanceMapPoint[], distance: number) {
  if (points.length === 0) {
    return { x: 0, y: 0 };
  }

  if (points.length === 1 || distance <= 0) {
    return points[0];
  }

  let remaining = distance;

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const segmentLength = Math.hypot(end.x - start.x, end.y - start.y);

    if (segmentLength === 0) {
      continue;
    }

    if (remaining <= segmentLength) {
      const ratio = remaining / segmentLength;
      return {
        x: start.x + (end.x - start.x) * ratio,
        y: start.y + (end.y - start.y) * ratio,
      };
    }

    remaining -= segmentLength;
  }

  return points[points.length - 1];
}

function getDistanceMapPartialPoints(points: DistanceMapPoint[], distance: number) {
  if (points.length === 0) {
    return [];
  }

  if (points.length === 1) {
    return [points[0], points[0]];
  }

  const clampedDistance = clamp(distance, 0, getDistanceMapPathLength(points));

  if (clampedDistance === 0) {
    return [points[0], points[0]];
  }

  const partial: DistanceMapPoint[] = [points[0]];
  let remaining = clampedDistance;

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const segmentLength = Math.hypot(end.x - start.x, end.y - start.y);

    if (segmentLength === 0) {
      continue;
    }

    if (remaining >= segmentLength) {
      partial.push(end);
      remaining -= segmentLength;
      continue;
    }

    partial.push(getDistanceMapPointAtDistance([start, end], remaining));
    return partial;
  }

  return partial;
}

function getDistanceAlongDistanceMapPath(points: DistanceMapPoint[], point: DistanceMapPoint) {
  if (points.length <= 1) {
    return 0;
  }

  let bestDistance = Number.POSITIVE_INFINITY;
  let bestAlong = 0;
  let traversed = 0;

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const lengthSquared = dx * dx + dy * dy;
    const segmentLength = Math.sqrt(lengthSquared);

    if (segmentLength === 0) {
      continue;
    }

    const rawT = ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared;
    const t = clamp(rawT, 0, 1);
    const projected = {
      x: start.x + dx * t,
      y: start.y + dy * t,
    };
    const distance = Math.hypot(projected.x - point.x, projected.y - point.y);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestAlong = traversed + segmentLength * t;
    }

    traversed += segmentLength;
  }

  return bestAlong;
}

function getDistanceMapClientPoint(svg: SVGSVGElement | null, clientX: number, clientY: number) {
  if (!svg) {
    return null;
  }

  const rect = svg.getBoundingClientRect();

  if (rect.width === 0 || rect.height === 0) {
    return null;
  }

  return {
    x: ((clientX - rect.left) / rect.width) * DISTANCE_CARD_VIEWBOX_WIDTH,
    y: ((clientY - rect.top) / rect.height) * DISTANCE_CARD_VIEWBOX_HEIGHT,
  };
}

function getSnappedDistanceUnits(distance: number, totalLength: number, units: number) {
  if (units <= 0 || totalLength <= 0) {
    return 0;
  }

  const unitLength = totalLength / units;
  return clamp(Math.round(distance / unitLength), 0, units);
}

function getSnappedDistanceLength(totalLength: number, units: number, filledUnits: number) {
  if (units <= 0 || totalLength <= 0) {
    return 0;
  }

  return (totalLength * filledUnits) / units;
}

function createCenteredDistanceRowPositions(count: number, centerX: number, y: number, gap: number) {
  if (count <= 0) {
    return [];
  }

  const startX = centerX - (gap * (count - 1)) / 2;
  return Array.from({ length: count }, (_, index) => ({
    x: startX + gap * index,
    y,
  }));
}

function useDistancePathMeasure({
  points,
  units,
  resetKey,
}: {
  points: DistanceMapPoint[];
  units: number;
  resetKey: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [filledUnits, setFilledUnits] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const totalLength = getDistanceMapPathLength(points);

  useEffect(() => {
    setFilledUnits(0);
    setIsDragging(false);
  }, [resetKey]);

  const updateFromClientPoint = (clientX: number, clientY: number) => {
    const nextPoint = getDistanceMapClientPoint(svgRef.current, clientX, clientY);

    if (!nextPoint) {
      return;
    }

    const nextDistance = getDistanceAlongDistanceMapPath(points, nextPoint);
    setFilledUnits(getSnappedDistanceUnits(nextDistance, totalLength, units));
  };

  const getPathDragProps = () => ({
    onPointerDown: (event: React.PointerEvent<SVGElement>) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      updateFromClientPoint(event.clientX, event.clientY);
    },
    onPointerMove: (event: React.PointerEvent<SVGElement>) => {
      if (!isDragging) {
        return;
      }

      updateFromClientPoint(event.clientX, event.clientY);
    },
    onPointerUp: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      updateFromClientPoint(event.clientX, event.clientY);
      setIsDragging(false);
    },
    onPointerCancel: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      setIsDragging(false);
    },
  });

  return {
    svgRef,
    filledUnits,
    filledDistance: getSnappedDistanceLength(totalLength, units, filledUnits),
    resetMeasure: () => {
      setFilledUnits(0);
      setIsDragging(false);
    },
    getPathDragProps,
  };
}

function useDistanceSegmentMeasures({
  segments,
  resetKey,
}: {
  segments: DistanceChunkSegmentData[];
  resetKey: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [filledUnitsById, setFilledUnitsById] = useState<Record<string, number>>(() => (
    Object.fromEntries(segments.map((segment) => [segment.id, 0]))
  ));
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null);

  useEffect(() => {
    setFilledUnitsById(Object.fromEntries(segments.map((segment) => [segment.id, 0])));
    setActiveSegmentId(null);
  }, [resetKey, segments]);

  const updateSegment = (segment: DistanceChunkSegmentData, clientX: number, clientY: number) => {
    const nextPoint = getDistanceMapClientPoint(svgRef.current, clientX, clientY);

    if (!nextPoint) {
      return;
    }

    const totalLength = getDistanceMapPathLength(segment.points);
    const distance = getDistanceAlongDistanceMapPath(segment.points, nextPoint);
    const nextUnits = getSnappedDistanceUnits(distance, totalLength, segment.units);

    setFilledUnitsById((prev) => (prev[segment.id] === nextUnits ? prev : { ...prev, [segment.id]: nextUnits }));
  };

  const getSegmentDragProps = (segment: DistanceChunkSegmentData) => ({
    onPointerDown: (event: React.PointerEvent<SVGElement>) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      setActiveSegmentId(segment.id);
      updateSegment(segment, event.clientX, event.clientY);
    },
    onPointerMove: (event: React.PointerEvent<SVGElement>) => {
      if (activeSegmentId !== segment.id) {
        return;
      }

      updateSegment(segment, event.clientX, event.clientY);
    },
    onPointerUp: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      updateSegment(segment, event.clientX, event.clientY);
      setActiveSegmentId(null);
    },
    onPointerCancel: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      setActiveSegmentId(null);
    },
  });

  return {
    svgRef,
    filledUnitsById,
    resetMeasures: () => {
      setFilledUnitsById(Object.fromEntries(segments.map((segment) => [segment.id, 0])));
      setActiveSegmentId(null);
    },
    getSegmentDragProps,
  };
}

function DistanceProblemShell({
  leftBadge,
  rightBadge,
  onReset,
  panelClassName,
  children,
}: {
  leftBadge?: React.ReactNode;
  rightBadge?: React.ReactNode;
  onReset: () => void;
  panelClassName: string;
  children: React.ReactNode;
}) {
  const hasHeader = Boolean(leftBadge) || Boolean(rightBadge);

  return (
    <div className="mx-auto flex h-full w-full max-w-full flex-col text-left text-slate-900">
      <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 px-2 py-2 shadow-sm sm:px-3 sm:py-3">
        {hasHeader ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            {leftBadge}
            {rightBadge}
          </div>
        ) : null}

        <div className={`${hasHeader ? 'mt-2' : ''} flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 p-1.5 sm:p-2 ${panelClassName}`}>
          <div className="min-h-0 flex-1 overflow-hidden rounded-[1.45rem] border border-white bg-white/80">
            {children}
          </div>

          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={onReset}
              className="rounded-[1.3rem] border border-slate-300 bg-white px-4 py-2.5 text-sm font-black text-slate-700 transition hover:bg-slate-50 sm:min-w-[6.5rem]"
            >
              다시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderDistanceWorksheetLandmarkIcon(
  landmark: DistanceWorksheetLandmarkData,
  x: number,
  y: number,
) {
  const stroke = '#475569';

  if (landmark.icon === 'fountain') {
    return (
      <g>
        <rect x={x - 18} y={y + 10} width="36" height="8" rx="4" fill="#bfdbfe" stroke={stroke} strokeWidth="2" />
        <path d={`M ${x} ${y - 20} C ${x - 10} ${y - 2}, ${x - 10} ${y + 12}, ${x} ${y + 4} C ${x + 10} ${y + 12}, ${x + 10} ${y - 2}, ${x} ${y - 20}`} fill="#7dd3fc" opacity="0.9" />
        <circle cx={x} cy={y - 24} r="6" fill="#38bdf8" />
      </g>
    );
  }

  if (landmark.icon === 'station') {
    return (
      <g>
        <rect x={x - 26} y={y - 4} width="52" height="22" rx="6" fill="#fca5a5" stroke={stroke} strokeWidth="2" />
        <rect x={x - 18} y={y + 2} width="12" height="16" rx="3" fill="#fff7ed" />
        <rect x={x + 4} y={y + 2} width="14" height="10" rx="3" fill="#dbeafe" />
        <path d={`M ${x - 30} ${y + 20} H ${x + 30}`} stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <path d={`M ${x - 26} ${y + 26} H ${x + 26}`} stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      </g>
    );
  }

  if (landmark.icon === 'bank') {
    return (
      <g>
        <polygon points={`${x - 24},${y - 8} ${x},${y - 24} ${x + 24},${y - 8}`} fill="#fef3c7" stroke={stroke} strokeWidth="2" />
        <rect x={x - 24} y={y - 8} width="48" height="28" rx="6" fill="#fde68a" stroke={stroke} strokeWidth="2" />
        {[-12, 0, 12].map((offset) => (
          <rect key={offset} x={x + offset - 3} y={y - 2} width="6" height="16" rx="2" fill="#fff7ed" />
        ))}
      </g>
    );
  }

  if (landmark.icon === 'school') {
    return (
      <g>
        <polygon points={`${x - 28},${y - 6} ${x},${y - 28} ${x + 28},${y - 6}`} fill="#f87171" stroke={stroke} strokeWidth="2" />
        <rect x={x - 24} y={y - 6} width="48" height="30" rx="6" fill="#e0f2fe" stroke={stroke} strokeWidth="2" />
        <rect x={x - 6} y={y + 6} width="12" height="18" rx="3" fill="#fff7ed" />
        <circle cx={x} cy={y - 14} r="5" fill="#fde68a" stroke={stroke} strokeWidth="1.5" />
      </g>
    );
  }

  if (landmark.icon === 'market') {
    return (
      <g>
        <rect x={x - 22} y={y - 4} width="44" height="24" rx="6" fill="#bbf7d0" stroke={stroke} strokeWidth="2" />
        <rect x={x - 24} y={y - 14} width="48" height="10" rx="4" fill="#fcd34d" stroke={stroke} strokeWidth="2" />
        {[-16, -4, 8].map((offset) => (
          <rect key={offset} x={x + offset} y={y + 2} width="8" height="8" rx="2" fill="#fff7ed" />
        ))}
      </g>
    );
  }

  if (landmark.icon === 'bookstore' || landmark.icon === 'library') {
    return (
      <g>
        <rect x={x - 24} y={y - 8} width="48" height="30" rx="7" fill="#bae6fd" stroke={stroke} strokeWidth="2" />
        <rect x={x - 18} y={y - 2} width="12" height="12" rx="3" fill="#fff7ed" />
        <rect x={x} y={y - 2} width="14" height="18" rx="3" fill="#fef3c7" />
      </g>
    );
  }

  if (landmark.icon === 'hospital') {
    return (
      <g>
        <rect x={x - 24} y={y - 8} width="48" height="30" rx="7" fill="#fecdd3" stroke={stroke} strokeWidth="2" />
        <rect x={x - 5} y={y - 2} width="10" height="16" rx="2" fill="#ffffff" />
        <rect x={x - 10} y={y + 3} width="20" height="6" rx="2" fill="#ffffff" />
      </g>
    );
  }

  return (
    <g>
      <circle cx={x} cy={y - 4} r="15" fill="#86efac" stroke={stroke} strokeWidth="2" />
      <rect x={x - 4} y={y + 8} width="8" height="14" rx="3" fill="#a16207" />
    </g>
  );
}

function renderDistanceWorksheetMapBackdrop(variant: DistanceWorksheetMapVariant, roadY: number) {
  const roadTopY = roadY - 37;
  const greenBandY = roadY + 27;

  if (variant === 'river') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#dcfce7" />
        <path
          d="M68 82 C166 42, 262 52, 356 92 C454 134, 574 126, 692 80 L692 150 C586 180, 468 186, 352 154 C246 124, 158 116, 68 146 Z"
          fill="#bfdbfe"
          opacity="0.95"
        />
        <rect x="52" y={roadTopY} width="656" height="58" rx="29" fill="#fde68a" />
        <path
          d="M62 242 C176 220, 294 218, 404 234 C518 250, 610 250, 700 236"
          stroke="#67e8f9"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.78"
        />
        <rect x="74" y={greenBandY + 8} width="612" height="10" rx="5" fill="#34d399" opacity="0.74" />
        {[108, 182, 560, 634].map((x, index) => (
          <g key={`river-tree-${index}`} opacity="0.82">
            <circle cx={x} cy={88 + (index % 2) * 16} r="15" fill="#4ade80" />
            <rect x={x - 3} y={99 + (index % 2) * 16} width="6" height="16" rx="3" fill="#a16207" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'town') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#dbeafe" />
        <path d="M72 98 C186 62, 304 62, 412 92 C512 118, 610 116, 688 88 L688 154 L72 154 Z" fill="#bfdbfe" opacity="0.82" />
        <rect x="84" y="74" width="86" height="44" rx="18" fill="#fef2f2" opacity="0.88" />
        <rect x="590" y="78" width="92" height="42" rx="18" fill="#e2e8f0" opacity="0.96" />
        <rect x="52" y={roadTopY} width="656" height="62" rx="22" fill="#d6d3d1" />
        <rect x="52" y={greenBandY} width="656" height="20" rx="10" fill="#fca5a5" opacity="0.72" />
        {[0, 1, 2, 3].map((index) => (
          <rect
            key={`town-crosswalk-${index}`}
            x={326 + index * 14}
            y={roadTopY + 14}
            width="8"
            height="34"
            rx="3"
            fill="#f8fafc"
            opacity="0.82"
          />
        ))}
        {[132, 214, 514, 620].map((x, index) => (
          <g key={`town-tree-${index}`} opacity="0.8">
            <circle cx={x} cy={94 + (index % 2) * 14} r="13" fill="#4ade80" />
            <rect x={x - 3} y={104 + (index % 2) * 14} width="6" height="16" rx="3" fill="#a16207" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'campus') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#fef3c7" />
        <path
          d="M84 88 C186 42, 314 42, 404 86 C504 136, 606 130, 680 92 L680 168 L84 168 Z"
          fill="#dcfce7"
          opacity="0.96"
        />
        <path d="M110 142 C204 108, 322 104, 430 130 C532 156, 614 154, 670 136" stroke="#f9a8d4" strokeWidth="22" strokeLinecap="round" opacity="0.34" />
        <rect x="52" y={roadTopY} width="656" height="64" rx="32" fill="#fdba74" />
        <rect x="70" y={greenBandY + 2} width="620" height="16" rx="8" fill="#93c5fd" opacity="0.5" />
        {[114, 196, 560, 640].map((x, index) => (
          <g key={`campus-tree-${index}`} opacity="0.82">
            <circle cx={x} cy={90 + (index % 2) * 18} r="15" fill="#4ade80" />
            <rect x={x - 3} y={102 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
          </g>
        ))}
        {[154, 604].map((x, index) => (
          <circle key={`campus-flower-${index}`} cx={x} cy={242 + index * 4} r="7" fill="#f9a8d4" opacity="0.7" />
        ))}
      </>
    );
  }

  if (variant === 'orchard') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#ecfccb" />
        <path
          d="M76 92 C182 50, 292 56, 386 92 C482 126, 586 126, 684 90 L684 158 L76 158 Z"
          fill="#fde68a"
          opacity="0.42"
        />
        <path d="M86 128 C214 150, 330 150, 448 128 C562 108, 638 104, 686 124" stroke="#86efac" strokeWidth="20" strokeLinecap="round" opacity="0.62" />
        <rect x="52" y={roadTopY} width="656" height="60" rx="30" fill="#f5d38e" />
        <rect x="64" y={greenBandY + 2} width="632" height="18" rx="9" fill="#4ade80" opacity="0.7" />
        {[114, 170, 226, 562, 618].map((x, index) => (
          <g key={`orchard-tree-${index}`} opacity="0.84">
            <circle cx={x} cy={88 + (index % 2) * 18} r="14" fill="#4ade80" />
            <rect x={x - 3} y={98 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
            <circle cx={x - 7} cy={82 + (index % 2) * 18} r="3" fill="#fb7185" />
            <circle cx={x + 6} cy={92 + (index % 2) * 18} r="3" fill="#f97316" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'harbor') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#dbeafe" />
        <path
          d="M70 92 C180 52, 304 56, 410 96 C514 136, 610 136, 688 92 L688 154 L70 154 Z"
          fill="#93c5fd"
          opacity="0.84"
        />
        <path d="M78 246 C188 222, 306 220, 424 238 C538 254, 626 252, 692 238" stroke="#67e8f9" strokeWidth="20" strokeLinecap="round" opacity="0.66" />
        <rect x="52" y={roadTopY} width="656" height="60" rx="30" fill="#fde68a" />
        <rect x="70" y={greenBandY + 2} width="620" height="14" rx="7" fill="#38bdf8" opacity="0.34" />
        {[116, 184, 566, 632].map((x, index) => (
          <g key={`harbor-anchor-${index}`} opacity="0.82">
            <circle cx={x} cy={90 + (index % 2) * 14} r="12" fill="#f8fafc" stroke="#0f172a" strokeWidth="2.3" />
            <path d={`M${x} ${102 + (index % 2) * 14} v18 M${x - 10} ${112 + (index % 2) * 14} q10 10 20 0`} stroke="#0f172a" strokeWidth="2.3" fill="none" strokeLinecap="round" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'village') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#fef3c7" />
        <path
          d="M78 90 C186 48, 304 52, 404 88 C506 124, 596 124, 682 88 L682 158 L78 158 Z"
          fill="#bbf7d0"
          opacity="0.9"
        />
        <path d="M98 138 C210 114, 332 112, 448 130 C564 148, 632 146, 682 132" stroke="#f9a8d4" strokeWidth="18" strokeLinecap="round" opacity="0.42" />
        <rect x="52" y={roadTopY} width="656" height="60" rx="30" fill="#fdba74" />
        <rect x="64" y={greenBandY + 2} width="632" height="18" rx="9" fill="#86efac" opacity="0.72" />
        {[112, 170, 228, 554, 612].map((x, index) => (
          <g key={`village-tree-${index}`} opacity="0.84">
            <circle cx={x} cy={88 + (index % 2) * 18} r="14" fill="#4ade80" />
            <rect x={x - 3} y={98 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
            <circle cx={x - 8} cy={82 + (index % 2) * 18} r="3" fill="#f59e0b" />
            <circle cx={x + 7} cy={92 + (index % 2) * 18} r="3" fill="#fb7185" />
          </g>
        ))}
      </>
    );
  }

  return (
    <>
      <rect x="28" y="26" width="704" height="264" rx="88" fill="#d9f99d" />
      <path d="M72 92 C180 40, 290 42, 366 84 C450 130, 566 126, 688 72 L688 160 L72 160 Z" fill="#bbf7d0" opacity="0.7" />
      <rect x="52" y={roadTopY} width="656" height="62" rx="31" fill="#f5d38e" />
      <rect x="52" y={greenBandY} width="656" height="20" rx="10" fill="#86efac" opacity="0.85" />
      {[126, 182, 540, 616].map((x, index) => (
        <g key={`meadow-tree-${index}`} opacity="0.82">
          <circle cx={x} cy={86 + (index % 2) * 18} r="14" fill="#4ade80" />
          <rect x={x - 3} y={96 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
        </g>
      ))}
    </>
  );
}

function DistanceWorksheetProblemCard({
  distanceWorksheet,
  condensed = false,
}: {
  distanceWorksheet: DistanceWorksheetProblemData;
  condensed?: boolean;
}) {
  const viewBoxWidth = 760;
  const viewBoxHeight = 360;
  const leftX = 90;
  const rightX = 670;
  const roadY = 205;
  const labelBoxHeight = condensed ? 26 : 28;
  const labelFontSize = condensed ? 16 : 18;
  const labelWidthMultiplier = condensed ? 18 : 20;
  const referenceFontSize = condensed ? 22 : 26;
  const dotXs = Array.from({ length: distanceWorksheet.dotCount }, (_, index) => (
    leftX + ((rightX - leftX) * index) / Math.max(distanceWorksheet.dotCount - 1, 1)
  ));

  return (
    <div className={`mx-auto flex w-full flex-col overflow-visible rounded-[2rem] border-4 border-slate-200 bg-white shadow-sm ${
      condensed ? 'max-w-[52rem]' : 'max-w-[58rem]'
    }`}>
      <div className={`border-b border-slate-200 bg-slate-50/90 ${
        condensed ? 'px-3 py-2.5 sm:px-4 sm:py-3' : 'px-4 py-3 sm:px-6'
      }`}>
        <p className={`break-keep font-black text-slate-900 ${
          condensed ? 'text-[0.95rem] sm:text-[1.02rem]' : 'text-base sm:text-[1.15rem]'
        }`}>
          {distanceWorksheet.instruction}
        </p>
      </div>

      <div className={condensed ? 'px-2.5 pt-2.5 sm:px-4 sm:pt-3.5' : 'px-3 pt-3 sm:px-5 sm:pt-5'}>
        <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="block w-full" role="img" aria-label="거리 어림 학습지 그림">
          {renderDistanceWorksheetMapBackdrop(distanceWorksheet.mapVariant, roadY)}

          {distanceWorksheet.landmarks.map((landmark) => {
            const x = dotXs[landmark.dotIndex] ?? leftX;
            const iconY = landmark.row === 'top' ? 126 : 248;
            const labelY = landmark.row === 'top' ? 50 : 286;
            const textY = landmark.row === 'top' ? 70 : 306;
            const labelWidth = Math.min(condensed ? 126 : 134, Math.max(72, landmark.label.length * labelWidthMultiplier));
            return (
              <g key={landmark.id}>
                <rect
                  x={x - labelWidth / 2}
                  y={labelY}
                  width={labelWidth}
                  height={labelBoxHeight}
                  rx="11"
                  fill="#e0f2fe"
                  stroke="#7dd3fc"
                  strokeWidth="2"
                />
                <text x={x} y={textY} textAnchor="middle" fontSize={labelFontSize} fontWeight="900" fill="#1e3a8a">
                  {landmark.label}
                </text>
                {renderDistanceWorksheetLandmarkIcon(landmark, x, iconY)}
              </g>
            );
          })}

          {dotXs.map((x, index) => (
            <circle key={`dot-${index}`} cx={x} cy={roadY} r="4.5" fill="#111827" />
          ))}

          {(() => {
            const fromX = dotXs[distanceWorksheet.reference.fromDotIndex] ?? leftX;
            const toX = dotXs[distanceWorksheet.reference.toDotIndex] ?? rightX;
            return (
              <g>
                <line x1={fromX} y1={182} x2={toX} y2={182} stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                <line x1={fromX} y1={182} x2={fromX} y2={roadY} stroke="#ef4444" strokeWidth="3" />
                <line x1={toX} y1={182} x2={toX} y2={roadY} stroke="#ef4444" strokeWidth="3" />
                <text x={(fromX + toX) / 2} y={172} textAnchor="middle" fontSize={referenceFontSize} fontWeight="900" fill="#ca8a04">
                  {distanceWorksheet.reference.label}
                </text>
              </g>
            );
          })()}
        </svg>
      </div>

      <div className={`shrink-0 ${
        condensed ? 'px-3 py-3 sm:px-4 sm:py-4' : 'px-4 py-4 sm:px-6 sm:py-5'
      }`}>
        <div className="flex items-start gap-3">
          <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
          <p className={`min-w-0 break-keep font-black text-slate-900 ${
            condensed ? 'text-[0.94rem] leading-[1.68] sm:text-[1.08rem]' : 'text-[1rem] leading-[1.75] sm:text-[1.2rem]'
          }`}>
            <span>{distanceWorksheet.prompt.prefix}</span>
            <span className={`mx-2 inline-flex rounded-2xl border-2 border-slate-300 bg-white align-middle shadow-sm ${
              condensed
                ? distanceWorksheet.prompt.kind === 'number'
                  ? 'h-10 w-[4.5rem] sm:w-20'
                  : 'h-10 w-24 sm:w-32'
                : distanceWorksheet.prompt.kind === 'number'
                  ? 'h-11 w-20 sm:w-24'
                  : 'h-11 w-28 sm:w-36'
            }`} aria-hidden="true" />
            <span>{distanceWorksheet.prompt.suffix}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function DistanceStrategyBadge({
  label,
  cue,
  containerClassName,
  chipClassName,
  cueClassName,
}: {
  label: string;
  cue: string;
  containerClassName: string;
  chipClassName: string;
  cueClassName: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 rounded-full px-3 py-2 ${containerClassName}`}>
      <span className={`rounded-full px-3 py-1 text-sm font-black ${chipClassName}`}>{label}</span>
      <span className={`text-sm font-black ${cueClassName}`}>{cue}</span>
    </div>
  );
}

function DistanceSentenceField({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceMapProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="border-t border-slate-200 bg-white/90 px-4 py-4 sm:px-6">
      <p className="break-keep text-[1.05rem] font-black leading-[1.9] text-slate-900 sm:text-[1.35rem]">
        <span>집에서 {distanceMap.targetLabel}까지의 거리는 약 </span>
        <label className="mx-2 inline-flex h-12 w-20 items-center justify-center rounded-2xl border-2 border-slate-400 bg-white align-middle shadow-sm sm:h-14 sm:w-24">
          <span className="sr-only">{distanceMap.targetLabel}까지의 거리</span>
          <input
            type="number"
            inputMode="numeric"
            value={answerValue}
            onChange={(event) => onAnswerChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                event.preventDefault();
                onSubmit();
              }
            }}
            className="w-full bg-transparent px-2 text-center text-xl font-black text-slate-900 outline-none placeholder:text-slate-300 sm:text-2xl"
            placeholder="?"
          />
        </label>
        <span>km입니다.</span>
      </p>
    </div>
  );
}

function DistanceWorksheetLayout({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
  children,
}: {
  distanceMap: DistanceMapProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 bg-white/80 px-4 py-3 sm:px-5">
        <p className="text-sm font-black text-slate-700 sm:text-base">{distanceMap.question}</p>
      </div>
      <div className="min-h-0 flex-1">
        {children}
      </div>
      <DistanceSentenceField
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function DistanceCompareProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceCompareProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const totalSlots = distanceMap.compareSlotCount;
  const targetUnits = Math.max(1, Math.round(distanceMap.targetMeters / distanceMap.referenceMeters));
  const routePoints = createHorizontalDistanceRoute(totalSlots);
  const routeStart = routePoints[0];
  const routeEnd = routePoints[routePoints.length - 1];
  const routeWidth = routeEnd.x - routeStart.x;
  const routeCenters = routePoints.slice(0, -1).map((point, index) => getDistanceMapMidpoint(point, routePoints[index + 1]));
  const referencePreviewWidth = Math.min(routeWidth / totalSlots, 136);
  const homeLandmark = distanceMap.landmarks.find((landmark) => landmark.id === 'home') ?? null;
  const targetLandmark = distanceMap.landmarks.find((landmark) => landmark.label === distanceMap.targetLabel) ?? null;
  const homeDisplayLandmark = homeLandmark ? relocateDistanceMapLandmark(homeLandmark, DISTANCE_HOME_X, DISTANCE_LANDMARK_Y) : null;
  const targetDisplayLandmark = targetLandmark ? relocateDistanceMapLandmark(targetLandmark, DISTANCE_TARGET_X, DISTANCE_LANDMARK_Y) : null;
  const {
    svgRef,
    filledUnits,
    filledDistance,
    resetMeasure,
    getPathDragProps,
  } = useDistancePathMeasure({
    points: routePoints,
    units: totalSlots,
    resetKey: [distanceMap.strategy, distanceMap.targetLabel, distanceMap.targetMeters].join('-'),
  });
  const targetDistance = getSnappedDistanceLength(routeWidth, totalSlots, targetUnits);
  const targetEndX = routeStart.x + targetDistance;
  const filledEndX = routeStart.x + filledDistance;

  return (
    <DistanceProblemShell
      leftBadge={(
        <DistanceStrategyBadge
          label="비교"
          cue="500m 몇 번?"
          containerClassName="bg-sky-50"
          chipClassName="bg-sky-500 text-white"
          cueClassName="text-sky-900"
        />
      )}
      rightBadge={(
        <div className="rounded-full bg-white px-4 py-2 text-lg font-black text-slate-900 sm:text-xl">
          집 → {distanceMap.targetLabel}
        </div>
      )}
      onReset={resetMeasure}
      panelClassName="bg-sky-50"
    >
      <DistanceWorksheetLayout
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      >
        <svg
          ref={svgRef}
          viewBox={'0 0 ' + DISTANCE_CARD_VIEWBOX_WIDTH + ' ' + DISTANCE_CARD_VIEWBOX_HEIGHT}
          className="block h-full w-full touch-none"
          role="img"
          aria-label="comparison distance card"
        >
          <rect x="0" y="0" width="640" height="410" rx="30" fill="#eff6ff" />

          {renderDistanceReferenceBadge({
            x: 28,
            y: 24,
            previewWidth: referencePreviewWidth,
            fill: '#eff6ff',
            stroke: '#93c5fd',
            textColor: '#0c4a6e',
            lineColor: '#7dd3fc',
            lineStroke: '#0369a1',
          })}

          {homeDisplayLandmark ? renderDistanceMapLandmark(homeDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}
          {targetDisplayLandmark ? renderDistanceMapLandmark(targetDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}

          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={routeEnd.x}
            y2={DISTANCE_ROUTE_Y}
            stroke="#dbeafe"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
          />
          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={targetEndX}
            y2={DISTANCE_ROUTE_Y}
            stroke="#fdba74"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
            opacity="0.78"
          />
          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={filledEndX}
            y2={DISTANCE_ROUTE_Y}
            stroke="#38bdf8"
            strokeWidth={DISTANCE_PROGRESS_STROKE_WIDTH}
            strokeLinecap="round"
          />

          {routeCenters.map((point, index) => {
            const unitNumber = index + 1;
            const isFilled = filledUnits >= unitNumber;
            const isTargetUnit = unitNumber <= targetUnits;
            return (
              <g key={'compare-slot-' + unitNumber} pointerEvents="none">
                <circle
                  cx={point.x}
                  cy={DISTANCE_ROUTE_Y}
                  r={DISTANCE_STEP_BUBBLE_RADIUS}
                  fill={isFilled ? '#38bdf8' : '#ffffff'}
                  stroke={isTargetUnit ? '#f97316' : '#94a3b8'}
                  strokeWidth="4"
                />
                <text
                  x={point.x}
                  y={DISTANCE_ROUTE_Y + 7}
                  textAnchor="middle"
                  fontSize="21"
                  fontWeight="900"
                  fill={isFilled ? '#ffffff' : isTargetUnit ? '#c2410c' : '#475569'}
                >
                  {unitNumber}
                </text>
              </g>
            );
          })}

          <polyline
            points={formatDistanceMapPoints(routePoints)}
            fill="none"
            stroke="transparent"
            strokeWidth="76"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ touchAction: 'none', cursor: 'grab' }}
            {...getPathDragProps()}
          />
        </svg>
      </DistanceWorksheetLayout>
    </DistanceProblemShell>
  );
}

function DistanceChunkProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceChunkProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const segmentLayouts = createHorizontalDistanceSegmentLayouts(distanceMap.segments);
  const routeStart = segmentLayouts[0]?.points[0] ?? { x: DISTANCE_ROUTE_LEFT_X, y: DISTANCE_ROUTE_Y };
  const routeEnd = segmentLayouts[segmentLayouts.length - 1]?.points[1] ?? { x: DISTANCE_ROUTE_RIGHT_X, y: DISTANCE_ROUTE_Y };
  const {
    svgRef,
    filledUnitsById,
    resetMeasures,
    getSegmentDragProps,
  } = useDistanceSegmentMeasures({
    segments: segmentLayouts,
    resetKey: [distanceMap.strategy, distanceMap.targetLabel, distanceMap.targetMeters].join('-'),
  });
  const homeLandmark = distanceMap.landmarks.find((landmark) => landmark.id === 'home') ?? null;
  const targetLandmark = distanceMap.landmarks.find((landmark) => landmark.label === distanceMap.targetLabel) ?? null;
  const homeDisplayLandmark = homeLandmark ? relocateDistanceMapLandmark(homeLandmark, DISTANCE_HOME_X, DISTANCE_LANDMARK_Y) : null;
  const targetDisplayLandmark = targetLandmark ? relocateDistanceMapLandmark(targetLandmark, DISTANCE_TARGET_X, DISTANCE_LANDMARK_Y) : null;

  return (
    <DistanceProblemShell
      leftBadge={(
        <DistanceStrategyBadge
          label="묶기"
          cue="500m씩"
          containerClassName="bg-amber-50"
          chipClassName="bg-amber-400 text-amber-950"
          cueClassName="text-amber-900"
        />
      )}
      rightBadge={(
        <div className="rounded-full bg-white px-4 py-2 text-lg font-black text-slate-900 sm:text-xl">
          집 → {distanceMap.targetLabel}
        </div>
      )}
      onReset={resetMeasures}
      panelClassName="bg-amber-50"
    >
      <DistanceWorksheetLayout
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      >
        <svg
          ref={svgRef}
          viewBox={'0 0 ' + DISTANCE_CARD_VIEWBOX_WIDTH + ' ' + DISTANCE_CARD_VIEWBOX_HEIGHT}
          className="block h-full w-full touch-none"
          role="img"
          aria-label="chunk distance card"
        >
          <rect x="0" y="0" width="640" height="410" rx="30" fill="#fffbeb" />

          {homeDisplayLandmark ? renderDistanceMapLandmark(homeDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}
          {targetDisplayLandmark ? renderDistanceMapLandmark(targetDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}

          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={routeEnd.x}
            y2={DISTANCE_ROUTE_Y}
            stroke="#fde68a"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
            opacity="0.65"
          />

          {segmentLayouts.map((segment) => {
            const filledCount = filledUnitsById[segment.id] ?? 0;
            const filledDistance = getSnappedDistanceLength(segment.width, segment.units, filledCount);
            const partialPoints = getDistanceMapPartialPoints(segment.points, filledDistance);
            const boxWidth = segment.units >= 2 ? 194 : 146;
            const slotGap = segment.units > 1 ? 60 : 0;

            return (
              <g key={'chunk-segment-' + segment.id}>
                <polyline
                  points={formatDistanceMapPoints(segment.points)}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.32"
                />
                <polyline
                  points={formatDistanceMapPoints(partialPoints)}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={DISTANCE_PROGRESS_STROKE_WIDTH}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1={segment.centerX}
                  y1={DISTANCE_ROUTE_Y + 28}
                  x2={segment.centerX}
                  y2={248}
                  stroke="#fdba74"
                  strokeWidth="3"
                  strokeDasharray="6 7"
                  opacity="0.8"
                />
                <g transform={'translate(' + (segment.centerX - boxWidth / 2) + ', 248)'}>
                  <rect width={boxWidth} height="96" rx="22" fill="#ffffff" stroke={segment.color} strokeWidth="4" />
                  <rect x="16" y="16" width="42" height="10" rx="5" fill={segment.color} />
                  {Array.from({ length: segment.units }, (_, unitIndex) => {
                    const slotX = boxWidth / 2 - (slotGap * (segment.units - 1)) / 2 + slotGap * unitIndex;
                    const isFilled = unitIndex < filledCount;
                    return (
                      <circle
                        key={segment.id + '-overlay-' + unitIndex}
                        cx={slotX}
                        cy="54"
                        r="18"
                        fill={isFilled ? segment.color : '#fff7ed'}
                        stroke={isFilled ? '#7c2d12' : '#fdba74'}
                        strokeWidth="4"
                        strokeDasharray={isFilled ? undefined : '5 6'}
                      />
                    );
                  })}
                  <text x={boxWidth / 2} y="82" textAnchor="middle" fontSize="20" fontWeight="900" fill="#9a3412">?</text>
                </g>
              </g>
            );
          })}

          {segmentLayouts.map((segment) => (
            <polyline
              key={'chunk-drag-' + segment.id}
              points={formatDistanceMapPoints(segment.points)}
              fill="none"
              stroke="transparent"
              strokeWidth="78"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ touchAction: 'none', cursor: 'grab' }}
              {...getSegmentDragProps(segment)}
            />
          ))}
        </svg>
      </DistanceWorksheetLayout>
    </DistanceProblemShell>
  );
}

function DistanceUnitizeProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceUnitizeProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const totalUnits = Math.max(1, distanceMap.targetRoute.length - 1);
  const displayRoutePoints = createHorizontalDistanceRoute(totalUnits);
  const routeStart = displayRoutePoints[0];
  const routeEnd = displayRoutePoints[displayRoutePoints.length - 1];
  const routeWidth = routeEnd.x - routeStart.x;
  const {
    svgRef,
    filledUnits,
    filledDistance,
    resetMeasure,
    getPathDragProps,
  } = useDistancePathMeasure({
    points: displayRoutePoints,
    units: totalUnits,
    resetKey: [distanceMap.strategy, distanceMap.targetLabel, distanceMap.targetMeters].join('-'),
  });
  const homeLandmark = distanceMap.landmarks.find((landmark) => landmark.id === 'home') ?? null;
  const targetLandmark = distanceMap.landmarks.find((landmark) => landmark.label === distanceMap.targetLabel) ?? null;
  const homeDisplayLandmark = homeLandmark ? relocateDistanceMapLandmark(homeLandmark, DISTANCE_HOME_X, DISTANCE_LANDMARK_Y) : null;
  const targetDisplayLandmark = targetLandmark ? relocateDistanceMapLandmark(targetLandmark, DISTANCE_TARGET_X, DISTANCE_LANDMARK_Y) : null;
  const referencePreviewWidth = Math.min(routeWidth / totalUnits, 136);
  const unitCenters = displayRoutePoints.slice(0, -1).map((point, index) => getDistanceMapMidpoint(point, displayRoutePoints[index + 1]));
  const filledEndX = routeStart.x + filledDistance;

  return (
    <DistanceProblemShell
      leftBadge={(
        <DistanceStrategyBadge
          label="단위화"
          cue="1칸=500m"
          containerClassName="bg-emerald-50"
          chipClassName="bg-emerald-500 text-white"
          cueClassName="text-emerald-900"
        />
      )}
      rightBadge={(
        <div className="rounded-full bg-white px-4 py-2 text-lg font-black text-slate-900 sm:text-xl">
          집 → {distanceMap.targetLabel}
        </div>
      )}
      onReset={resetMeasure}
      panelClassName="bg-emerald-50"
    >
      <DistanceWorksheetLayout
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      >
        <svg
          ref={svgRef}
          viewBox={'0 0 ' + DISTANCE_CARD_VIEWBOX_WIDTH + ' ' + DISTANCE_CARD_VIEWBOX_HEIGHT}
          className="block h-full w-full touch-none"
          role="img"
          aria-label="unitize distance card"
        >
          <rect x="0" y="0" width="640" height="410" rx="30" fill="#f0fdf4" />

          {renderDistanceReferenceBadge({
            x: 28,
            y: 24,
            previewWidth: referencePreviewWidth,
            fill: '#f0fdf4',
            stroke: '#86efac',
            textColor: '#166534',
            lineColor: '#34d399',
            lineStroke: '#047857',
          })}

          {homeDisplayLandmark ? renderDistanceMapLandmark(homeDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}
          {targetDisplayLandmark ? renderDistanceMapLandmark(targetDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}

          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={routeEnd.x}
            y2={DISTANCE_ROUTE_Y}
            stroke="#d1fae5"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
          />
          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={filledEndX}
            y2={DISTANCE_ROUTE_Y}
            stroke="#10b981"
            strokeWidth={DISTANCE_PROGRESS_STROKE_WIDTH}
            strokeLinecap="round"
          />

          {unitCenters.map((point, index) => {
            const unitNumber = index + 1;
            const isCompleted = filledUnits >= unitNumber;
            return (
              <g key={'unit-marker-' + unitNumber} pointerEvents="none">
                <circle
                  cx={point.x}
                  cy={DISTANCE_ROUTE_Y}
                  r={DISTANCE_STEP_BUBBLE_RADIUS}
                  fill={isCompleted ? '#10b981' : '#ffffff'}
                  stroke={isCompleted ? '#047857' : '#fb923c'}
                  strokeWidth="4"
                />
                <text
                  x={point.x}
                  y={DISTANCE_ROUTE_Y + 7}
                  textAnchor="middle"
                  fontSize="21"
                  fontWeight="900"
                  fill={isCompleted ? '#ffffff' : '#c2410c'}
                >
                  {unitNumber}
                </text>
              </g>
            );
          })}

          <polyline
            points={formatDistanceMapPoints(displayRoutePoints)}
            fill="none"
            stroke="transparent"
            strokeWidth="76"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ touchAction: 'none', cursor: 'grab' }}
            {...getPathDragProps()}
          />
        </svg>
      </DistanceWorksheetLayout>
    </DistanceProblemShell>
  );
}

function DistanceMapProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceMapProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  if (distanceMap.strategy === 'compare') {
    return (
      <DistanceCompareProblemCard
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      />
    );
  }

  if (distanceMap.strategy === 'chunk') {
    return (
      <DistanceChunkProblemCard
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <DistanceUnitizeProblemCard
      distanceMap={distanceMap}
      answerValue={answerValue}
      onAnswerChange={onAnswerChange}
      onSubmit={onSubmit}
    />
  );
}

type ShapeTool = 'point' | 'line' | 'polygon';
type ShapeLineMode = 'segment' | 'line' | 'ray';
type ShapeToolMenu = 'line' | 'polygon' | null;
interface ShapePoint { x: number; y: number; label: string; }
interface ShapeLine { start: ShapePoint; end: ShapePoint; mode: ShapeLineMode; }
const SHAPE_LABELS = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ'];
const SHAPE_GRID = 56;
const SHAPE_ORIGIN = { x: 52, y: 40 };

function ShapePointView({ point }: { point: ShapePoint }) {
  return (
    <g pointerEvents="none">
      <circle cx={point.x} cy={point.y} r="8" fill="#fff" stroke="#2563eb" strokeWidth="4" />
      <circle cx={point.x} cy={point.y} r="3" fill="#2563eb" />
      <text x={point.x + 12} y={point.y - 10} fontSize="17" fontWeight="900" fill="#1e3a8a" stroke="#fff" strokeWidth="4" paintOrder="stroke">{point.label}</text>
    </g>
  );
}

function ShapeRainGlyph({ kind, variant = 0 }: { kind: ShapeRainShapeKind; variant?: number }) {
  const lineStroke = '#f97316';
  const pointFill = '#64748b';
  const pointStroke = '#111827';
  const guideStroke = '#2563eb';
  const polygonStroke = '#ef5da8';
  const polygonFill = '#bbf7d0';
  const largePointRadius = 10;
  const mediumPointRadius = 9;
  const smallPointRadius = 7.5;
  const largePointStrokeWidth = 4.5;
  const mediumPointStrokeWidth = 4;
  const smallPointStrokeWidth = 3.5;
  const normalizedVariant = Math.abs(variant) % 3;
  const segmentVariants = [
    [[48, 84], [132, 52]],
    [[40, 56], [138, 90]],
    [[58, 98], [124, 34]],
  ] as const;
  const lineVariants = [
    { ends: [[22, 103], [158, 33]], points: [[62, 82], [118, 54]] },
    { ends: [[24, 44], [156, 92]], points: [[64, 59], [116, 78]] },
    { ends: [[37, 112], [143, 24]], points: [[68, 86], [112, 50]] },
  ] as const;
  const rayVariants = [
    { start: [48, 88], mid: [108, 60], end: [158, 36] },
    { start: [42, 48], mid: [98, 70], end: [154, 92] },
    { start: [58, 98], mid: [91, 62], end: [129, 22] },
  ] as const;
  const angleVariants = [
    { vertex: [52, 94], a: [146, 94], b: [112, 34], arc: 'M84 94 A34 34 0 0 0 76 70' },
    { vertex: [60, 92], a: [139, 54], b: [70, 26], arc: 'M88 79 A32 32 0 0 0 64 60' },
    { vertex: [116, 98], a: [42, 94], b: [148, 40], arc: 'M88 97 A30 30 0 0 1 132 74' },
  ] as const;
  const rightAngleVariants = [
    { vertex: [56, 100], a: [142, 100], b: [56, 30], mark: 'M56 70 H86 V100' },
    { vertex: [126, 96], a: [46, 96], b: [126, 36], mark: 'M126 70 H100 V96' },
    { vertex: [62, 42], a: [62, 108], b: [142, 42], mark: 'M62 68 H88 V42' },
  ] as const;
  const rightTriangleVariants = [
    { path: 'M48 103 H140 L48 30 Z', mark: 'M48 76 H75 V103', points: [[48, 103], [140, 103], [48, 30]] },
    { path: 'M42 92 H148 L148 34 Z', mark: 'M121 92 V65 H148', points: [[42, 92], [148, 92], [148, 34]] },
    { path: 'M58 112 V30 L132 112 Z', mark: 'M58 86 H84 V112', points: [[58, 112], [58, 30], [132, 112]] },
  ] as const;
  const rectangleVariants = [
    { rect: [34, 38, 112, 66], marks: ['M34 56 H52 V38', 'M128 38 V56 H146', 'M146 86 H128 V104', 'M52 104 V86 H34'], points: [[34, 38], [146, 38], [146, 104], [34, 104]] },
    { rect: [42, 30, 96, 78], marks: ['M42 48 H60 V30', 'M120 30 V48 H138', 'M138 90 H120 V108', 'M60 108 V90 H42'], points: [[42, 30], [138, 30], [138, 108], [42, 108]] },
    { rect: [28, 48, 124, 52], marks: ['M28 65 H45 V48', 'M135 48 V65 H152', 'M152 83 H135 V100', 'M45 100 V83 H28'], points: [[28, 48], [152, 48], [152, 100], [28, 100]] },
  ] as const;
  const squareVariants = [
    { rect: [52, 28, 84, 84], marks: ['M52 47 H71 V28', 'M117 28 V47 H136', 'M136 93 H117 V112', 'M71 112 V93 H52'], points: [[52, 28], [136, 28], [136, 112], [52, 112]] },
    { rect: [42, 34, 76, 76], marks: ['M42 52 H60 V34', 'M100 34 V52 H118', 'M118 92 H100 V110', 'M60 110 V92 H42'], points: [[42, 34], [118, 34], [118, 110], [42, 110]] },
    { rect: [62, 24, 88, 88], marks: ['M62 44 H82 V24', 'M130 24 V44 H150', 'M150 92 H130 V112', 'M82 112 V92 H62'], points: [[62, 24], [150, 24], [150, 112], [62, 112]] },
  ] as const;
  const segment = segmentVariants[normalizedVariant];
  const line = lineVariants[normalizedVariant];
  const ray = rayVariants[normalizedVariant];
  const angle = angleVariants[normalizedVariant];
  const rightAngle = rightAngleVariants[normalizedVariant];
  const rightTriangle = rightTriangleVariants[normalizedVariant];
  const rectangle = rectangleVariants[normalizedVariant];
  const square = squareVariants[normalizedVariant];

  return (
    <svg viewBox="0 0 180 136" className="h-full w-full drop-shadow-[0_12px_20px_rgba(15,23,42,0.34)]" aria-hidden="true">
      <rect x="5" y="5" width="170" height="126" rx="20" fill="#ffffff" stroke="#eff6ff" strokeWidth="7" />
      <rect x="15" y="15" width="150" height="106" rx="14" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
      {kind === 'segment' ? (
        <>
          <line x1={segment[0][0]} y1={segment[0][1]} x2={segment[1][0]} y2={segment[1][1]} stroke={lineStroke} strokeWidth="10" strokeLinecap="round" />
          {segment.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={largePointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={largePointStrokeWidth} />)}
        </>
      ) : kind === 'line' ? (
        <>
          <line x1={line.ends[0][0]} y1={line.ends[0][1]} x2={line.ends[1][0]} y2={line.ends[1][1]} stroke={lineStroke} strokeWidth="10" strokeLinecap="round" />
          {line.points.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={mediumPointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={mediumPointStrokeWidth} />)}
          {line.ends.map(([x, y]) => <circle key={`${x}-${y}-end`} cx={x} cy={y} r="5" fill={lineStroke} />)}
        </>
      ) : kind === 'ray' ? (
        <>
          <line x1={ray.start[0]} y1={ray.start[1]} x2={ray.end[0]} y2={ray.end[1]} stroke={lineStroke} strokeWidth="10" strokeLinecap="round" />
          {[ray.start, ray.mid].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={largePointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={largePointStrokeWidth} />)}
          <circle cx={ray.end[0]} cy={ray.end[1]} r="5" fill={lineStroke} />
        </>
      ) : kind === 'angle' ? (
        <>
          <line x1={angle.vertex[0]} y1={angle.vertex[1]} x2={angle.a[0]} y2={angle.a[1]} stroke={lineStroke} strokeWidth="10" strokeLinecap="round" />
          <line x1={angle.vertex[0]} y1={angle.vertex[1]} x2={angle.b[0]} y2={angle.b[1]} stroke={lineStroke} strokeWidth="10" strokeLinecap="round" />
          <path d={angle.arc} fill="none" stroke={guideStroke} strokeWidth="6" strokeLinecap="round" />
          <circle cx={angle.vertex[0]} cy={angle.vertex[1]} r={largePointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={largePointStrokeWidth} />
          {[angle.a, angle.b].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={smallPointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={smallPointStrokeWidth} />)}
        </>
      ) : kind === 'rightAngle' ? (
        <>
          <line x1={rightAngle.vertex[0]} y1={rightAngle.vertex[1]} x2={rightAngle.a[0]} y2={rightAngle.a[1]} stroke={lineStroke} strokeWidth="10" strokeLinecap="round" />
          <line x1={rightAngle.vertex[0]} y1={rightAngle.vertex[1]} x2={rightAngle.b[0]} y2={rightAngle.b[1]} stroke={lineStroke} strokeWidth="10" strokeLinecap="round" />
          <path d={rightAngle.mark} fill="none" stroke={guideStroke} strokeWidth="7" strokeLinecap="square" />
          <circle cx={rightAngle.vertex[0]} cy={rightAngle.vertex[1]} r={largePointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={largePointStrokeWidth} />
          {[rightAngle.a, rightAngle.b].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={smallPointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={smallPointStrokeWidth} />)}
        </>
      ) : kind === 'rightTriangle' ? (
        <>
          <path d={rightTriangle.path} fill={polygonFill} stroke={polygonStroke} strokeWidth="8" strokeLinejoin="round" />
          <path d={rightTriangle.mark} fill="none" stroke={guideStroke} strokeWidth="6" />
          {rightTriangle.points.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={smallPointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={smallPointStrokeWidth} />)}
        </>
      ) : kind === 'rectangle' ? (
        <>
          <rect x={rectangle.rect[0]} y={rectangle.rect[1]} width={rectangle.rect[2]} height={rectangle.rect[3]} rx="2" fill={polygonFill} stroke={polygonStroke} strokeWidth="8" />
          {rectangle.marks.map((mark) => <path key={mark} d={mark} fill="none" stroke={guideStroke} strokeWidth="5" strokeLinecap="square" />)}
          {rectangle.points.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={smallPointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={smallPointStrokeWidth} />)}
        </>
      ) : (
        <>
          <rect x={square.rect[0]} y={square.rect[1]} width={square.rect[2]} height={square.rect[3]} rx="2" fill={polygonFill} stroke={polygonStroke} strokeWidth="8" />
          {square.marks.map((mark) => <path key={mark} d={mark} fill="none" stroke={guideStroke} strokeWidth="5" strokeLinecap="square" />)}
          {square.points.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={smallPointRadius} fill={pointFill} stroke={pointStroke} strokeWidth={smallPointStrokeWidth} />)}
        </>
      )}
    </svg>
  );
}

type ShapeRainDrop = {
  id: string;
  shape: ShapeRainShapeKind;
  left: number;
  variant: number;
  durationMs: number;
};

type ShapeRainDropState = {
  activeDrops: ShapeRainDrop[];
  nextDropIndex: number;
};

function createShapeRainDrops(shapeRain: ShapeRainProblemData, previousFirstShape?: ShapeRainShapeKind): ShapeRainDrop[] {
  const shuffledShapes = shuffleValues(shapeRain.shapes);
  if (previousFirstShape && shuffledShapes.length > 1 && shuffledShapes[0] === previousFirstShape) {
    const replacementIndex = shuffledShapes.findIndex((shape) => shape !== previousFirstShape);
    if (replacementIndex > 0) {
      [shuffledShapes[0], shuffledShapes[replacementIndex]] = [shuffledShapes[replacementIndex], shuffledShapes[0]];
    }
  }

  const dropRunId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  const lanes = shuffleValues([18, 50, 82]);
  return shuffledShapes.map((shape, index) => ({
    id: `${shapeRain.wave}-${dropRunId}-${index}-${shape}`,
    shape,
    left: lanes[index % lanes.length] + (Math.random() * 4 - 2),
    variant: (index + randomIntInRange(0, 2)) % 3,
    durationMs: Math.max(16000, shapeRain.fallDurationMs * (1 - (index / Math.max(1, shapeRain.targetCount - 1)) * 0.42)),
  }));
}

function ShapeRainGameCard({
  shapeRain,
  playAnimationSound,
  onClear,
  onFail,
}: {
  shapeRain: ShapeRainProblemData;
  playAnimationSound: (effectName: SoundEffectName, options?: SoundPlaybackOptions) => void;
  onClear: () => void;
  onFail: () => void;
}) {
  const [answerValue, setAnswerValue] = useState('');
  const [blockedCount, setBlockedCount] = useState(0);
  const [status, setStatus] = useState<'playing' | 'cleared' | 'failed'>('playing');
  const [isWrongAnswerFeedback, setIsWrongAnswerFeedback] = useState(false);
  const [showStartHint, setShowStartHint] = useState(true);
  const [wrongAnswerShakeKey, setWrongAnswerShakeKey] = useState(0);
  const [dropAreaHeight, setDropAreaHeight] = useState(0);
  const [drops, setDrops] = useState<ShapeRainDrop[]>(() => createShapeRainDrops(shapeRain));
  const [{ activeDrops, nextDropIndex }, setDropState] = useState<ShapeRainDropState>({ activeDrops: [], nextDropIndex: 0 });
  const dropAreaRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrongAnswerFeedbackTimeoutRef = useRef<number | null>(null);
  const didResolveRef = useRef(false);
  const activeDropIdsRef = useRef<Set<string>>(new Set());
  const isDropAreaMeasured = dropAreaHeight > 0;
  const dropHeight = dropAreaHeight >= 520 ? 150 : 128;
  const groundHeight = 52;
  const fallTargetY = Math.max(0, dropAreaHeight - groundHeight - dropHeight + 10);

  const resolveFail = () => {
    if (didResolveRef.current) {
      return;
    }
    didResolveRef.current = true;
    setStatus('failed');
    onFail();
  };

  const resolveClear = () => {
    if (didResolveRef.current) {
      return;
    }
    didResolveRef.current = true;
    setStatus('cleared');
    onClear();
  };

  const restartWave = () => {
    didResolveRef.current = false;
    setDrops((currentDrops) => createShapeRainDrops(shapeRain, currentDrops[0]?.shape));
    setDropState({ activeDrops: [], nextDropIndex: 0 });
    setAnswerValue('');
    setBlockedCount(0);
    setShowStartHint(true);
    setStatus('playing');
    window.setTimeout(() => inputRef.current?.focus(), 40);
  };

  const submitAnswer = () => {
    if (activeDrops.length === 0 || status !== 'playing') {
      return;
    }

    const normalizedAnswer = normalizeShapeRainAnswer(answerValue);
    const matchedDrop = activeDrops.find((drop) => {
      const expectedAnswers = [
        normalizeShapeRainAnswer(SHAPE_RAIN_LABELS[drop.shape]),
        ...(drop.shape === 'square' ? [normalizeShapeRainAnswer('직사각형')] : []),
      ];
      return expectedAnswers.includes(normalizedAnswer);
    });
    if (!matchedDrop) {
      playAnimationSound('wrong', { gainMultiplier: 0.46, detune: -18 });
      setWrongAnswerShakeKey((currentKey) => currentKey + 1);
      setIsWrongAnswerFeedback(true);
      if (wrongAnswerFeedbackTimeoutRef.current !== null) {
        window.clearTimeout(wrongAnswerFeedbackTimeoutRef.current);
      }
      wrongAnswerFeedbackTimeoutRef.current = window.setTimeout(() => {
        setIsWrongAnswerFeedback(false);
        wrongAnswerFeedbackTimeoutRef.current = null;
      }, 360);
      return;
    }

    const nextBlockedCount = blockedCount + 1;
    setBlockedCount(nextBlockedCount);
    setAnswerValue('');
    playAnimationSound('submit', { gainMultiplier: 0.62, detune: 26 });

    if (nextBlockedCount >= shapeRain.targetCount) {
      resolveClear();
      return;
    }

    setDropState((currentState) => ({
      ...currentState,
      activeDrops: currentState.activeDrops.filter((drop) => drop.id !== matchedDrop.id),
    }));
  };

  useEffect(() => {
    activeDropIdsRef.current = new Set(activeDrops.map((drop) => drop.id));
  }, [activeDrops]);

  useEffect(() => {
    setDrops(createShapeRainDrops(shapeRain));
    setDropState({ activeDrops: [], nextDropIndex: 0 });
    setAnswerValue('');
    setBlockedCount(0);
    setShowStartHint(true);
    setIsWrongAnswerFeedback(false);
    setStatus('playing');
    didResolveRef.current = false;
    window.setTimeout(() => inputRef.current?.focus(), 80);
  }, [shapeRain]);

  useEffect(() => {
    if (!showStartHint || status !== 'playing') {
      return;
    }

    const timeoutId = window.setTimeout(() => setShowStartHint(false), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [showStartHint, status]);

  useEffect(() => () => {
    if (wrongAnswerFeedbackTimeoutRef.current !== null) {
      window.clearTimeout(wrongAnswerFeedbackTimeoutRef.current);
    }
  }, []);

  useEffect(() => {
    if (status !== 'playing' || nextDropIndex >= drops.length) {
      return;
    }

    const availableSlots = Math.max(0, shapeRain.maxActiveDrops - activeDrops.length);
    if (availableSlots === 0) {
      return;
    }

    const spawnDelayMs = activeDrops.length === 0 ? 120 : shapeRain.spawnIntervalMs;
    const timeoutId = window.setTimeout(() => {
      setDropState((currentState) => {
        const currentAvailableSlots = Math.max(0, shapeRain.maxActiveDrops - currentState.activeDrops.length);
        if (currentAvailableSlots === 0 || currentState.nextDropIndex >= drops.length) {
          return currentState;
        }

        const isFirstSpawn = currentState.nextDropIndex === 0;
        const shouldSpawnPair = !isFirstSpawn && Boolean(shapeRain.pairSpawnEvery) && currentState.nextDropIndex % Number(shapeRain.pairSpawnEvery) === 0;
        const requestedCount = isFirstSpawn ? shapeRain.initialDropCount : shouldSpawnPair ? 2 : 1;
        const spawnCount = Math.min(currentAvailableSlots, requestedCount, drops.length - currentState.nextDropIndex);
        const nextDrops = drops.slice(currentState.nextDropIndex, currentState.nextDropIndex + spawnCount);

        return {
          activeDrops: [...currentState.activeDrops, ...nextDrops],
          nextDropIndex: currentState.nextDropIndex + spawnCount,
        };
      });
    }, spawnDelayMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeDrops.length, drops, nextDropIndex, shapeRain.initialDropCount, shapeRain.maxActiveDrops, shapeRain.pairSpawnEvery, shapeRain.spawnIntervalMs, status]);

  useEffect(() => {
    const dropAreaElement = dropAreaRef.current;
    if (!dropAreaElement || typeof ResizeObserver === 'undefined') {
      return;
    }

    const syncDropAreaHeight = () => {
      const nextHeight = dropAreaElement.getBoundingClientRect().height;
      setDropAreaHeight((previousHeight) => (
        Math.abs(previousHeight - nextHeight) < 1 ? previousHeight : nextHeight
      ));
    };
    syncDropAreaHeight();
    const resizeObserver = new ResizeObserver(syncDropAreaHeight);
    resizeObserver.observe(dropAreaElement);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (status === 'playing' && activeDrops.length > 0) {
      playAnimationSound('tick', { gainMultiplier: 0.2, detune: -80 + shapeRain.wave * 18 });
    }
  }, [activeDrops.length, playAnimationSound, shapeRain.wave, status]);

  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-1 overflow-hidden text-slate-950">
      <div ref={dropAreaRef} className="relative min-h-0 flex-1 overflow-hidden rounded-[1.6rem] border-4 border-slate-600 bg-[linear-gradient(180deg,#0f172a_0%,#1e3a8a_54%,#14532d_100%)] shadow-inner">
        <div className="absolute left-0 right-0 top-0 h-20 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.42),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.3),transparent_16%)] opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-12 border-t-4 border-red-500 bg-[linear-gradient(180deg,#7f1d1d,#450a0a)] shadow-[0_-12px_30px_rgba(239,68,68,0.32)]" />
        <div className="absolute inset-x-0 bottom-10 h-2 bg-[repeating-linear-gradient(135deg,#facc15_0_18px,#111827_18px_36px)] shadow-[0_0_22px_rgba(250,204,21,0.65)]" />
        <div className="absolute inset-x-7 bottom-[3.35rem] h-1.5 rounded-full bg-red-400 shadow-[0_0_20px_rgba(248,113,113,0.9),0_0_46px_rgba(239,68,68,0.5)]" />
        <div className="absolute right-3 top-3 z-20 rounded-2xl border-2 border-emerald-400/80 bg-slate-950/92 px-3 py-2 text-right shadow-[0_8px_20px_rgba(15,23,42,0.3)] sm:right-4 sm:top-4 sm:px-4">
          <div className="text-xl font-black text-white sm:text-2xl">{blockedCount} / {shapeRain.targetCount}</div>
        </div>
        {status === 'playing' && blockedCount === 0 && showStartHint ? (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-5 text-center">
            <div className="rounded-3xl border-2 border-white/20 bg-slate-950/72 px-6 py-4 shadow-2xl backdrop-blur-sm">
              <p className="break-keep text-2xl font-black text-white sm:text-4xl">도형의 이름을 적으세요.</p>
            </div>
          </div>
        ) : null}

        {status === 'playing' && isDropAreaMeasured ? activeDrops.map((activeDrop) => {
          const fastEntryDurationMs = Math.min(650, Math.max(260, activeDrop.durationMs * 0.026));
          const fastEntryProgress = clamp(fastEntryDurationMs / activeDrop.durationMs, 0.012, 0.045);
          const visibleEntryY = Math.min(64, Math.max(24, fallTargetY * 0.09));

          return (
            <motion.div
              key={`${activeDrop.id}-${Math.round(dropAreaHeight)}`}
              initial={{ y: -dropHeight - 8, scale: 1, rotate: -2, opacity: 1 }}
              animate={{ y: [-dropHeight - 8, visibleEntryY, fallTargetY], scale: 1, rotate: [-2, -1, 2], opacity: 1 }}
              transition={{ duration: activeDrop.durationMs / 1000, times: [0, fastEntryProgress, 1], ease: 'linear' }}
              onAnimationComplete={() => {
                if (status === 'playing' && activeDropIdsRef.current.has(activeDrop.id)) {
                  resolveFail();
                }
              }}
              className="absolute top-0 z-10 h-32 w-44 sm:h-[9.4rem] sm:w-[12.4rem]"
              style={{ left: `${activeDrop.left}%`, translateX: '-50%' }}
            >
              <ShapeRainGlyph kind={activeDrop.shape} variant={activeDrop.variant} />
            </motion.div>
          );
        }) : null}

        {status !== 'playing' ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/46 p-5 text-center">
            <div className="rounded-[1.6rem] border-2 border-white/18 bg-slate-950/86 px-6 py-5 shadow-2xl">
              <p className="break-keep text-3xl font-black text-white sm:text-4xl">
                {status === 'cleared' ? '방어 성공!' : '실패'}
              </p>
              {status === 'failed' ? (
                <button
                  type="button"
                  onClick={restartWave}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-lg font-black text-slate-950 shadow-lg hover:bg-emerald-400"
                >
                  <RotateCcw size={20} /> 다시 시작
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <motion.div
        key={`shape-rain-answer-${wrongAnswerShakeKey}`}
        animate={isWrongAnswerFeedback ? { x: [0, -9, 8, -6, 5, 0] } : { x: 0 }}
        transition={{ duration: 0.34, ease: 'easeOut' }}
        className="grid shrink-0 gap-2 sm:grid-cols-[1fr_auto] sm:items-stretch"
      >
        <div
          className={`flex min-w-0 items-center rounded-2xl border-4 px-4 transition-colors ${
            isWrongAnswerFeedback
              ? 'border-red-400 bg-red-950'
              : 'border-slate-600 bg-slate-800 focus-within:border-emerald-400'
          }`}
        >
          <input
            ref={inputRef}
            value={answerValue}
            disabled={status !== 'playing'}
            onChange={(event) => setAnswerValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                event.preventDefault();
                submitAnswer();
              }
            }}
            className="min-w-0 flex-1 bg-transparent py-3 text-center text-2xl font-black text-white outline-none placeholder:text-slate-400 disabled:text-slate-500 sm:text-3xl"
            placeholder="도형 이름 입력"
          />
        </div>
        <button
          type="button"
          disabled={status !== 'playing' || answerValue.trim().length === 0}
          onClick={submitAnswer}
          className={`inline-flex min-h-[4rem] items-center justify-center gap-2 rounded-2xl px-6 text-xl font-black shadow-lg transition disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300 ${
            isWrongAnswerFeedback
              ? 'bg-red-500 text-white'
              : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
          }`}
        >
          <Sword size={22} /> 막기
        </button>
      </motion.div>

    </div>
  );
}

function ShapeDrawProblemCard({ shapeDraw, answerValue, onAnswerChange, onSubmit }: { shapeDraw: ShapeDrawProblemData; answerValue: string; onAnswerChange: (value: string) => void; onSubmit: () => void }) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [tool, setTool] = useState<ShapeTool>('point');
  const [openToolMenu, setOpenToolMenu] = useState<ShapeToolMenu>(null);
  const [lineMode, setLineMode] = useState<ShapeLineMode>('segment');
  const [polygonSides, setPolygonSides] = useState<3 | 4>(3);
  const [points, setPoints] = useState<ShapePoint[]>([]);
  const [lines, setLines] = useState<ShapeLine[]>([]);
  const [polygons, setPolygons] = useState<ShapePoint[][]>([]);
  const [lineStart, setLineStart] = useState<ShapePoint | null>(null);
  const [pendingPolygon, setPendingPolygon] = useState<ShapePoint[]>([]);
  const [history, setHistory] = useState<Array<'point' | 'lineStart' | 'line' | 'polygonPoint' | 'polygon'>>([]);
  const allPoints = [...points, ...lines.flatMap((line) => [line.start, line.end]), ...polygons.flat(), ...pendingPolygon, ...(lineStart ? [lineStart] : [])];
  const dist = (a: ShapePoint, b: ShapePoint) => Math.hypot(a.x - b.x, a.y - b.y);
  const dotAt = (v: ShapePoint, a: ShapePoint, b: ShapePoint) => (a.x - v.x) * (b.x - v.x) + (a.y - v.y) * (b.y - v.y);
  const rightAt = (v: ShapePoint, a: ShapePoint, b: ShapePoint) => Math.abs(dotAt(v, a, b)) < 160;
  const isRectanglePolygon = (polygon: ShapePoint[]) =>
    polygon.length === 4 && polygon.every((point, index) => rightAt(point, polygon[(index + 3) % 4], polygon[(index + 1) % 4]));
  const isSquarePolygon = (polygon: ShapePoint[]) => {
    if (!isRectanglePolygon(polygon)) return false;
    const sideLengths = polygon.map((point, index) => dist(point, polygon[(index + 1) % 4]));
    return Math.max(...sideLengths) - Math.min(...sideLengths) < 16;
  };
  const snap = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    const screenPoint = svg?.createSVGPoint();
    if (screenPoint && svg) {
      screenPoint.x = clientX;
      screenPoint.y = clientY;
    }
    const svgPoint = screenPoint && svg?.getScreenCTM()
      ? screenPoint.matrixTransform(svg.getScreenCTM()!.inverse())
      : null;
    const rawX = svgPoint?.x ?? clientX;
    const rawY = svgPoint?.y ?? clientY;
    const x = Math.max(SHAPE_ORIGIN.x, Math.min(612, SHAPE_ORIGIN.x + Math.round((rawX - SHAPE_ORIGIN.x) / SHAPE_GRID) * SHAPE_GRID));
    const y = Math.max(SHAPE_ORIGIN.y, Math.min(320, SHAPE_ORIGIN.y + Math.round((rawY - SHAPE_ORIGIN.y) / SHAPE_GRID) * SHAPE_GRID));
    return allPoints.find((point) => Math.hypot(point.x - x, point.y - y) < 8) ?? { x, y, label: SHAPE_LABELS[new Set(allPoints.map((point) => `${point.x}:${point.y}`)).size % SHAPE_LABELS.length] };
  };
  const undo = () => {
    const latest = history.at(-1);
    setHistory((previous) => previous.slice(0, -1));
    if (latest === 'point') setPoints((previous) => previous.slice(0, -1));
    if (latest === 'lineStart') setLineStart(null);
    if (latest === 'line') setLines((previous) => previous.slice(0, -1));
    if (latest === 'polygonPoint') setPendingPolygon((previous) => previous.slice(0, -1));
    if (latest === 'polygon') setPolygons((previous) => previous.slice(0, -1));
  };
  const resetBoard = () => {
    setPoints([]);
    setLines([]);
    setPolygons([]);
    setLineStart(null);
    setPendingPolygon([]);
    setHistory([]);
    setOpenToolMenu(null);
  };
  const handleShapeAttack = () => {
    const isSuccessfulShapeAnswer = answerValue === shapeDraw.answerToken;
    onSubmit();
    if (isSuccessfulShapeAnswer) {
      resetBoard();
      onAnswerChange('');
    }
  };
  const handleDown = (event: React.PointerEvent<SVGSVGElement>) => {
    setOpenToolMenu(null);
    const point = snap(event.clientX, event.clientY);
    if (tool === 'point') {
      if (!points.some((existing) => dist(existing, point) < 8)) {
        setPoints((previous) => [...previous, point]);
        setHistory((previous) => [...previous, 'point']);
      }
      return;
    }
    if (tool === 'polygon') {
      if (pendingPolygon.some((existing) => dist(existing, point) < 8)) return;
      const next = [...pendingPolygon, point];
      if (next.length >= polygonSides) {
        setPolygons((previous) => [...previous, next]);
        setPendingPolygon([]);
        setHistory((previous) => [...previous.filter((action) => action !== 'polygonPoint'), 'polygon']);
      } else {
        setPendingPolygon(next);
        setHistory((previous) => [...previous, 'polygonPoint']);
      }
      return;
    }
    if (!lineStart) {
      setLineStart(point);
      setHistory((previous) => [...previous, 'lineStart']);
      return;
    }
    if (dist(lineStart, point) < 24) return;
    setLines((previous) => [...previous, { start: lineStart, end: point, mode: lineMode }]);
    setLineStart(null);
    setHistory((previous) => [...previous.filter((action) => action !== 'lineStart'), 'line']);
  };
  const lineEnds = (line: ShapeLine) => {
    if (line.mode === 'segment') return { a: line.start, b: line.end };
    const dx = line.end.x - line.start.x;
    const dy = line.end.y - line.start.y;
    const len = Math.max(1, Math.hypot(dx, dy));
    if (line.mode === 'ray') return { a: line.start, b: { ...line.end, x: line.start.x + (dx / len) * 900, y: line.start.y + (dy / len) * 900 } };
    return { a: { ...line.start, x: line.start.x - (dx / len) * 900, y: line.start.y - (dy / len) * 900 }, b: { ...line.end, x: line.start.x + (dx / len) * 900, y: line.start.y + (dy / len) * 900 } };
  };
  const isTargetLineConstruction = (line: ShapeLine, mode: ShapeLineMode) => {
    if (line.mode !== mode) return false;
    if (mode === 'ray') {
      const usesTargetPoints = [line.start.label, line.end.label].includes(SHAPE_READ_FIRST_POINT_LABEL) &&
        [line.start.label, line.end.label].includes(SHAPE_READ_SECOND_POINT_LABEL);
      if (!usesTargetPoints) return false;
      return !shapeDraw.title.includes('점 ㄱ') || line.start.label === SHAPE_READ_FIRST_POINT_LABEL;
    }
    return [line.start.label, line.end.label].includes(SHAPE_READ_FIRST_POINT_LABEL) &&
      [line.start.label, line.end.label].includes(SHAPE_READ_SECOND_POINT_LABEL);
  };
  const rightAngleMarkers = (() => {
    const markers: Array<{ key: string; vertex: ShapePoint; a: ShapePoint; b: ShapePoint }> = [];
    const seen = new Set<string>();
    const addMarker = (vertex: ShapePoint, a: ShapePoint, b: ShapePoint, source: string) => {
      const cross = Math.abs((a.x - vertex.x) * (b.y - vertex.y) - (a.y - vertex.y) * (b.x - vertex.x));
      if (cross < 300 || !rightAt(vertex, a, b)) return;
      const key = `${Math.round(vertex.x)}:${Math.round(vertex.y)}`;
      if (seen.has(key)) return;
      seen.add(key);
      markers.push({ key, vertex, a, b });
    };

    polygons.forEach((polygon, polygonIndex) => {
      polygon.forEach((vertex, vertexIndex) => {
        addMarker(
          vertex,
          polygon[(vertexIndex + polygon.length - 1) % polygon.length],
          polygon[(vertexIndex + 1) % polygon.length],
          `poly-${polygonIndex}-${vertexIndex}`,
        );
      });
    });

    lines.forEach((first, firstIndex) => {
      lines.slice(firstIndex + 1).forEach((second, secondOffset) => {
        const secondIndex = firstIndex + secondOffset + 1;
        const vertex = [first.start, first.end].find((point) => [second.start, second.end].some((other) => dist(point, other) < 8));
        if (!vertex) return;
        const a = dist(first.start, vertex) < 8 ? first.end : first.start;
        const b = dist(second.start, vertex) < 8 ? second.end : second.start;
        addMarker(vertex, a, b, `line-${firstIndex}-${secondIndex}`);
      });
    });

    return markers;
  })();
  const renderRightAngleMarker = ({ key, vertex, a, b }: { key: string; vertex: ShapePoint; a: ShapePoint; b: ShapePoint }) => {
    const offset = 3;
    const size = 10;
    const vectorA = { x: a.x - vertex.x, y: a.y - vertex.y };
    const vectorB = { x: b.x - vertex.x, y: b.y - vertex.y };
    const lengthA = Math.max(1, Math.hypot(vectorA.x, vectorA.y));
    const lengthB = Math.max(1, Math.hypot(vectorB.x, vectorB.y));
    const unitA = { x: vectorA.x / lengthA, y: vectorA.y / lengthA };
    const unitB = { x: vectorB.x / lengthB, y: vectorB.y / lengthB };
    const inner = { x: vertex.x + unitA.x * offset + unitB.x * offset, y: vertex.y + unitA.y * offset + unitB.y * offset };
    const p1 = { x: inner.x + unitA.x * size, y: inner.y + unitA.y * size };
    const corner = { x: p1.x + unitB.x * size, y: p1.y + unitB.y * size };
    const p2 = { x: inner.x + unitB.x * size, y: inner.y + unitB.y * size };
    const path = `M ${p1.x} ${p1.y} L ${corner.x} ${corner.y} L ${p2.x} ${p2.y}`;
    return (
      <g key={key} pointerEvents="none">
        <path d={path} fill="none" stroke="#fff" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d={path} fill="none" stroke="#ef4444" strokeWidth="3.2" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d={path} fill="none" stroke="#b91c1c" strokeWidth="1.2" strokeLinejoin="miter" strokeLinecap="butt" />
      </g>
    );
  };
  const hasMixedShapeKinds = (() => {
    if (shapeDraw.task === 'identify') return false;
    const hasLine = lines.length > 0;
    const hasPolygon = polygons.length > 0;
    if (shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray') {
      return hasPolygon || new Set(lines.map((line) => line.mode)).size > 1;
    }
    if (shapeDraw.mode === 'angle' || shapeDraw.mode === 'rightAngle') {
      const hasRay = lines.some((line) => line.mode === 'ray');
      const hasOtherLine = lines.some((line) => line.mode !== 'ray');
      return hasPolygon || (hasRay && hasOtherLine);
    }
    if (lineCompletionFigure) {
      const matchedEdgeKeys = lines.map(getMatchedLineCompletionEdgeKey);
      return points.length > 0 ||
        hasPolygon ||
        lines.some((line) => line.mode !== 'segment') ||
        matchedEdgeKeys.some((key) => key === null) ||
        new Set(matchedEdgeKeys.filter(Boolean)).size !== matchedEdgeKeys.filter(Boolean).length;
    }
    if (shapeDraw.mode === 'triangle') return hasLine || new Set(polygons.map((polygon) => polygon.length)).size > 1;
    if (shapeDraw.mode === 'rightTriangle') return hasLine || new Set(polygons.map((polygon) => polygon.length)).size > 1;
    if (shapeDraw.mode === 'quadrilateral' || shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square') {
      if (isQuadrilateralPointCompletionProblem) return hasLine || hasPolygon || points.length > 1;
      if (isTwoPolygonProblem) return hasLine || polygons.some((polygon) => polygon.length !== 4);
      return hasLine || new Set(polygons.map((polygon) => polygon.length)).size > 1;
    }
    return false;
  })();
  const completed = (() => {
    if (shapeDraw.task === 'identify') {
      if (shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray') return tool === 'line' && lineMode === shapeDraw.mode;
      if (shapeDraw.mode === 'triangle') return tool === 'polygon' && polygonSides === 3;
      if (shapeDraw.mode === 'quadrilateral') return tool === 'polygon' && polygonSides === 4;
      return false;
    }
    if (shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray') {
      const targetLineMode = shapeDraw.mode;
      return lines.some((line) => isTargetLineConstruction(line, targetLineMode));
    }
    if (shapeDraw.mode === 'triangle') return polygons.some((polygon) => polygon.length === 3);
    if (shapeDraw.mode === 'quadrilateral') return polygons.some((polygon) => polygon.length === 4);
    if (shapeDraw.mode === 'rightTriangle') return polygons.some((polygon) => polygon.length === 3 && polygon.some((point, index) => rightAt(point, polygon[(index + 2) % 3], polygon[(index + 1) % 3])));
    if (shapeDraw.mode === 'rectangle') {
      if (presetQuadrilateralPoints) {
        return points.some((point) => isRectanglePolygon([...presetQuadrilateralPoints, point]));
      }
      if (isTwoPolygonProblem) {
        const rectangles = polygons.filter(isRectanglePolygon);
        return rectangles.some((first, firstIndex) => rectangles.slice(firstIndex + 1).some((second) => Math.abs(triangleArea(first) - triangleArea(second)) > 900));
      }
      return polygons.some(isRectanglePolygon);
    }
    if (shapeDraw.mode === 'square') {
      if (presetQuadrilateralPoints) {
        return points.some((point) => isSquarePolygon([...presetQuadrilateralPoints, point]));
      }
      if (isTwoPolygonProblem) {
        const squares = polygons.filter(isSquarePolygon);
        return squares.some((first, firstIndex) => squares.slice(firstIndex + 1).some((second) => Math.abs(triangleArea(first) - triangleArea(second)) > 900));
      }
      return polygons.some(isSquarePolygon);
    }
    if (shapeDraw.mode === 'rightAngle') return lines.some((first, firstIndex) => lines.slice(firstIndex + 1).some((second) => {
      const vertex = [first.start, first.end].find((point) => [second.start, second.end].some((other) => dist(point, other) < 8));
      if (!vertex) return false;
      const a = dist(first.start, vertex) < 8 ? first.end : first.start;
      const b = dist(second.start, vertex) < 8 ? second.end : second.start;
      const cross = Math.abs((a.x - vertex.x) * (b.y - vertex.y) - (a.y - vertex.y) * (b.x - vertex.x));
      if (cross < 300) return false;
      return rightAt(vertex, a, b);
    }));    
    return false;
  })();
  useEffect(() => {
    if (isGachaDrawProblem && !rouletteResolved) {
      onAnswerChange('');
      return;
    }
    onAnswerChange(hasMixedShapeKinds ? SHAPE_DRAW_MIXED_TOKEN : completed ? shapeDraw.answerToken : '');
  }, [completed, hasMixedShapeKinds, isGachaDrawProblem, onAnswerChange, rouletteResolved, shapeDraw.answerToken]);
  const renderLineIcon = (mode: ShapeLineMode) => (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
      <line
        x1={mode === 'line' ? 5 : 12}
        y1="34"
        x2={mode === 'segment' ? 36 : 43}
        y2="14"
        stroke="#f97316"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="33" r="5" fill="#6b7280" stroke="#111827" strokeWidth="3" />
      <circle cx="34" cy="15" r="5" fill="#6b7280" stroke="#111827" strokeWidth="3" />
    </svg>
  );
  const renderPolygonIcon = (sides: 3 | 4) => (
    <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
      <polygon
        points={sides === 3 ? '12,15 36,17 24,38' : '12,13 36,13 36,37 12,37'}
        fill="#bbf7d0"
        stroke="#ef5da8"
        strokeWidth="3"
      />
      {(sides === 3 ? [[12, 15], [36, 17], [24, 38]] : [[12, 13], [36, 13], [36, 37], [12, 37]]).map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.8" fill="#64748b" stroke="#111827" strokeWidth="2" />
      ))}
    </svg>
  );

  return (
    <div className="flex h-full w-full flex-col gap-2 text-slate-900">
      <h2 className="shrink-0 text-2xl font-black leading-tight sm:text-3xl">{shapeDraw.title}</h2>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#f8fbff]">
        <div className="absolute left-1/2 top-3 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#253493] px-3 py-2 shadow-lg">
          <button type="button" onClick={() => { setTool('point'); setOpenToolMenu(null); }} className={`grid h-12 w-12 place-items-center rounded-full bg-pink-300 ${tool === 'point' ? 'ring-4 ring-sky-300 ring-offset-2' : ''}`} aria-label="점 도구">
            <span className="block h-4 w-4 rounded-full border-4 border-slate-900 bg-slate-500" />
          </button>
          <button type="button" onClick={() => (tool === 'line' ? setLineMode(lineMode === 'segment' ? 'line' : lineMode === 'line' ? 'ray' : 'segment') : setTool('line'))} className={`grid h-12 w-12 place-items-center rounded-full bg-cyan-100 ${tool === 'line' ? 'ring-4 ring-sky-300 ring-offset-2' : ''}`} aria-label="???占쎄뎄"><svg viewBox="0 0 48 48" className="h-10 w-10"><line x1={lineMode === 'line' ? 6 : 12} y1="34" x2={lineMode === 'line' || lineMode === 'ray' ? 42 : 36} y2="14" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" /><circle cx="14" cy="33" r="5" fill="#6b7280" stroke="#111827" strokeWidth="3" /><circle cx="34" cy="15" r="5" fill={lineMode === 'ray' ? '#6b7280' : '#f8fbff'} stroke="#2563eb" strokeWidth="3" /></svg></button>
          <button type="button" onClick={() => (tool === 'polygon' ? setPolygonSides(polygonSides === 3 ? 4 : 3) : setTool('polygon'))} className={`grid h-12 w-12 place-items-center rounded-full bg-lime-300 ${tool === 'polygon' ? 'ring-4 ring-sky-300 ring-offset-2' : ''}`} aria-label="?占쏀삎 ?占쎄뎄"><svg viewBox="0 0 48 48" className="h-10 w-10"><polygon points={polygonSides === 3 ? '12,15 36,17 24,38' : '12,13 36,13 36,37 12,37'} fill="#bbf7d0" stroke="#ef5da8" strokeWidth="3" /></svg></button>
          <button type="button" onClick={undo} disabled={history.length === 0} className="grid h-12 w-12 place-items-center rounded-full bg-yellow-300 text-[#253493] disabled:opacity-40" aria-label="?占쎈룎由ш린"><RotateCcw className="h-6 w-6" strokeWidth={3} /></button>
        </div>
        <button type="button" onClick={onSubmit} disabled={!answerValue} className="absolute bottom-4 right-5 z-30 flex items-center gap-2 rounded-full bg-[#ffc400] px-7 py-3 text-lg font-black text-[#273b9a] shadow-lg disabled:opacity-45"><Sword size={22} /> 공격!</button>
        <svg ref={svgRef} viewBox="0 0 640 360" className="h-full min-h-[20rem] w-full touch-none" onPointerDown={handleDown}>
          <rect width="640" height="360" fill="#f8fbff" />
          {Array.from({ length: 11 }, (_, i) => <line key={`gx-${i}`} x1={SHAPE_ORIGIN.x + i * SHAPE_GRID} x2={SHAPE_ORIGIN.x + i * SHAPE_GRID} y1="0" y2="360" stroke="#d7dee9" />)}
          {Array.from({ length: 6 }, (_, i) => <line key={`gy-${i}`} y1={SHAPE_ORIGIN.y + i * SHAPE_GRID} y2={SHAPE_ORIGIN.y + i * SHAPE_GRID} x1="0" x2="640" stroke="#d7dee9" />)}
          {Array.from({ length: 66 }, (_, i) => <circle key={`dot-${i}`} cx={SHAPE_ORIGIN.x + (i % 11) * SHAPE_GRID} cy={SHAPE_ORIGIN.y + Math.floor(i / 11) * SHAPE_GRID} r="3" fill="#64748b" opacity="0.45" />)}
          {polygons.map((polygon, index) => <g key={`poly-${index}`}><polygon points={polygon.map((point) => `${point.x},${point.y}`).join(' ')} fill="#bef26477" stroke="#ef5da8" strokeWidth="3" />{polygon.map((point) => <g key={`${point.x}-${point.y}`}><ShapePointView point={point} /></g>)}</g>)}
          {pendingPolygon.length > 0 && <polyline points={pendingPolygon.map((point) => `${point.x},${point.y}`).join(' ')} fill="none" stroke="#ef5da8" strokeWidth="3" />}
          {lines.map((line, index) => { const ends = lineEnds(line); return <g key={`line-${index}`}><line x1={ends.a.x} y1={ends.a.y} x2={ends.b.x} y2={ends.b.y} stroke="#f97316" strokeWidth="3.4" strokeLinecap="round" /><ShapePointView point={line.start} /><ShapePointView point={line.end} /></g>; })}
          {rightAngleMarkers.map(renderRightAngleMarker)}
          {[...points, ...pendingPolygon, ...(lineStart ? [lineStart] : [])].map((point) => <g key={`point-${point.x}-${point.y}-${point.label}`}><ShapePointView point={point} /></g>)}
        </svg>
      </div>
    </div>
  );
}

function ShapeDrawProblemCardV2({
  shapeDraw,
  answerValue,
  notice,
  playAnimationSound,
  rouletteAlreadyResolved = false,
  onRouletteResolved,
  onAnswerChange,
  onSubmit,
}: {
  shapeDraw: ShapeDrawProblemData;
  answerValue: string;
  notice?: string;
  playAnimationSound?: AnimationSoundPlayer;
  rouletteAlreadyResolved?: boolean;
  onRouletteResolved?: () => void;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [tool, setTool] = useState<ShapeTool>('point');
  const [openMenu, setOpenMenu] = useState<ShapeToolMenu>(null);
  const [lineMode, setLineMode] = useState<ShapeLineMode>('segment');
  const [polygonSides, setPolygonSides] = useState<3 | 4>(3);
  const [points, setPoints] = useState<ShapePoint[]>([]);
  const [lines, setLines] = useState<ShapeLine[]>([]);
  const [polygons, setPolygons] = useState<ShapePoint[][]>([]);
  const [lineStart, setLineStart] = useState<ShapePoint | null>(null);
  const [pendingPolygon, setPendingPolygon] = useState<ShapePoint[]>([]);
  const [history, setHistory] = useState<Array<'point' | 'lineStart' | 'line' | 'polygonPoint' | 'polygon'>>([]);
  const [rouletteIndex, setRouletteIndex] = useState(0);
  const [rouletteResolved, setRouletteResolved] = useState(false);
  const [isRouletteOverlayVisible, setIsRouletteOverlayVisible] = useState(false);
  const previousAnswerValueRef = useRef(answerValue);
  const playAnimationSoundRef = useRef(playAnimationSound);
  const onRouletteResolvedRef = useRef(onRouletteResolved);
  const labels = ['\u3131', '\u3134', '\u3137', '\u3139', '\u3141', '\u3142', '\u3145', '\u3147', '\u3148', '\u314a'];
  const gridPoint = (col: number, row: number, label: string): ShapePoint => ({
    x: SHAPE_ORIGIN.x + SHAPE_GRID * col,
    y: SHAPE_ORIGIN.y + SHAPE_GRID * row,
    label,
  });
  const isLineConstructionProblem = shapeDraw.task === 'draw' && (
    shapeDraw.mode === 'segment' ||
    shapeDraw.mode === 'line' ||
    shapeDraw.mode === 'ray' ||
    shapeDraw.mode === 'angle' ||
    shapeDraw.mode === 'rightAngle'
  );
  const isRightTrianglePointCompletionProblem = shapeDraw.mode === 'rightTriangle' && shapeDraw.drawVariant === 'point';
  const isRightTriangleTwoPolygonProblem = shapeDraw.mode === 'rightTriangle' && shapeDraw.drawVariant === 'twoRightTriangles';
  const isRightTriangleThreePolygonProblem = shapeDraw.mode === 'rightTriangle' && shapeDraw.drawVariant === 'threeRightTriangles';
  const isRightTriangleMultiPolygonProblem = isRightTriangleTwoPolygonProblem || isRightTriangleThreePolygonProblem;
  const isQuadrilateralPointCompletionProblem = (shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square') && shapeDraw.drawVariant === 'point';
  const isTwoPolygonProblem = (shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square') && shapeDraw.drawVariant === 'twoPolygons';
  const isThreePolygonProblem = (shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square') && shapeDraw.drawVariant === 'threePolygons';
  const isMultiPolygonProblem = isTwoPolygonProblem || isThreePolygonProblem;
  const isMixedPolygonProblem = shapeDraw.drawVariant === 'mixedPolygons';
  const isLineCompletionProblem = shapeDraw.drawVariant === 'lineCompletion';
  const isGachaDrawProblem = shapeDraw.task === 'draw' && shapeDraw.drawVariant === 'gacha';
  const rouletteTargetIndex = Math.max(0, UNIT1_LEVEL8_GACHA_MODES.indexOf(shapeDraw.mode));
  const rouletteDisplayMode = UNIT1_LEVEL8_GACHA_MODES[rouletteResolved ? rouletteTargetIndex : rouletteIndex % UNIT1_LEVEL8_GACHA_MODES.length] ?? shapeDraw.mode;
  const rouletteDisplayLabel = SHAPE_DRAW_ANSWER_LABELS[rouletteDisplayMode];
  const rouletteTargetLabel = SHAPE_DRAW_ANSWER_LABELS[shapeDraw.mode];
  const rouletteTitle = isGachaDrawProblem
    ? rouletteResolved
      ? `${withObjectParticle(rouletteTargetLabel)} 그려 보세요.`
      : '룰렛이 도형을 정하고 있어요.'
    : shapeDraw.title;
  const pointToolOnly = isRightTrianglePointCompletionProblem || isQuadrilateralPointCompletionProblem;
  const lineToolOnly = isLineCompletionProblem;
  const polygonToolOnly = isRightTriangleMultiPolygonProblem || isMultiPolygonProblem || isMixedPolygonProblem;
  const rightTriangleCompletionSegments = [
    { start: gridPoint(3, 4, '\u3131'), end: gridPoint(7, 4, '\u3134') },
    { start: gridPoint(4, 2, '\u3131'), end: gridPoint(4, 5, '\u3134') },
    { start: gridPoint(2, 3, '\u3131'), end: gridPoint(7, 3, '\u3134') },
    { start: gridPoint(7, 2, '\u3131'), end: gridPoint(7, 5, '\u3134') },
    { start: gridPoint(3, 2, '\u3131'), end: gridPoint(6, 2, '\u3134') },
    { start: gridPoint(5, 5, '\u3131'), end: gridPoint(9, 5, '\u3134') },
    { start: gridPoint(2, 4, '\u3131'), end: gridPoint(2, 1, '\u3134') },
    { start: gridPoint(8, 1, '\u3131'), end: gridPoint(8, 4, '\u3134') },
  ];
  const presetRightTriangleSegment = isRightTrianglePointCompletionProblem
    ? rightTriangleCompletionSegments[(shapeDraw.figureVariant ?? 0) % rightTriangleCompletionSegments.length]
    : null;
  const rectangleCompletionVariants = [
    [gridPoint(3, 2, '\u3131'), gridPoint(7, 2, '\u3134'), gridPoint(7, 5, '\u3137')],
    [gridPoint(4, 1, '\u3131'), gridPoint(8, 1, '\u3134'), gridPoint(8, 4, '\u3137')],
    [gridPoint(2, 3, '\u3131'), gridPoint(6, 3, '\u3134'), gridPoint(6, 5, '\u3137')],
  ];
  const squareCompletionVariants = [
    [gridPoint(4, 2, '\u3131'), gridPoint(7, 2, '\u3134'), gridPoint(7, 5, '\u3137')],
    [gridPoint(5, 1, '\u3131'), gridPoint(8, 1, '\u3134'), gridPoint(8, 4, '\u3137')],
    [gridPoint(2, 2, '\u3131'), gridPoint(5, 2, '\u3134'), gridPoint(5, 5, '\u3137')],
  ];
  const quadrilateralCompletionVariants = shapeDraw.mode === 'square' ? squareCompletionVariants : rectangleCompletionVariants;
  const presetQuadrilateralPoints = isQuadrilateralPointCompletionProblem
    ? quadrilateralCompletionVariants[(shapeDraw.figureVariant ?? 0) % quadrilateralCompletionVariants.length]
    : null;
  const lineCompletionFigures: Record<'rightTriangle' | 'rectangle' | 'square', Array<{ points: ShapePoint[]; givenEdges: Array<[number, number]>; missingEdges: Array<[number, number]> }>> = {
    rightTriangle: [
      { points: [gridPoint(3, 5, '\u3131'), gridPoint(7, 5, '\u3134'), gridPoint(3, 2, '\u3137')], givenEdges: [[0, 1]], missingEdges: [[0, 2], [1, 2]] },
      { points: [gridPoint(4, 2, '\u3131'), gridPoint(8, 2, '\u3134'), gridPoint(8, 5, '\u3137')], givenEdges: [[1, 2]], missingEdges: [[0, 1], [0, 2]] },
      { points: [gridPoint(2, 4, '\u3131'), gridPoint(6, 4, '\u3134'), gridPoint(6, 1, '\u3137')], givenEdges: [[1, 2]], missingEdges: [[0, 1], [0, 2]] },
    ],
    rectangle: [
      { points: [gridPoint(3, 2, '\u3131'), gridPoint(8, 2, '\u3134'), gridPoint(8, 5, '\u3137'), gridPoint(3, 5, '\u3139')], givenEdges: [[0, 1], [1, 2]], missingEdges: [[2, 3], [3, 0]] },
      { points: [gridPoint(2, 1, '\u3131'), gridPoint(7, 1, '\u3134'), gridPoint(7, 4, '\u3137'), gridPoint(2, 4, '\u3139')], givenEdges: [[3, 0], [0, 1]], missingEdges: [[1, 2], [2, 3]] },
      { points: [gridPoint(4, 2, '\u3131'), gridPoint(9, 2, '\u3134'), gridPoint(9, 5, '\u3137'), gridPoint(4, 5, '\u3139')], givenEdges: [[0, 1], [2, 3]], missingEdges: [[1, 2], [3, 0]] },
    ],
    square: [
      { points: [gridPoint(4, 2, '\u3131'), gridPoint(7, 2, '\u3134'), gridPoint(7, 5, '\u3137'), gridPoint(4, 5, '\u3139')], givenEdges: [[0, 1], [1, 2]], missingEdges: [[2, 3], [3, 0]] },
      { points: [gridPoint(3, 1, '\u3131'), gridPoint(6, 1, '\u3134'), gridPoint(6, 4, '\u3137'), gridPoint(3, 4, '\u3139')], givenEdges: [[3, 0], [0, 1]], missingEdges: [[1, 2], [2, 3]] },
      { points: [gridPoint(5, 2, '\u3131'), gridPoint(8, 2, '\u3134'), gridPoint(8, 5, '\u3137'), gridPoint(5, 5, '\u3139')], givenEdges: [[0, 1], [2, 3]], missingEdges: [[1, 2], [3, 0]] },
    ],
  };
  const lineCompletionFigure = isLineCompletionProblem && (shapeDraw.mode === 'rightTriangle' || shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square')
    ? lineCompletionFigures[shapeDraw.mode][(shapeDraw.figureVariant ?? 0) % lineCompletionFigures[shapeDraw.mode].length]
    : null;
  const angleVertexPositions = [
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 4, y: SHAPE_ORIGIN.y + SHAPE_GRID * 3 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 6, y: SHAPE_ORIGIN.y + SHAPE_GRID * 3 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 5, y: SHAPE_ORIGIN.y + SHAPE_GRID * 2 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 5, y: SHAPE_ORIGIN.y + SHAPE_GRID * 4 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 3, y: SHAPE_ORIGIN.y + SHAPE_GRID * 2 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 7, y: SHAPE_ORIGIN.y + SHAPE_GRID * 4 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 3, y: SHAPE_ORIGIN.y + SHAPE_GRID * 4 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 7, y: SHAPE_ORIGIN.y + SHAPE_GRID * 2 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 4, y: SHAPE_ORIGIN.y + SHAPE_GRID * 1 },
    { x: SHAPE_ORIGIN.x + SHAPE_GRID * 6, y: SHAPE_ORIGIN.y + SHAPE_GRID * 5 },
  ];
  const angleVertexPosition = angleVertexPositions[(shapeDraw.figureVariant ?? 0) % angleVertexPositions.length];
  const presetAngleVertex = shapeDraw.mode === 'angle' || shapeDraw.mode === 'rightAngle'
    ? { ...angleVertexPosition, label: '\u3134' }
    : null;
  const rightAngleRayDirections = [
    { col: 2, row: 0 },
    { col: -2, row: 0 },
    { col: 0, row: -2 },
    { col: 0, row: 2 },
  ];
  const rightAngleRayDirection = rightAngleRayDirections[(shapeDraw.figureVariant ?? 0) % rightAngleRayDirections.length];
  const presetRightAngleRay = shapeDraw.mode === 'rightAngle' && shapeDraw.drawVariant === 'ray' && presetAngleVertex
    ? {
        start: presetAngleVertex,
        end: {
          x: presetAngleVertex.x + SHAPE_GRID * rightAngleRayDirection.col,
          y: presetAngleVertex.y + SHAPE_GRID * rightAngleRayDirection.row,
          label: '\u3131',
        },
        mode: 'ray' as const,
      }
    : null;
  const boardPoints = [
    ...(presetRightTriangleSegment ? [presetRightTriangleSegment.start, presetRightTriangleSegment.end] : []),
    ...(presetQuadrilateralPoints ?? []),
    ...(lineCompletionFigure?.points ?? []),
    ...points,
    ...lines.flatMap((line) => [line.start, line.end]),
    ...polygons.flat(),
    ...pendingPolygon,
    ...(lineStart ? [lineStart] : []),
    ...(presetAngleVertex ? [presetAngleVertex] : []),
    ...(presetRightAngleRay ? [presetRightAngleRay.end] : []),
  ];
  const distinctPoints = Array.from(new Map(boardPoints.map((point) => [`${point.x}:${point.y}`, point])).values());
  const dist = (a: ShapePoint, b: ShapePoint) => Math.hypot(a.x - b.x, a.y - b.y);
  const dotAt = (v: ShapePoint, a: ShapePoint, b: ShapePoint) => (a.x - v.x) * (b.x - v.x) + (a.y - v.y) * (b.y - v.y);
  const rightAt = (v: ShapePoint, a: ShapePoint, b: ShapePoint) => Math.abs(dotAt(v, a, b)) < 160;
  const isRectanglePolygon = (polygon: ShapePoint[]) =>
    polygon.length === 4 && polygon.every((point, index) => rightAt(point, polygon[(index + 3) % 4], polygon[(index + 1) % 4]));
  const isSquarePolygon = (polygon: ShapePoint[]) => {
    if (!isRectanglePolygon(polygon)) return false;
    const sideLengths = polygon.map((point, index) => dist(point, polygon[(index + 1) % 4]));
    return Math.max(...sideLengths) - Math.min(...sideLengths) < 16;
  };
  const isRightTrianglePolygon = (polygon: ShapePoint[]) =>
    polygon.length === 3 && polygon.some((point, index) => rightAt(point, polygon[(index + 2) % 3], polygon[(index + 1) % 3]));
  const getAdvancedPolygonKind = (polygon: ShapePoint[]) => {
    if (isRightTrianglePolygon(polygon)) return 'rightTriangle';
    if (isSquarePolygon(polygon)) return 'square';
    if (isRectanglePolygon(polygon)) return 'rectangle';
    return null;
  };
  const triangleArea = (polygon: ShapePoint[]) => Math.abs(
    polygon.reduce((sum, point, index) => {
      const next = polygon[(index + 1) % polygon.length];
      return sum + point.x * next.y - next.x * point.y;
    }, 0) / 2,
  );
  const getPolygonShapeSignature = (polygon: ShapePoint[]) => {
    const edges = polygon.map((point, index) => {
      const next = polygon[(index + 1) % polygon.length];
      const dx = next.x - point.x;
      const dy = next.y - point.y;
      const length = Math.hypot(dx, dy);
      const angle = ((Math.atan2(dy, dx) * 180) / Math.PI + 180) % 180;
      return { length, angle };
    });
    const minLength = Math.min(...edges.map((edge) => edge.length));
    if (!Number.isFinite(minLength) || minLength <= 0) return null;

    const ratios = edges
      .map((edge) => Math.round((edge.length / minLength) * 10) / 10)
      .sort((a, b) => a - b)
      .join(':');
    const angles = edges
      .map((edge) => Math.round(edge.angle / 15) * 15)
      .sort((a, b) => a - b)
      .join(':');
    return `${ratios}|${angles}`;
  };
  const hasAtLeastDifferentShapedPolygons = (polygonsToCheck: ShapePoint[][], requiredCount: number) => {
    const shapeSignatures = new Set(polygonsToCheck.map(getPolygonShapeSignature).filter(Boolean));
    return shapeSignatures.size >= requiredCount;
  };
  const getPolygonShapeOrSizeSignature = (polygon: ShapePoint[]) => {
    const shapeSignature = getPolygonShapeSignature(polygon);
    if (!shapeSignature) return null;
    const areaBucket = Math.round(triangleArea(polygon) / 400);
    return `${shapeSignature}|${areaBucket}`;
  };
  const hasAtLeastDifferentShapedOrSizedPolygons = (polygonsToCheck: ShapePoint[][], requiredCount: number) => {
    const shapeOrSizeSignatures = new Set(polygonsToCheck.map(getPolygonShapeOrSizeSignature).filter(Boolean));
    return shapeOrSizeSignatures.size >= requiredCount;
  };
  const hasDifferentAdvancedPolygonKindsAndSizes = (polygonsToCheck: ShapePoint[][]) => {
    const advancedPolygons = polygonsToCheck
      .map((polygon) => ({ kind: getAdvancedPolygonKind(polygon), area: triangleArea(polygon) }))
      .filter((polygon): polygon is { kind: NonNullable<ReturnType<typeof getAdvancedPolygonKind>>; area: number } => polygon.kind !== null);

    return advancedPolygons.some((first, firstIndex) =>
      advancedPolygons.slice(firstIndex + 1).some((second) =>
        first.kind !== second.kind && Math.abs(first.area - second.area) > 900,
      ),
    );
  };
  const playDrawSound = (effectName: SoundEffectName, options?: SoundPlaybackOptions) => {
    playAnimationSound?.(effectName, options);
  };
  const snap = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    const screenPoint = svg?.createSVGPoint();
    if (screenPoint && svg) {
      screenPoint.x = clientX;
      screenPoint.y = clientY;
    }
    const svgPoint = screenPoint && svg?.getScreenCTM()
      ? screenPoint.matrixTransform(svg.getScreenCTM()!.inverse())
      : null;
    const rawX = svgPoint?.x ?? clientX;
    const rawY = svgPoint?.y ?? clientY;
    const x = Math.max(SHAPE_ORIGIN.x, Math.min(612, SHAPE_ORIGIN.x + Math.round((rawX - SHAPE_ORIGIN.x) / SHAPE_GRID) * SHAPE_GRID));
    const y = Math.max(SHAPE_ORIGIN.y, Math.min(320, SHAPE_ORIGIN.y + Math.round((rawY - SHAPE_ORIGIN.y) / SHAPE_GRID) * SHAPE_GRID));
    const existing = distinctPoints.find((point) => Math.hypot(point.x - x, point.y - y) < 8);
    const usedLabels = new Set(distinctPoints.map((point) => point.label));
    const nextLabel = labels.find((label) => !usedLabels.has(label)) ?? labels[distinctPoints.length % labels.length];
    return existing ?? { x, y, label: nextLabel };
  };
  const findExistingPoint = (point: ShapePoint) =>
    distinctPoints.find((existing) => dist(existing, point) < 8) ?? null;
  const undo = () => {
    const latest = history.at(-1);
    if (latest) playDrawSound('ui', { gainMultiplier: 0.72, detune: -18 });
    setHistory((previous) => previous.slice(0, -1));
    if (latest === 'point') setPoints((previous) => previous.slice(0, -1));
    if (latest === 'lineStart') setLineStart(null);
    if (latest === 'line') setLines((previous) => previous.slice(0, -1));
    if (latest === 'polygonPoint') setPendingPolygon((previous) => previous.slice(0, -1));
    if (latest === 'polygon') setPolygons((previous) => previous.slice(0, -1));
  };
  const resetShapeBoard = () => {
    setPoints([]);
    setLines([]);
    setPolygons([]);
    setLineStart(null);
    setPendingPolygon([]);
    setHistory([]);
    setOpenMenu(null);
  };
  useEffect(() => {
    setTool(lineToolOnly ? 'line' : 'point');
    setLineMode(
      lineToolOnly
        ? 'segment'
        : shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray'
        ? shapeDraw.mode
        : shapeDraw.mode === 'angle' || shapeDraw.mode === 'rightAngle'
          ? 'ray'
          : 'segment',
    );
    setPolygonSides(shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square' || shapeDraw.mode === 'quadrilateral' ? 4 : 3);
    resetShapeBoard();
  }, [isLineConstructionProblem, lineToolOnly, polygonToolOnly, shapeDraw.drawVariant, shapeDraw.figureVariant, shapeDraw.mode, shapeDraw.title]);
  useEffect(() => {
    playAnimationSoundRef.current = playAnimationSound;
  }, [playAnimationSound]);
  useEffect(() => {
    onRouletteResolvedRef.current = onRouletteResolved;
  }, [onRouletteResolved]);
  useEffect(() => {
    if (!isGachaDrawProblem) {
      setRouletteResolved(true);
      setIsRouletteOverlayVisible(false);
      return;
    }

    if (rouletteAlreadyResolved) {
      setRouletteIndex(rouletteTargetIndex);
      setRouletteResolved(true);
      setIsRouletteOverlayVisible(false);
      return;
    }

    setRouletteResolved(false);
    setIsRouletteOverlayVisible(true);
    setRouletteIndex((rouletteTargetIndex + UNIT1_LEVEL8_GACHA_MODES.length - 3) % UNIT1_LEVEL8_GACHA_MODES.length);
    const startSoundTimer = window.setTimeout(() => {
      playAnimationSoundRef.current?.('rouletteStart', { gainMultiplier: 0.42, detune: 8 });
    }, 40);

    let tick = 0;
    const tickTimer = window.setInterval(() => {
      tick += 1;
      setRouletteIndex((previous) => (previous + 1) % UNIT1_LEVEL8_GACHA_MODES.length);
      playAnimationSoundRef.current?.('rouletteTick', { gainMultiplier: 0.16, detune: tick * 5 });
    }, UNIT1_LEVEL8_GACHA_ROULETTE_TICK_MS);
    const resultTimer = window.setTimeout(() => {
      window.clearInterval(tickTimer);
      setRouletteIndex(rouletteTargetIndex);
      setRouletteResolved(true);
      playAnimationSoundRef.current?.('rouletteWin', { gainMultiplier: 0.42, detune: 18 });
    }, UNIT1_LEVEL8_GACHA_ROULETTE_DURATION_MS);
    const hideOverlayTimer = window.setTimeout(() => {
      setIsRouletteOverlayVisible(false);
      onRouletteResolvedRef.current?.();
    }, UNIT1_LEVEL8_GACHA_ROULETTE_DURATION_MS + 1050);

    return () => {
      window.clearTimeout(startSoundTimer);
      window.clearInterval(tickTimer);
      window.clearTimeout(resultTimer);
      window.clearTimeout(hideOverlayTimer);
    };
  }, [isGachaDrawProblem, rouletteAlreadyResolved, rouletteTargetIndex, shapeDraw.answerToken, shapeDraw.figureVariant]);
  useEffect(() => {
    if (previousAnswerValueRef.current === shapeDraw.answerToken && answerValue === '') {
      resetShapeBoard();
    }
    previousAnswerValueRef.current = answerValue;
  }, [answerValue, shapeDraw.answerToken]);
  const handleDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if (isGachaDrawProblem && !rouletteResolved) {
      return;
    }
    setOpenMenu(null);
    const point = snap(event.clientX, event.clientY);
    if (tool === 'point') {
      if (!distinctPoints.some((existing) => dist(existing, point) < 8)) {
        setPoints((previous) => [...previous, point]);
        setHistory((previous) => [...previous, 'point']);
        playDrawSound('tick', { gainMultiplier: 0.72, detune: 18 });
      } else {
        playDrawSound('ui', { gainMultiplier: 0.58, detune: -8 });
      }
      return;
    }
    const selectedPoint = findExistingPoint(point);
    if (!selectedPoint) {
      playDrawSound('alert', { gainMultiplier: 0.45, detune: -20 });
      return;
    }
    if (tool === 'polygon') {
      if (pendingPolygon.some((existing) => dist(existing, selectedPoint) < 8)) {
        playDrawSound('alert', { gainMultiplier: 0.42, detune: -32 });
        return;
      }
      const next = [...pendingPolygon, selectedPoint];
      if (next.length >= polygonSides) {
        setPolygons((previous) => [...previous, next]);
        setPendingPolygon([]);
        setHistory((previous) => [...previous.filter((action) => action !== 'polygonPoint'), 'polygon']);
        playDrawSound('hintResolve', { gainMultiplier: 0.86, detune: polygonSides === 3 ? 18 : 34 });
      } else {
        setPendingPolygon(next);
        setHistory((previous) => [...previous, 'polygonPoint']);
        playDrawSound('tick', { gainMultiplier: 0.64, detune: 32 + next.length * 12 });
      }
      return;
    }
    if (!lineStart && presetAngleVertex && lineMode === 'ray' && dist(selectedPoint, presetAngleVertex) >= 24) {
      setLines((previous) => [...previous, { start: presetAngleVertex, end: selectedPoint, mode: 'ray' }]);
      setHistory((previous) => [...previous, 'line']);
      playDrawSound('submit', { gainMultiplier: 0.6, detune: 24 });
      return;
    }
    if (!lineStart) {
      setLineStart(selectedPoint);
      setHistory((previous) => [...previous, 'lineStart']);
      playDrawSound('tick', { gainMultiplier: 0.62, detune: -6 });
      return;
    }
    if (dist(lineStart, selectedPoint) < 24) {
      playDrawSound('alert', { gainMultiplier: 0.42, detune: -36 });
      return;
    }
    setLines((previous) => [...previous, { start: lineStart, end: selectedPoint, mode: lineMode }]);
    setLineStart(null);
    setHistory((previous) => [...previous.filter((action) => action !== 'lineStart'), 'line']);
    playDrawSound('submit', { gainMultiplier: 0.58, detune: lineMode === 'segment' ? 6 : lineMode === 'line' ? 20 : 34 });
  };
  const lineEnds = (line: ShapeLine) => {
    if (line.mode === 'segment') return { a: line.start, b: line.end };
    const dx = line.end.x - line.start.x;
    const dy = line.end.y - line.start.y;
    const len = Math.max(1, Math.hypot(dx, dy));
    if (line.mode === 'ray') return { a: line.start, b: { ...line.end, x: line.start.x + (dx / len) * 900, y: line.start.y + (dy / len) * 900 } };
    return { a: { ...line.start, x: line.start.x - (dx / len) * 900, y: line.start.y - (dy / len) * 900 }, b: { ...line.end, x: line.start.x + (dx / len) * 900, y: line.start.y + (dy / len) * 900 } };
  };
  const isSameSegment = (line: ShapeLine, start: ShapePoint, end: ShapePoint) =>
    line.mode === 'segment' &&
    ((dist(line.start, start) < 8 && dist(line.end, end) < 8) || (dist(line.start, end) < 8 && dist(line.end, start) < 8));
  const isTargetLineConstruction = (line: ShapeLine, mode: ShapeLineMode) => {
    if (line.mode !== mode) return false;
    if (mode === 'ray') {
      const usesTargetPoints = [line.start.label, line.end.label].includes(SHAPE_READ_FIRST_POINT_LABEL) &&
        [line.start.label, line.end.label].includes(SHAPE_READ_SECOND_POINT_LABEL);
      if (!usesTargetPoints) return false;
      return !shapeDraw.title.includes('점 ㄱ') || line.start.label === SHAPE_READ_FIRST_POINT_LABEL;
    }
    return [line.start.label, line.end.label].includes(SHAPE_READ_FIRST_POINT_LABEL) &&
      [line.start.label, line.end.label].includes(SHAPE_READ_SECOND_POINT_LABEL);
  };
  const getLineCompletionEdgeKey = (edge: [number, number]) => [...edge].sort((a, b) => a - b).join('-');
  const getMatchedLineCompletionEdgeKey = (line: ShapeLine) => {
    if (!lineCompletionFigure || line.mode !== 'segment') return null;
    const matchedEdge = lineCompletionFigure.missingEdges.find(([startIndex, endIndex]) =>
      isSameSegment(line, lineCompletionFigure.points[startIndex], lineCompletionFigure.points[endIndex]),
    );
    return matchedEdge ? getLineCompletionEdgeKey(matchedEdge) : null;
  };
  const rightAngleMarkers = (() => {
    const markers: Array<{ key: string; vertex: ShapePoint; a: ShapePoint; b: ShapePoint }> = [];
    const seen = new Set<string>();
    const addMarker = (vertex: ShapePoint, a: ShapePoint, b: ShapePoint, source: string) => {
      const cross = Math.abs((a.x - vertex.x) * (b.y - vertex.y) - (a.y - vertex.y) * (b.x - vertex.x));
      if (cross < 300 || !rightAt(vertex, a, b)) return;
      const key = `${Math.round(vertex.x)}:${Math.round(vertex.y)}`;
      if (seen.has(key)) return;
      seen.add(key);
      markers.push({ key, vertex, a, b });
    };

    polygons.forEach((polygon, polygonIndex) => {
      polygon.forEach((vertex, vertexIndex) => {
        addMarker(
          vertex,
          polygon[(vertexIndex + polygon.length - 1) % polygon.length],
          polygon[(vertexIndex + 1) % polygon.length],
          `poly-${polygonIndex}-${vertexIndex}`,
        );
      });
    });

    const markerLines = presetRightAngleRay ? [presetRightAngleRay, ...lines] : lines;
    markerLines.forEach((first, firstIndex) => {
      markerLines.slice(firstIndex + 1).forEach((second, secondOffset) => {
        const secondIndex = firstIndex + secondOffset + 1;
        const vertex = [first.start, first.end].find((point) => [second.start, second.end].some((other) => dist(point, other) < 8));
        if (!vertex) return;
        const a = dist(first.start, vertex) < 8 ? first.end : first.start;
        const b = dist(second.start, vertex) < 8 ? second.end : second.start;
        addMarker(vertex, a, b, `line-${firstIndex}-${secondIndex}`);
      });
    });

    return markers;
  })();
  const renderRightAngleMarker = ({ key, vertex, a, b }: { key: string; vertex: ShapePoint; a: ShapePoint; b: ShapePoint }) => {
    const offset = 3;
    const size = 10;
    const vectorA = { x: a.x - vertex.x, y: a.y - vertex.y };
    const vectorB = { x: b.x - vertex.x, y: b.y - vertex.y };
    const lengthA = Math.max(1, Math.hypot(vectorA.x, vectorA.y));
    const lengthB = Math.max(1, Math.hypot(vectorB.x, vectorB.y));
    const unitA = { x: vectorA.x / lengthA, y: vectorA.y / lengthA };
    const unitB = { x: vectorB.x / lengthB, y: vectorB.y / lengthB };
    const inner = { x: vertex.x + unitA.x * offset + unitB.x * offset, y: vertex.y + unitA.y * offset + unitB.y * offset };
    const p1 = { x: inner.x + unitA.x * size, y: inner.y + unitA.y * size };
    const corner = { x: p1.x + unitB.x * size, y: p1.y + unitB.y * size };
    const p2 = { x: inner.x + unitB.x * size, y: inner.y + unitB.y * size };
    const path = `M ${p1.x} ${p1.y} L ${corner.x} ${corner.y} L ${p2.x} ${p2.y}`;
    return (
      <g key={key} pointerEvents="none">
        <path d={path} fill="none" stroke="#fff" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d={path} fill="none" stroke="#ef4444" strokeWidth="3.2" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d={path} fill="none" stroke="#b91c1c" strokeWidth="1.2" strokeLinejoin="miter" strokeLinecap="butt" />
      </g>
    );
  };
  const hasMixedShapeKinds = (() => {
    if (shapeDraw.task === 'identify') return false;
    const hasLine = lines.length > 0;
    const hasPolygon = polygons.length > 0;
    if (shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray') {
      return hasPolygon || new Set(lines.map((line) => line.mode)).size > 1;
    }
    if (shapeDraw.mode === 'angle' || shapeDraw.mode === 'rightAngle') {
      const hasRay = lines.some((line) => line.mode === 'ray');
      const hasOtherLine = lines.some((line) => line.mode !== 'ray');
      return hasPolygon || (hasRay && hasOtherLine);
    }
    if (lineCompletionFigure) {
      const matchedEdgeKeys = lines.map(getMatchedLineCompletionEdgeKey);
      const validMatchedEdgeKeys = matchedEdgeKeys.filter((key): key is string => key !== null);
      return points.length > 0 ||
        hasPolygon ||
        lines.some((line) => line.mode !== 'segment') ||
        matchedEdgeKeys.some((key) => key === null) ||
        new Set(validMatchedEdgeKeys).size !== validMatchedEdgeKeys.length;
    }
    if (shapeDraw.mode === 'triangle') return hasLine || new Set(polygons.map((polygon) => polygon.length)).size > 1;
    if (shapeDraw.mode === 'rightTriangle') {
      if (isRightTrianglePointCompletionProblem) return hasLine || hasPolygon || points.length > 1;
      if (isRightTriangleMultiPolygonProblem) return hasLine || polygons.some((polygon) => polygon.length !== 3);
      return hasLine || new Set(polygons.map((polygon) => polygon.length)).size > 1;
    }
    if (isMixedPolygonProblem) return hasLine || polygons.some((polygon) => !getAdvancedPolygonKind(polygon));
    if (shapeDraw.mode === 'quadrilateral' || shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square') {
      if (isQuadrilateralPointCompletionProblem) return hasLine || hasPolygon || points.length > 1;
      if (isMultiPolygonProblem) return hasLine || polygons.some((polygon) => polygon.length !== 4);
      return hasLine || new Set(polygons.map((polygon) => polygon.length)).size > 1;
    }
    return false;
  })();
  const completed = (() => {
    const userAngleRays = presetAngleVertex
      ? lines.filter((line) => line.mode === 'ray' && dist(line.start, presetAngleVertex) < 8)
      : [];
    const constructionAngleRays = presetRightAngleRay ? [presetRightAngleRay, ...userAngleRays] : userAngleRays;
    const hasAngleFromPreset = userAngleRays.some((first, firstIndex) => userAngleRays.slice(firstIndex + 1).some((second) => {
      const cross = Math.abs((first.end.x - first.start.x) * (second.end.y - second.start.y) - (first.end.y - first.start.y) * (second.end.x - second.start.x));
      return cross >= 300;
    }));

    if (shapeDraw.mode === 'angle') return hasAngleFromPreset;
    if (shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray') {
      const targetLineMode = shapeDraw.mode;
      return lines.some((line) => isTargetLineConstruction(line, targetLineMode));
    }
    if (shapeDraw.mode === 'triangle') return polygons.some((polygon) => polygon.length === 3);
    if (lineCompletionFigure) {
      const matchedEdgeKeys = new Set(lines.map(getMatchedLineCompletionEdgeKey).filter(Boolean));
      return lineCompletionFigure.missingEdges.every((edge) => matchedEdgeKeys.has(getLineCompletionEdgeKey(edge)));
    }
    if (isMixedPolygonProblem) {
      return hasDifferentAdvancedPolygonKindsAndSizes(polygons);
    }
    if (shapeDraw.mode === 'quadrilateral') return polygons.some((polygon) => polygon.length === 4);
    if (shapeDraw.mode === 'rightTriangle') {
      if (presetRightTriangleSegment) {
        return points.some((point) => isRightTrianglePolygon([presetRightTriangleSegment.start, presetRightTriangleSegment.end, point]));
      }
      if (isRightTriangleMultiPolygonProblem) {
        const rightTriangles = polygons.filter(isRightTrianglePolygon);
        return isRightTriangleThreePolygonProblem
          ? hasAtLeastDifferentShapedOrSizedPolygons(rightTriangles, 3)
          : hasAtLeastDifferentShapedPolygons(rightTriangles, 2);
      }
      return polygons.some(isRightTrianglePolygon);
    }
    if (shapeDraw.mode === 'rectangle') {
      if (presetQuadrilateralPoints) {
        return points.some((point) => isRectanglePolygon([...presetQuadrilateralPoints, point]));
      }
      if (isMultiPolygonProblem) {
        const rectangles = polygons.filter(isRectanglePolygon);
        return hasAtLeastDifferentShapedOrSizedPolygons(rectangles, isThreePolygonProblem ? 3 : 2);
      }
      return polygons.some(isRectanglePolygon);
    }
    if (shapeDraw.mode === 'square') {
      if (presetQuadrilateralPoints) {
        return points.some((point) => isSquarePolygon([...presetQuadrilateralPoints, point]));
      }
      if (isMultiPolygonProblem) {
        const squares = polygons.filter(isSquarePolygon);
        return hasAtLeastDifferentShapedOrSizedPolygons(squares, isThreePolygonProblem ? 3 : 2);
      }
      return polygons.some(isSquarePolygon);
    }
    if (shapeDraw.mode === 'rightAngle') return constructionAngleRays.some((first, firstIndex) => constructionAngleRays.slice(firstIndex + 1).some((second) => {
      const vertex = presetAngleVertex ?? first.start;
      const a = first.end;
      const b = second.end;
      const cross = Math.abs((a.x - vertex.x) * (b.y - vertex.y) - (a.y - vertex.y) * (b.x - vertex.x));
      if (cross < 300) return false;
      return rightAt(vertex, a, b) && userAngleRays.some((line) => line === first || line === second);
    }));
    return false;
  })();
  useEffect(() => onAnswerChange(hasMixedShapeKinds ? SHAPE_DRAW_MIXED_TOKEN : completed ? shapeDraw.answerToken : ''), [completed, hasMixedShapeKinds, onAnswerChange, shapeDraw.answerToken]);
  const lineIcon = (mode: ShapeLineMode) => {
    const start = { x: 14, y: 33 };
    const end = { x: 34, y: 15 };
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        {mode === 'line' && (
          <line x1="5" y1="41" x2="43" y2="7" stroke="#f97316" strokeWidth="4.2" strokeLinecap="round" />
        )}
        {mode === 'ray' && (
          <line x1={start.x} y1={start.y} x2="43" y2="7" stroke="#f97316" strokeWidth="4.2" strokeLinecap="round" />
        )}
        {mode === 'segment' && (
          <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#f97316" strokeWidth="4.2" strokeLinecap="round" />
        )}
        {mode === 'line' ? (
          <>
            <circle cx={start.x} cy={start.y} r="4.4" fill="#64748b" stroke="#1f2937" strokeWidth="2.8" />
            <circle cx={end.x} cy={end.y} r="4.4" fill="#64748b" stroke="#1f2937" strokeWidth="2.8" />
            <circle cx="5" cy="41" r="2.2" fill="#f97316" />
            <circle cx="43" cy="7" r="2.2" fill="#f97316" />
          </>
        ) : mode === 'ray' ? (
          <>
            <circle cx={start.x} cy={start.y} r="5.2" fill="#64748b" stroke="#111827" strokeWidth="3" />
            <circle cx={end.x} cy={end.y} r="4.3" fill="#f8fbff" stroke="#2563eb" strokeWidth="3" />
            <circle cx="43" cy="7" r="2.5" fill="#f97316" />
          </>
        ) : (
          <>
            <circle cx={start.x} cy={start.y} r="5.2" fill="#64748b" stroke="#111827" strokeWidth="3" />
            <circle cx={end.x} cy={end.y} r="5.2" fill="#64748b" stroke="#111827" strokeWidth="3" />
          </>
        )}
      </svg>
    );
  };
  const polygonIcon = (sides: 3 | 4) => {
    const vertices = sides === 3 ? [[12, 15], [36, 17], [24, 38]] : [[12, 13], [36, 13], [36, 37], [12, 37]];
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <polygon points={vertices.map(([x, y]) => `${x},${y}`).join(' ')} fill="#bbf7d0" stroke="#ef5da8" strokeWidth="3" />
        {vertices.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.8" fill="#64748b" stroke="#111827" strokeWidth="2" />)}
      </svg>
    );
  };
  const toolButtonClass = (active: boolean, colorClass: string, disabled = false) => `grid h-12 w-12 place-items-center rounded-full border-[5px] transition-all duration-200 ${
    disabled
      ? `${colorClass} border-transparent opacity-35 grayscale`
      : active
      ? `${colorClass} -translate-y-1 scale-110 border-white shadow-[0_0_0_5px_rgba(14,165,233,0.72),0_12px_20px_rgba(15,23,42,0.28)]`
      : `${colorClass} border-transparent opacity-80 hover:opacity-100`
  }`;
  const selectedToolLabel = (label: string) => (
    <span className="pointer-events-none absolute left-1/2 top-[3.35rem] z-20 -translate-x-1/2 rounded-full bg-white px-2.5 py-0.5 text-xs font-black text-[#253493] shadow-[0_4px_10px_rgba(15,23,42,0.2)]">
      {label}
    </span>
  );
  const renderGivenFigure = () => {
    if (lineCompletionFigure) {
      return (
        <g pointerEvents="none">
          {lineCompletionFigure.givenEdges.map(([fromIndex, toIndex]) => {
            const from = lineCompletionFigure.points[fromIndex];
            const to = lineCompletionFigure.points[toIndex];
            return (
              <line
                key={`line-completion-given-${from.label}-${to.label}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#f97316"
                strokeWidth="4.6"
                strokeLinecap="round"
              />
            );
          })}
          {lineCompletionFigure.points.map((point) => <ShapePointView key={`line-completion-point-${point.label}`} point={point} />)}
        </g>
      );
    }
    if (presetRightTriangleSegment) {
      return (
        <g pointerEvents="none">
          <line x1={presetRightTriangleSegment.start.x} y1={presetRightTriangleSegment.start.y} x2={presetRightTriangleSegment.end.x} y2={presetRightTriangleSegment.end.y} stroke="#f97316" strokeWidth="4.6" strokeLinecap="round" />
          <ShapePointView point={presetRightTriangleSegment.start} />
          <ShapePointView point={presetRightTriangleSegment.end} />
          {points.map((point) => {
            const triangle = [presetRightTriangleSegment.start, presetRightTriangleSegment.end, point];
            return triangleArea(triangle) > 120 ? (
              <motion.polygon
                key={`complete-right-triangle-${point.x}-${point.y}`}
                points={triangle.map((vertex) => `${vertex.x},${vertex.y}`).join(' ')}
                fill="#bef26477"
                stroke="#ef5da8"
                strokeWidth="4"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
            ) : null;
          })}
        </g>
      );
    }
    if (presetQuadrilateralPoints) {
      const completedPolygons = points
        .map((point) => [...presetQuadrilateralPoints, point])
        .filter((polygon) => triangleArea(polygon) > 120);
      return (
        <g pointerEvents="none">
          <polyline
            points={presetQuadrilateralPoints.map((vertex) => `${vertex.x},${vertex.y}`).join(' ')}
            fill="none"
            stroke="#f97316"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {presetQuadrilateralPoints.map((point) => <ShapePointView key={`preset-quad-${point.label}`} point={point} />)}
          {completedPolygons.map((polygon) => (
            <motion.polygon
              key={`complete-quadrilateral-${polygon.map((vertex) => `${vertex.x}-${vertex.y}`).join('-')}`}
              points={polygon.map((vertex) => `${vertex.x},${vertex.y}`).join(' ')}
              fill="#bef26477"
              stroke="#ef5da8"
              strokeWidth="4"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          ))}
        </g>
      );
    }
    if (presetRightAngleRay) {
      const ends = lineEnds(presetRightAngleRay);
      return (
        <g pointerEvents="none">
          <line x1={ends.a.x} y1={ends.a.y} x2={ends.b.x} y2={ends.b.y} stroke="#f97316" strokeWidth="4.6" strokeLinecap="round" />
          <ShapePointView point={presetRightAngleRay.end} />
        </g>
      );
    }
    if (shapeDraw.task !== 'identify') return null;
    if (shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray') {
      const givenLine: ShapeLine = {
        start: { x: 220, y: 220, label: 'ㄱ' },
        end: { x: 420, y: 140, label: 'ㄴ' },
        mode: shapeDraw.mode,
      };
      const ends = lineEnds(givenLine);
      return (
        <g pointerEvents="none">
          <line x1={ends.a.x} y1={ends.a.y} x2={ends.b.x} y2={ends.b.y} stroke="#f97316" strokeWidth="4.6" strokeLinecap="round" />
          <ShapePointView point={givenLine.start} />
          <ShapePointView point={givenLine.end} />
        </g>
      );
    }
    if (shapeDraw.mode === 'triangle' || shapeDraw.mode === 'quadrilateral') {
      const givenPolygon: ShapePoint[] = shapeDraw.mode === 'triangle'
        ? [
            { x: 240, y: 235, label: 'ㄱ' },
            { x: 365, y: 125, label: 'ㄴ' },
            { x: 475, y: 235, label: 'ㄷ' },
          ]
        : [
            { x: 220, y: 230, label: 'ㄱ' },
            { x: 330, y: 135, label: 'ㄴ' },
            { x: 470, y: 170, label: 'ㄷ' },
            { x: 435, y: 265, label: 'ㄹ' },
          ];
      return (
        <g pointerEvents="none">
          <polygon points={givenPolygon.map((point) => `${point.x},${point.y}`).join(' ')} fill="#bef26477" stroke="#ef5da8" strokeWidth="4" />
          {givenPolygon.map((point) => <g key={`given-${point.label}`}><ShapePointView point={point} /></g>)}
        </g>
      );
    }
    return null;
  };

  return (
    <div className="flex h-full w-full flex-col gap-2 text-slate-900">
      <h2 className="shrink-0 text-2xl font-black leading-tight sm:text-3xl">{rouletteTitle}</h2>
      {notice ? (
        <div className="shrink-0 rounded-2xl border-2 border-yellow-300 bg-slate-950/95 px-4 py-2 text-center text-lg font-black text-white shadow-sm">
          {notice}
        </div>
      ) : null}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#f8fbff]">
        {isGachaDrawProblem && isRouletteOverlayVisible ? (
          <div className="absolute inset-0 z-40 grid place-items-center bg-slate-950/92 backdrop-blur-[2px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-[min(27rem,88%)] overflow-hidden rounded-[1.25rem] border-[3px] border-slate-600 bg-[#171717] p-5 text-center shadow-[0_22px_34px_rgba(0,0,0,0.45)]"
            >
              <div className="relative mx-auto mb-3 inline-flex items-center gap-2 rounded-full border-2 border-emerald-400/70 bg-slate-900 px-5 py-2 text-base font-black text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_18px_rgba(0,0,0,0.28)]">
                <Sparkles className="h-5 w-5" />
                {rouletteResolved ? '선정 완료' : '룰렛 진행 중'}
              </div>
              <div className="relative mx-auto grid h-60 w-60 place-items-center">
                <div className="absolute -top-2 z-30 flex flex-col items-center">
                  <div className="h-5 w-9 rounded-full bg-[#ffc400] shadow-[0_4px_10px_rgba(0,0,0,0.35)]" />
                  <div className="-mt-1 h-0 w-0 border-x-[19px] border-t-[30px] border-x-transparent border-t-[#ffc400] drop-shadow-[0_4px_7px_rgba(0,0,0,0.35)]" />
                </div>
                <div className="absolute inset-0 rounded-full border-[8px] border-slate-100 bg-slate-950 shadow-[0_18px_28px_rgba(0,0,0,0.45)]" />
                <div className="absolute inset-3 rounded-full border-[5px] border-slate-700" />
                <div className="absolute inset-6 rounded-full border-[3px] border-slate-500/70" />
                <motion.div
                  animate={{ rotate: rouletteResolved ? 0 : 360 }}
                  transition={rouletteResolved ? { duration: 0.18, ease: 'easeOut' } : { repeat: Infinity, duration: 0.82, ease: 'linear' }}
                  className="absolute inset-8 overflow-hidden rounded-full border-[5px] border-slate-100 shadow-[inset_0_5px_12px_rgba(15,23,42,0.22)]"
                  style={{
                    background:
                      'repeating-conic-gradient(from -22.5deg, rgba(15,23,42,0.2) 0deg 2deg, transparent 2deg 45deg), conic-gradient(from -22.5deg, #16a34a 0deg 45deg, #ffc400 45deg 90deg, #22c55e 90deg 135deg, #38bdf8 135deg 180deg, #a3e635 180deg 225deg, #f59e0b 225deg 270deg, #14b8a6 270deg 315deg, #84cc16 315deg 360deg)',
                  }}
                />
                <div className="absolute inset-[4.55rem] grid place-items-center rounded-full border-[7px] border-slate-100 bg-[#253493] text-white shadow-[0_8px_18px_rgba(0,0,0,0.34)]">
                  <motion.div
                    key={`roulette-overlay-${rouletteDisplayMode}`}
                    initial={{ scale: 0.74, opacity: 0, y: 4 }}
                    animate={{
                      scale: rouletteResolved ? [1, 1.16, 1.04] : 1,
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ duration: rouletteResolved ? 0.34 : 0.12 }}
                    className="max-w-[6.2rem] break-keep text-center text-[1.45rem] font-black leading-tight"
                  >
                    {rouletteDisplayLabel}
                  </motion.div>
                </div>
              </div>
              {rouletteResolved ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-xl font-black text-emerald-300"
                >
                  {withObjectParticle(rouletteTargetLabel)} 그려 보세요!
                </motion.div>
              ) : null}
            </motion.div>
          </div>
        ) : null}
        <div className="absolute left-1/2 top-3 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#253493] px-3 py-2 shadow-lg">
          <button type="button" onClick={() => { playDrawSound('ui', { gainMultiplier: 0.66, detune: 12 }); setTool('point'); setOpenMenu(null); }} disabled={lineToolOnly} className={toolButtonClass(tool === 'point', 'bg-pink-300', lineToolOnly)} aria-label="점 도구">
            <span className="block h-4 w-4 rounded-full border-4 border-slate-900 bg-slate-500" />
          </button>
          <div className="relative">
            <button type="button" onClick={() => { playDrawSound('ui', { gainMultiplier: 0.66, detune: 24 }); setTool('line'); if (lineToolOnly) setLineMode('segment'); setOpenMenu((menu) => (lineToolOnly ? null : menu === 'line' ? null : 'line')); }} disabled={pointToolOnly || polygonToolOnly} className={toolButtonClass(tool === 'line', 'bg-cyan-100', pointToolOnly || polygonToolOnly)} aria-label="선 도구">
              {lineIcon(lineMode)}
            </button>
            <div className={`absolute left-1/2 top-[3.7rem] flex -translate-x-1/2 gap-2 rounded-full bg-cyan-100/95 px-3 py-2 shadow-xl transition-all duration-200 ease-out ${openMenu === 'line' && !lineToolOnly ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'}`}>
              {(['segment', 'line', 'ray'] as ShapeLineMode[]).map((mode) => (
                <button key={mode} type="button" onClick={() => { playDrawSound('ui', { gainMultiplier: 0.7, detune: mode === 'segment' ? 0 : mode === 'line' ? 18 : 34 }); setTool('line'); setLineMode(mode); setOpenMenu(null); }} className={`grid h-12 w-12 place-items-center rounded-full bg-white transition-all duration-150 ${tool === 'line' && lineMode === mode ? 'ring-4 ring-[#253493]' : 'hover:scale-105'}`} aria-label={mode === 'segment' ? '선분' : mode === 'line' ? '직선' : '반직선'}>
                  {lineIcon(mode)}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <button type="button" onClick={() => { playDrawSound('ui', { gainMultiplier: 0.66, detune: 36 }); setOpenMenu((menu) => (menu === 'polygon' ? null : 'polygon')); }} disabled={isLineConstructionProblem || pointToolOnly || lineToolOnly} className={toolButtonClass(tool === 'polygon', 'bg-lime-300', isLineConstructionProblem || pointToolOnly || lineToolOnly)} aria-label="도형 도구">
              {polygonIcon(polygonSides)}
            </button>
            <div className={`absolute left-1/2 top-[3.7rem] flex -translate-x-1/2 gap-2 rounded-full bg-lime-200/95 px-3 py-2 shadow-xl transition-all duration-200 ease-out ${openMenu === 'polygon' ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'}`}>
              {([3, 4] as Array<3 | 4>).map((sides) => (
                <button key={sides} type="button" onClick={() => { playDrawSound('ui', { gainMultiplier: 0.7, detune: sides === 3 ? 24 : 42 }); setTool('polygon'); setPolygonSides(sides); setOpenMenu(null); }} disabled={(isRightTriangleMultiPolygonProblem && sides !== 3) || (isMultiPolygonProblem && sides !== 4)} className={`grid h-12 w-12 place-items-center rounded-full bg-white transition-all duration-150 disabled:opacity-35 disabled:grayscale ${tool === 'polygon' && polygonSides === sides ? 'ring-4 ring-[#253493]' : 'hover:scale-105'}`} aria-label={sides === 3 ? '삼각형' : '사각형'}>
                  {polygonIcon(sides)}
                </button>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => { setOpenMenu(null); undo(); }} disabled={history.length === 0} className="grid h-12 w-12 place-items-center rounded-full bg-yellow-300 text-[#253493] transition-opacity disabled:opacity-40" aria-label="되돌리기">
            <RotateCcw className="h-6 w-6" strokeWidth={3} />
          </button>
        </div>
        <button type="button" onClick={onSubmit} className="absolute bottom-4 right-5 z-30 flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-lg font-black text-white shadow-lg shadow-emerald-900/25 transition hover:bg-emerald-400">
          <Sword size={22} /> 공격!
        </button>
        <svg ref={svgRef} viewBox="0 0 640 360" className="h-full min-h-[20rem] w-full touch-none" onPointerDown={handleDown}>
          <rect width="640" height="360" fill="#f8fbff" />
          {Array.from({ length: 11 }, (_, i) => <line key={`gx-${i}`} x1={SHAPE_ORIGIN.x + i * SHAPE_GRID} x2={SHAPE_ORIGIN.x + i * SHAPE_GRID} y1="0" y2="360" stroke="#d7dee9" />)}
          {Array.from({ length: 6 }, (_, i) => <line key={`gy-${i}`} y1={SHAPE_ORIGIN.y + i * SHAPE_GRID} y2={SHAPE_ORIGIN.y + i * SHAPE_GRID} x1="0" x2="640" stroke="#d7dee9" />)}
          {Array.from({ length: 66 }, (_, i) => <circle key={`dot-${i}`} cx={SHAPE_ORIGIN.x + (i % 11) * SHAPE_GRID} cy={SHAPE_ORIGIN.y + Math.floor(i / 11) * SHAPE_GRID} r="3" fill="#64748b" opacity="0.45" />)}
          {renderGivenFigure()}
          {polygons.map((polygon, index) => <g key={`poly-${index}`}><polygon points={polygon.map((point) => `${point.x},${point.y}`).join(' ')} fill="#bef26477" stroke="#ef5da8" strokeWidth="3" />{polygon.map((point) => <g key={`${point.x}-${point.y}`}><ShapePointView point={point} /></g>)}</g>)}
          {pendingPolygon.length > 0 && <polyline points={pendingPolygon.map((point) => `${point.x},${point.y}`).join(' ')} fill="none" stroke="#ef5da8" strokeWidth="3" />}
          {lines.map((line, index) => {
            const ends = lineEnds(line);
            return (
              <g key={`line-${index}`}>
                <line x1={ends.a.x} y1={ends.a.y} x2={ends.b.x} y2={ends.b.y} stroke="#f97316" strokeWidth="3.4" strokeLinecap="round" />
                <ShapePointView point={line.start} />
                <ShapePointView point={line.end} />
              </g>
            );
          })}
          {rightAngleMarkers.map(renderRightAngleMarker)}
          {presetAngleVertex ? <ShapePointView point={presetAngleVertex} /> : null}
          {[...points, ...pendingPolygon, ...(lineStart ? [lineStart] : [])].map((point) => <g key={`point-${point.x}-${point.y}-${point.label}`}><ShapePointView point={point} /></g>)}
        </svg>
      </div>
    </div>
  );
}

function ShapeIdentifyProblemCard({
  shapeDraw,
  onAnswerChange,
}: {
  shapeDraw: ShapeDrawProblemData;
  onAnswerChange?: (value: string) => void;
}) {
  const figureVariant = shapeDraw.figureVariant ?? 0;
  const [classifiedTriangleZones, setClassifiedTriangleZones] = useState<Record<number, string | null>>({});
  const [activeClassifyDropZone, setActiveClassifyDropZone] = useState<string | null>(null);
  const gridPoint = (col: number, row: number, label: string): ShapePoint => ({
    x: SHAPE_ORIGIN.x + SHAPE_GRID * col,
    y: SHAPE_ORIGIN.y + SHAPE_GRID * row,
    label,
  });
  const lineEnds = (line: ShapeLine) => {
    if (line.mode === 'segment') return { a: line.start, b: line.end };
    const dx = line.end.x - line.start.x;
    const dy = line.end.y - line.start.y;
    const len = Math.max(1, Math.hypot(dx, dy));
    if (line.mode === 'ray') return { a: line.start, b: { ...line.end, x: line.start.x + (dx / len) * 720, y: line.start.y + (dy / len) * 720 } };
    return {
      a: { ...line.start, x: line.start.x - (dx / len) * 720, y: line.start.y - (dy / len) * 720 },
      b: { ...line.end, x: line.start.x + (dx / len) * 720, y: line.start.y + (dy / len) * 720 },
    };
  };
  const lineLabelSet = getShapeReadLineLabels(figureVariant);
  const givenLineVariants: ShapeLine[] = [
    {
      start: gridPoint(3, 3, lineLabelSet[0]),
      end: gridPoint(7, 2, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
    {
      start: gridPoint(2, 1, lineLabelSet[0]),
      end: gridPoint(8, 4, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
    {
      start: gridPoint(4, 4, lineLabelSet[0]),
      end: gridPoint(6, 1, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
    {
      start: gridPoint(2, 5, lineLabelSet[0]),
      end: gridPoint(8, 2, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
    {
      start: gridPoint(3, 1, lineLabelSet[0]),
      end: gridPoint(9, 1, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
    {
      start: gridPoint(8, 5, lineLabelSet[0]),
      end: gridPoint(4, 2, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
    {
      start: gridPoint(5, 5, lineLabelSet[0]),
      end: gridPoint(5, 1, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
    {
      start: gridPoint(1, 2, lineLabelSet[0]),
      end: gridPoint(9, 4, lineLabelSet[1]),
      mode: shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray' ? shapeDraw.mode : 'segment',
    },
  ];
  const givenLine = givenLineVariants[figureVariant % givenLineVariants.length];
  const angleLabelSet = getShapeReadAngleLabels(figureVariant);
  const angleVariants = [
    {
      vertex: gridPoint(5, 3, angleLabelSet[1]),
      ends: [
        gridPoint(3, 1, angleLabelSet[0]),
        gridPoint(8, 1, angleLabelSet[2]),
      ],
    },
    {
      vertex: gridPoint(6, 3, angleLabelSet[1]),
      ends: [
        gridPoint(3, 4, angleLabelSet[0]),
        gridPoint(8, 1, angleLabelSet[2]),
      ],
    },
    {
      vertex: gridPoint(4, 3, angleLabelSet[1]),
      ends: [
        gridPoint(2, 1, angleLabelSet[0]),
        gridPoint(8, 4, angleLabelSet[2]),
      ],
    },
    {
      vertex: gridPoint(4, 4, angleLabelSet[1]),
      ends: [
        gridPoint(2, 2, angleLabelSet[0]),
        gridPoint(7, 3, angleLabelSet[2]),
      ],
    },
    {
      vertex: gridPoint(7, 3, angleLabelSet[1]),
      ends: [
        gridPoint(4, 1, angleLabelSet[0]),
        gridPoint(5, 5, angleLabelSet[2]),
      ],
    },
    {
      vertex: gridPoint(5, 2, angleLabelSet[1]),
      ends: [
        gridPoint(2, 2, angleLabelSet[0]),
        gridPoint(7, 5, angleLabelSet[2]),
      ],
    },
  ];
  const givenAngle = angleVariants[figureVariant % angleVariants.length];
  const givenAngleVertex: ShapePoint = givenAngle.vertex;
  const givenAngleArms: ShapeLine[] = givenAngle.ends.map((end) => ({ start: givenAngleVertex, end, mode: 'ray' }));
  const rightAngleVariants = [
    {
      vertex: gridPoint(5, 3, '\u3134'),
      ends: [
        gridPoint(5, 1, '\u3131'),
        gridPoint(8, 3, '\u3137'),
      ],
    },
    {
      vertex: gridPoint(5, 3, '\u3134'),
      ends: [
        gridPoint(2, 3, '\u3131'),
        gridPoint(5, 1, '\u3137'),
      ],
    },
    {
      vertex: gridPoint(6, 2, '\u3134'),
      ends: [
        gridPoint(3, 2, '\u3131'),
        gridPoint(6, 5, '\u3137'),
      ],
    },
  ];
  const givenRightAngle = rightAngleVariants[figureVariant % rightAngleVariants.length];
  const givenRightAngleVertex: ShapePoint = givenRightAngle.vertex;
  const givenRightAngleArms: ShapeLine[] = givenRightAngle.ends.map((end) => ({ start: givenRightAngleVertex, end, mode: 'ray' }));
  const triangleVariants: ShapePoint[][] = [
    [
      gridPoint(3, 4, '\u3131'),
      gridPoint(5, 1, '\u3134'),
      gridPoint(8, 4, '\u3137'),
    ],
    [
      gridPoint(2, 3, '\u3131'),
      gridPoint(7, 1, '\u3134'),
      gridPoint(8, 4, '\u3137'),
    ],
    [
      gridPoint(3, 1, '\u3131'),
      gridPoint(8, 2, '\u3134'),
      gridPoint(5, 5, '\u3137'),
    ],
  ];
  const quadrilateralVariants: ShapePoint[][] = [
    [
      gridPoint(2, 4, '\u3131'),
      gridPoint(4, 1, '\u3134'),
      gridPoint(8, 2, '\u3137'),
      gridPoint(7, 5, '\u3139'),
    ],
    [
      gridPoint(2, 2, '\u3131'),
      gridPoint(5, 1, '\u3134'),
      gridPoint(8, 3, '\u3137'),
      gridPoint(6, 5, '\u3139'),
    ],
    [
      gridPoint(3, 4, '\u3131'),
      gridPoint(3, 1, '\u3134'),
      gridPoint(8, 1, '\u3137'),
      gridPoint(9, 4, '\u3139'),
    ],
  ];
  const givenPolygon: ShapePoint[] = shapeDraw.mode === 'triangle'
    ? triangleVariants[figureVariant % triangleVariants.length]
    : quadrilateralVariants[figureVariant % quadrilateralVariants.length];
  const ends = lineEnds(givenLine);
  const isLineFigure = shapeDraw.mode === 'segment' || shapeDraw.mode === 'line' || shapeDraw.mode === 'ray';
  const isAngleFigure = shapeDraw.mode === 'angle';
  const isRightAngleAnimation = shapeDraw.mode === 'rightAngle' && shapeDraw.identifyVariant === 'fold';
  const isRightAngleDefinition = shapeDraw.mode === 'rightAngle' && shapeDraw.identifyVariant === 'definition';
  const isRightAngleMarkProblem = shapeDraw.mode === 'rightAngle' && shapeDraw.identifyVariant === 'rightAngleMark';
  const isRightAngleCountProblem = shapeDraw.mode === 'rightAngle' && shapeDraw.identifyVariant === 'rightAngleCount';
  const isRightAngleNamesProblem = shapeDraw.mode === 'rightAngle' && shapeDraw.identifyVariant === 'rightAngleNames';
  const isClockRightAnglesProblem = shapeDraw.mode === 'rightAngle' && shapeDraw.identifyVariant === 'clockRightAngles';
  const isRightTriangleClassifyProblem = shapeDraw.mode === 'rightTriangle' && shapeDraw.identifyVariant === 'rightTriangleClassify';
  const isRightTriangleDefinition = shapeDraw.mode === 'rightTriangle' && shapeDraw.identifyVariant === 'rightTriangleDefinition';
  const isShapeClassifyProblem = (shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square') && shapeDraw.identifyVariant === 'shapeClassify';
  const isRightAngleCountClassifyProblem = shapeDraw.mode === 'rectangle' && shapeDraw.identifyVariant === 'shapeClassify';
  const isShapeDefinition = (shapeDraw.mode === 'rectangle' || shapeDraw.mode === 'square') && shapeDraw.identifyVariant === 'shapeDefinition';
  const isRightAngleFigure = shapeDraw.mode === 'rightAngle' && shapeDraw.identifyVariant !== 'fold';
  const definitionBlankTarget = figureVariant % 2 === 0 ? 'straight' : 'twice';
  const rightTriangleDefinitionVariant = getRightTriangleDefinitionVariant(figureVariant);
  const rightTriangleDefinitionBlankTarget = rightTriangleDefinitionVariant.blankTarget;
  const shapeDefinitionVariant = getShapeDefinitionVariant(shapeDraw.mode, figureVariant);
  const shapeDefinitionBlankTarget = shapeDefinitionVariant.blankTarget;
  const definitionBracket = (content: string, blank: boolean) => {
    if (!blank) {
      return <span className="mx-1 text-slate-900">{content}</span>;
    }
    const blankWidthClass = content.length <= 3 ? 'min-w-24' : 'min-w-44';

    return (
      <span className={`mx-2 inline-flex ${blankWidthClass} items-center justify-center border-b-[5px] border-[#253493] px-3 pb-1 text-[#253493]`}>
        <span className="invisible">{content}</span>
      </span>
    );
  };
  const rightTriangleClassifyVariantIndex = figureVariant % RIGHT_TRIANGLE_CLASSIFY_VARIANTS.length;
  const rightTriangleClassifyItems = isShapeClassifyProblem
    ? getShapeClassifyItems(shapeDraw.mode, figureVariant)
    : getRightTriangleClassifyItems(figureVariant).map(({ points, isRightTriangle }) => ({ points, isTarget: isRightTriangle }));
  const targetShapeLabel = shapeDraw.mode === 'square'
    ? '정사각형'
    : shapeDraw.mode === 'rectangle'
      ? '직사각형'
      : '직각이 있는 삼각형';
  const nonTargetShapeLabel = shapeDraw.mode === 'rightTriangle'
    ? '직각이 없는 삼각형'
    : `${targetShapeLabel}이 아닌 도형`;

  useEffect(() => {
    if (!isRightTriangleClassifyProblem && !isShapeClassifyProblem) {
      return;
    }

    setClassifiedTriangleZones({});
    setActiveClassifyDropZone(null);
    onAnswerChange?.('');
  }, [isRightTriangleClassifyProblem, isShapeClassifyProblem, onAnswerChange, shapeDraw.answerToken, shapeDraw.figureVariant]);

  useEffect(() => {
    if (!isRightTriangleClassifyProblem && !isShapeClassifyProblem) {
      return;
    }

    const allClassified = rightTriangleClassifyItems.every((_, index) => classifiedTriangleZones[index] !== undefined && classifiedTriangleZones[index] !== null);
    if (!allClassified) {
      onAnswerChange?.('');
      return;
    }

    const isCorrect = rightTriangleClassifyItems.every((item, index) =>
      classifiedTriangleZones[index] === (
        isRightAngleCountClassifyProblem
          ? `angle-${item.rightAngleCount ?? 0}`
          : item.isTarget
            ? 'right'
            : 'notRight'
      )
    );
    onAnswerChange?.(isCorrect ? SHAPE_CLASSIFY_CORRECT_TOKEN : SHAPE_CLASSIFY_INCORRECT_TOKEN);
  }, [classifiedTriangleZones, isRightAngleCountClassifyProblem, isRightTriangleClassifyProblem, isShapeClassifyProblem, onAnswerChange, rightTriangleClassifyItems, rightTriangleClassifyVariantIndex]);

  const renderClassifyTriangleCard = (triangle: { points: string; isTarget: boolean; rightAngleCount?: number }, index: number, compact = false) => {
    const cardHeightClass = compact
      ? isRightAngleCountClassifyProblem
        ? 'h-full min-h-[7.25rem] px-2 py-2'
        : 'h-full min-h-[9.5rem] px-2 py-2'
      : isRightAngleCountClassifyProblem
        ? 'h-32 px-2 py-2'
        : 'h-36 px-2 py-2';
    const badgeClass = isRightAngleCountClassifyProblem
      ? 'h-9 w-9 text-lg'
      : 'h-10 w-10 text-xl';
    const svgHeightClass = isRightAngleCountClassifyProblem
      ? compact
        ? 'h-24'
        : 'h-28'
      : 'h-32';

    return (
      <button
        key={`right-triangle-classify-${index}`}
        type="button"
        draggable
        onDragStart={(event) => {
          event.dataTransfer.setData('text/plain', String(index));
          event.dataTransfer.effectAllowed = 'move';
        }}
        onClick={() => {
          if (!classifiedTriangleZones[index]) return;
          setClassifiedTriangleZones((previous) => ({ ...previous, [index]: null }));
        }}
        className={`group relative flex min-w-0 cursor-grab flex-col items-center justify-center overflow-hidden rounded-2xl border-[3px] border-[#9aa7b8] bg-[#ffffff] shadow-[0_8px_14px_rgba(15,23,42,0.14)] transition duration-150 hover:-translate-y-0.5 hover:border-[#253493] active:cursor-grabbing ${cardHeightClass}`}
        aria-label={`${index + 1}번 도형`}
      >
        <div className={`absolute left-2 top-2 grid place-items-center rounded-full bg-[#253493] font-black text-white shadow-[0_4px_10px_rgba(37,52,147,0.35)] ${badgeClass}`}>{index + 1}</div>
        <svg viewBox="0 0 190 160" className={`${svgHeightClass} w-full pt-1`}>
          <polygon points={triangle.points} fill="#84cc1670" stroke="#ef5da8" strokeWidth="5" strokeLinejoin="round" />
        </svg>
      </button>
    );
  };

  const renderDropZone = (zone: string, label: string) => {
    const zoneItems = rightTriangleClassifyItems
      .map((triangle, index) => ({ triangle, index }))
      .filter(({ index }) => classifiedTriangleZones[index] === zone);
    const isRightZone = zone === 'right' || zone === 'angle-4';
    const isActive = activeClassifyDropZone === zone;
    const Icon = isRightZone ? Check : X;
    const zonePanelClass = isRightZone
      ? isActive
        ? 'border-emerald-500 bg-[#e9fff4] shadow-[0_0_0_4px_rgba(16,185,129,0.18)]'
        : 'border-emerald-400 bg-[#f0fff8]'
      : zone.startsWith('angle-')
        ? isActive
          ? 'border-[#4f8cff] bg-[#eef6ff] shadow-[0_0_0_4px_rgba(79,140,255,0.18)]'
          : 'border-[#8eb8ff] bg-[#f7fbff]'
      : isActive
        ? 'border-sky-500 bg-[#eaf8ff] shadow-[0_0_0_4px_rgba(14,165,233,0.18)]'
        : 'border-sky-400 bg-[#f1fbff]';
    const zoneChipClass = isRightZone
      ? 'bg-emerald-600 text-white'
      : zone.startsWith('angle-')
        ? 'bg-[#253493] text-white'
      : 'bg-sky-600 text-white';
    const emptySlotClass = isRightZone
      ? 'border-emerald-300 bg-[#ffffff]'
      : zone.startsWith('angle-')
        ? 'border-[#a9c7ff] bg-[#ffffff]'
      : 'border-sky-300 bg-[#ffffff]';
    const expectedSlotCount = isRightAngleCountClassifyProblem ? Math.max(1, zoneItems.length) : 2;

    return (
      <div
        className={`flex min-h-0 flex-col rounded-2xl border-[3px] border-dashed transition duration-150 ${
          isRightAngleCountClassifyProblem ? 'px-3 py-3' : 'p-4'
        } ${zonePanelClass}`}
        onDragOver={(event) => {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
          setActiveClassifyDropZone(zone);
        }}
        onDragEnter={() => {
          setActiveClassifyDropZone(zone);
        }}
        onDragLeave={(event) => {
          const relatedTarget = event.relatedTarget;
          if (!(relatedTarget instanceof Node) || !event.currentTarget.contains(relatedTarget)) {
            setActiveClassifyDropZone(null);
          }
        }}
        onDrop={(event) => {
          event.preventDefault();
          setActiveClassifyDropZone(null);
          const triangleIndex = Number.parseInt(event.dataTransfer.getData('text/plain'), 10);
          if (Number.isNaN(triangleIndex)) return;
          setClassifiedTriangleZones((previous) => ({ ...previous, [triangleIndex]: zone }));
        }}
      >
        <div className="flex items-center justify-center">
          <div className={`flex items-center gap-2 rounded-full font-black shadow-[0_5px_10px_rgba(37,52,147,0.18)] ${
            isRightAngleCountClassifyProblem ? 'px-4 py-1.5 text-base leading-tight' : 'px-4 py-1.5 text-base sm:text-lg'
          } ${zoneChipClass}`}>
            {zone.startsWith('angle-') ? null : <Icon className="h-5 w-5" strokeWidth={4} />}
            {label}
          </div>
        </div>
        <div className={`grid min-h-0 flex-1 items-stretch ${isRightAngleCountClassifyProblem ? 'mt-2 grid-cols-1 gap-2' : 'mt-3 grid-cols-2 gap-3'}`}>
          {zoneItems.map(({ triangle, index }) => renderClassifyTriangleCard(triangle, index, true))}
          {Array.from({ length: Math.max(0, expectedSlotCount - zoneItems.length) }, (_, emptyIndex) => (
            <div
              key={`empty-${zone}-${emptyIndex}`}
              className={`h-full rounded-2xl border-2 border-dashed shadow-inner ${
                isRightAngleCountClassifyProblem ? 'min-h-[7.25rem]' : 'min-h-[9.5rem]'
              } ${emptySlotClass}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderRightTriangleClassifyProblem = () => {
    const sourceItems = rightTriangleClassifyItems
      .map((triangle, index) => ({ triangle, index }))
      .filter(({ index }) => !classifiedTriangleZones[index]);

    return (
      <div className={`grid h-full min-h-[20rem] w-full gap-4 bg-[#fffdf7] px-5 py-5 ${
        isRightAngleCountClassifyProblem ? 'grid-rows-[10rem_minmax(0,1fr)]' : 'grid-rows-[10rem_minmax(0,1fr)]'
      }`}>
        <div
          className={`grid min-h-0 rounded-2xl border-2 border-[#c7d2e0] bg-[#f7fbff] p-3 shadow-[0_8px_16px_rgba(15,23,42,0.08)] transition duration-150 ${
            isRightAngleCountClassifyProblem ? 'grid-cols-4 gap-3' : 'grid-cols-4 gap-4'
          } ${
            activeClassifyDropZone === 'source' ? 'border-[#253493] shadow-[0_0_0_4px_rgba(37,52,147,0.18)]' : ''
          }`}
          onDragOver={(event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
            setActiveClassifyDropZone('source');
          }}
          onDragEnter={() => {
            setActiveClassifyDropZone('source');
          }}
          onDragLeave={(event) => {
            const relatedTarget = event.relatedTarget;
            if (!(relatedTarget instanceof Node) || !event.currentTarget.contains(relatedTarget)) {
              setActiveClassifyDropZone(null);
            }
          }}
          onDrop={(event) => {
            event.preventDefault();
            setActiveClassifyDropZone(null);
            const triangleIndex = Number.parseInt(event.dataTransfer.getData('text/plain'), 10);
            if (Number.isNaN(triangleIndex)) return;
            setClassifiedTriangleZones((previous) => ({ ...previous, [triangleIndex]: null }));
          }}
        >
          {sourceItems.map(({ triangle, index }) => renderClassifyTriangleCard(triangle, index))}
          {Array.from({ length: Math.max(0, 4 - sourceItems.length) }, (_, emptyIndex) => (
            <div
              key={`source-empty-${emptyIndex}`}
              className={`rounded-2xl border-2 border-dashed border-slate-300 bg-white ${
                isRightAngleCountClassifyProblem ? 'h-32' : 'h-36'
              }`}
            />
          ))}
        </div>
        <div className={`grid min-h-0 ${isRightAngleCountClassifyProblem ? 'grid-cols-5 gap-2' : 'grid-cols-2 gap-4'}`}>
          {isRightAngleCountClassifyProblem ? (
            [0, 1, 2, 3, 4].map((count) => renderDropZone(`angle-${count}`, `직각 ${count}개`))
          ) : (
            <>
              {renderDropZone('right', targetShapeLabel)}
              {renderDropZone('notRight', nonTargetShapeLabel)}
            </>
          )}
        </div>
      </div>
    );
  };
  const renderStaticRightAngleMarker = (vertex: ShapePoint, a: ShapePoint, b: ShapePoint) => {
    const size = 24;
    const lengthA = Math.max(1, Math.hypot(a.x - vertex.x, a.y - vertex.y));
    const lengthB = Math.max(1, Math.hypot(b.x - vertex.x, b.y - vertex.y));
    const unitA = { x: (a.x - vertex.x) / lengthA, y: (a.y - vertex.y) / lengthA };
    const unitB = { x: (b.x - vertex.x) / lengthB, y: (b.y - vertex.y) / lengthB };
    const p1 = { x: vertex.x + unitA.x * size, y: vertex.y + unitA.y * size };
    const corner = { x: p1.x + unitB.x * size, y: p1.y + unitB.y * size };
    const p2 = { x: vertex.x + unitB.x * size, y: vertex.y + unitB.y * size };
    const path = `M ${p1.x} ${p1.y} L ${corner.x} ${corner.y} L ${p2.x} ${p2.y}`;

    return (
      <g pointerEvents="none">
        <path d={path} fill="none" stroke="#fff" strokeWidth="9" strokeLinejoin="miter" strokeLinecap="butt" />
        <path d={path} fill="none" stroke="#ef4444" strokeWidth="4.5" strokeLinejoin="miter" strokeLinecap="butt" />
      </g>
    );
  };
  const rightAngleMarkerAt = (x: number, y: number, rotate = 0) => (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`} pointerEvents="none">
      <path d="M 0 20 L 20 20 L 20 0" fill="none" stroke="#fff" strokeWidth="8" strokeLinejoin="miter" />
      <path d="M 0 20 L 20 20 L 20 0" fill="none" stroke="#ef4444" strokeWidth="4.2" strokeLinejoin="miter" />
    </g>
  );
  const renderRightAngleMarkProblem = () => {
    const variantIndex = figureVariant % RIGHT_ANGLE_MARK_ANSWER_TOKENS.length;
    const variantShapes = [
      [
        <polygon key="mark-0-a" points="42,54 184,54 184,226 42,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-0-b" points="234,92 410,126 410,248 234,248" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-0-c" points="462,54 574,54 616,150 574,246 462,246" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-1-a" points="44,64 176,64 176,224 44,224" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-1-b" points="248,66 404,66 404,226 348,226 348,154 248,154" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-1-c" points="480,68 606,226 480,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-2-a" points="54,68 188,68 188,202 54,202" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-2-b" points="262,72 432,72 432,226 218,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-2-c" points="500,72 606,226 500,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-3-a" points="42,74 178,74 178,226 42,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-3-b" points="236,82 420,82 420,234 280,234" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-3-c" points="486,70 604,70 604,178 552,230 486,230" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-4-a" points="38,72 174,72 174,226 38,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-4-b" points="246,62 410,62 410,150 350,150 350,232 246,232" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-4-c" points="486,72 606,72 570,226 486,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-5-a" points="54,226 188,226 54,76" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-5-b" points="246,78 420,78 420,226 292,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-5-c" points="486,72 604,72 604,180 552,228 486,228" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-6-a" points="36,62 172,62 172,214 36,214" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-6-b" points="242,50 420,50 420,228 242,228" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-6-c" points="488,76 610,76 610,232 488,232" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-7-a" points="42,68 178,68 178,220 42,220" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-7-b" points="270,226 420,226 270,86" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-7-c" points="494,88 610,128 570,232 454,194" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-8-a" points="34,70 158,70 158,226 34,226" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-8-b" points="210,52 374,52 374,212 210,212" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-8-c" points="430,74 606,74 606,230 430,230" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-8-d" points="250,282 374,282 250,240" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-9-a" points="26,62 158,62 158,214 26,214" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-9-b" points="208,60 380,60 380,220 208,220" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-9-c" points="448,68 604,68 604,220 448,220" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-9-d" points="220,282 330,282 220,238" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-9-e" points="410,282 526,282 526,236" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-10-a" points="42,74 196,74 196,228 42,228" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-10-b" points="286,80 420,126 370,236 238,190" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-10-c" points="504,76 612,142 558,232 450,168" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-11-a" points="22,62 150,62 150,214 22,214" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-11-b" points="184,58 332,58 332,214 184,214" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-11-c" points="368,64 516,64 516,216 368,216" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-11-d" points="74,282 158,282 74,236" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-11-e" points="282,282 380,282 380,236" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-11-f" points="508,282 606,282 508,236" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-12-a" points="26,62 148,62 148,206 26,206" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-12-b" points="184,54 310,54 310,210 184,210" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-12-c" points="344,68 470,68 470,224 344,224" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-12-d" points="506,58 620,58 620,220 506,220" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
      [
        <polygon key="mark-13-a" points="58,230 186,230 58,92" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-13-b" points="276,84 414,230 276,230" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
        <polygon key="mark-13-c" points="494,230 614,230 614,100" fill="#ffffff" stroke="#111827" strokeWidth="2.8" />,
      ],
    ][variantIndex];

    return (
      <div className="h-full min-h-[20rem] w-full px-5 py-5">
        <svg viewBox="0 0 640 320" className="h-full w-full rounded-2xl bg-white">
          <defs>
            <pattern id={`right-angle-find-grid-${variantIndex}`} width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#7dd3fc" strokeWidth="1.2" strokeDasharray="2 3" />
            </pattern>
          </defs>
          <rect width="640" height="320" fill={`url(#right-angle-find-grid-${variantIndex})`} />
          {variantShapes}
        </svg>
      </div>
    );
  };
  const renderRightAngleCountProblem = () => {
    const answerPattern = RIGHT_ANGLE_COUNT_ANSWERS[figureVariant % RIGHT_ANGLE_COUNT_ANSWERS.length];
    const shapeStyleIndex = figureVariant % 6;
    const shapeByAnswer = {
      0: [
        <svg key="count-zero-0" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="48,112 98,30 150,112" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-zero-1" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="44,42 144,30 132,118 30,130" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-zero-2" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="54,38 142,54 126,122 34,108" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-zero-3" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="48,36 138,58 156,118 34,128" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-zero-4" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="92,24 154,84 118,132 28,104" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-zero-5" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="34,62 120,28 156,98 78,130" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
      ],
      1: [
        <svg key="count-one-0" viewBox="0 0 180 150" className="h-44 w-full">
          <path d="M 38 122 L 38 28 L 132 28 Q 132 122 38 122 Z" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-one-1" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="46,122 132,122 46,36" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-one-2" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="50,122 138,122 50,34" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-one-3" viewBox="0 0 180 150" className="h-44 w-full">
          <path d="M 46 118 L 46 34 L 138 118 Z" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-one-4" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="42,38 42,122 146,96 132,44" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-one-5" viewBox="0 0 180 150" className="h-44 w-full">
          <path d="M 54 124 L 54 36 L 146 64 Q 118 124 54 124 Z" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
      ],
      2: [
        <svg key="count-two-0" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="46,122 132,122 132,28 86,28" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-two-1" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="42,32 138,32 138,118 78,118" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-two-2" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="50,34 132,34 132,122 76,122" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-two-3" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="42,42 136,42 136,122 92,122 72,86 42,86" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-two-4" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="48,34 132,34 132,118 102,118 74,76 48,76" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-two-5" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="42,118 42,38 130,38 130,72 82,118" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
      ],
      3: [
        <svg key="count-three-0" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="42,34 136,34 136,96 94,124 42,124" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-three-1" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="44,38 142,38 142,102 104,126 44,126" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-three-2" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="38,36 130,36 130,92 86,122 38,122" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-three-3" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="52,30 140,30 140,96 98,130 52,130" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-three-4" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="46,42 138,42 138,104 90,126 46,126" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-three-5" viewBox="0 0 180 150" className="h-44 w-full">
          <polygon points="36,34 128,34 128,100 82,124 36,124" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
      ],
      4: [
        <svg key="count-four-0" viewBox="0 0 180 150" className="h-44 w-full">
          <rect x="42" y="28" width="96" height="94" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-four-1" viewBox="0 0 180 150" className="h-44 w-full">
          <rect x="34" y="44" width="116" height="70" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-four-2" viewBox="0 0 180 150" className="h-44 w-full">
          <rect x="56" y="24" width="68" height="102" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-four-3" viewBox="0 0 180 150" className="h-44 w-full">
          <rect x="36" y="34" width="112" height="86" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-four-4" viewBox="0 0 180 150" className="h-44 w-full">
          <rect x="52" y="32" width="84" height="92" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
        <svg key="count-four-5" viewBox="0 0 180 150" className="h-44 w-full">
          <rect x="30" y="48" width="124" height="66" fill="#fff" stroke="#111827" strokeWidth="3" />
        </svg>,
      ],
    };

    return (
      <div className="flex h-full min-h-[20rem] w-full flex-col justify-center px-6 py-6">
        <div className="mx-auto grid h-full w-full grid-cols-3 gap-6">
          {answerPattern.map((answer, index) => {
            const label = ['첫째', '둘째', '셋째'][index];
            return (
              <div
                key={`count-shape-${label}-${answer}`}
                className="flex min-h-[22rem] flex-col items-center justify-between rounded-2xl border-4 border-[#d1dae8] bg-white px-6 py-7 shadow-[0_8px_16px_rgba(15,23,42,0.1)]"
              >
                <div className="text-2xl font-black text-[#1f3f8f]">{label}</div>
                <div className="flex min-h-[12rem] w-full items-center justify-center">{shapeByAnswer[answer][shapeStyleIndex]}</div>
                <div className="flex items-center justify-center gap-3">
                  <span className="grid h-20 w-20 place-items-center rounded-xl border-4 border-slate-300 bg-[#f8fbff] text-2xl font-black text-slate-400 shadow-inner" />
                  <span className="text-4xl font-black text-slate-950">개</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const renderRightAngleNamesProblem = () => {
    const { vertex, rays } = RIGHT_ANGLE_NAME_PROBLEM_VARIANTS[figureVariant % RIGHT_ANGLE_NAME_PROBLEM_VARIANTS.length];

    return (
      <div className="h-full min-h-[20rem] w-full px-6 py-5">
        <svg viewBox="0 0 640 330" className="h-full w-full">
          {rays.map((ray) => (
            <g key={ray.label}>
              <line x1={vertex.x} y1={vertex.y} x2={ray.x} y2={ray.y} stroke="#111827" strokeWidth="3" strokeLinecap="round" />
              <text x={ray.x + (ray.x < vertex.x ? -18 : 10)} y={ray.y + (ray.y < vertex.y ? -10 : 22)} className="fill-[#102a78] text-2xl font-black">{ray.label}</text>
            </g>
          ))}
          <circle cx={vertex.x} cy={vertex.y} r="4.5" fill="#111827" />
          <text x={vertex.x + 7} y={vertex.y + 24} className="fill-[#102a78] text-2xl font-black">{vertex.label}</text>
        </svg>
      </div>
    );
  };
  const renderClockRightAnglesProblem = () => {
    const clockOptions = CLOCK_RIGHT_ANGLE_OPTION_VARIANTS[figureVariant % CLOCK_RIGHT_ANGLE_OPTION_VARIANTS.length];

    return (
      <div className="flex h-full min-h-[20rem] w-full flex-col justify-center px-6 py-6">
        <div className="grid h-full grid-cols-5 gap-6">
          {clockOptions.map((hour) => (
            <div
              key={hour}
              className="grid min-h-[18rem] place-items-center rounded-2xl border-4 px-4 py-4 text-center shadow-[0_8px_16px_rgba(15,23,42,0.12)]"
              style={{ backgroundColor: '#ffffff', borderColor: '#cbd8ea', color: '#0f172a' }}
            >
              <span className="whitespace-nowrap text-5xl font-black" style={{ color: '#0f172a' }}>{hour}시</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full flex-col gap-3 text-slate-900">
      <h2 className="shrink-0 text-2xl font-black leading-tight sm:text-3xl">{shapeDraw.title}</h2>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border-2 border-slate-300 bg-[#f8fbff]">
        {isRightAngleMarkProblem ? (
          renderRightAngleMarkProblem()
        ) : isRightAngleCountProblem ? (
          renderRightAngleCountProblem()
        ) : isRightAngleNamesProblem ? (
          renderRightAngleNamesProblem()
        ) : isClockRightAnglesProblem ? (
          renderClockRightAnglesProblem()
        ) : isRightTriangleClassifyProblem || isShapeClassifyProblem ? (
          renderRightTriangleClassifyProblem()
        ) : isShapeDefinition ? (
          <div className="flex h-full min-h-[20rem] w-full items-center justify-center px-8 py-8">
            <div className="w-full max-w-[58rem] rounded-[2rem] border-4 border-slate-300 bg-white px-8 py-9 text-center shadow-[0_16px_30px_rgba(15,23,42,0.16)]">
              {shapeDefinitionVariant.lines.map((line, lineIndex) => (
                <p key={`shape-definition-${lineIndex}`} className={`${lineIndex > 0 ? 'mt-1 ' : ''}whitespace-nowrap text-[2rem] font-black leading-[1.95] text-slate-900`}>
                  {line.split(/(\[[^\]]+\])/g).map((part, partIndex) => {
                    const blankMap: Record<string, string> = {
                      '[네 각]': 'fourRightAngles',
                      '[직사각형]': 'rectangle',
                      '[정사각형]': 'square',
                      '[네 변]': 'fourSides',
                    };
                    const target = blankMap[part];
                    if (target) {
                      return (
                        <React.Fragment key={`shape-definition-blank-${lineIndex}-${partIndex}`}>
                          {definitionBracket(part.slice(1, -1), shapeDefinitionBlankTarget === target)}
                        </React.Fragment>
                      );
                    }
                    return <span key={`shape-definition-text-${lineIndex}-${partIndex}`}>{part}</span>;
                  })}
                </p>
              ))}
            </div>
          </div>
        ) : isRightTriangleDefinition ? (
          <div className="flex h-full min-h-[20rem] w-full items-center justify-center px-8 py-8">
            <div className="w-full max-w-[48rem] rounded-[2rem] border-4 border-slate-300 bg-white px-8 py-10 text-center shadow-[0_16px_30px_rgba(15,23,42,0.16)]">
              {rightTriangleDefinitionVariant.lines.map((line, lineIndex) => (
                <p key={`right-triangle-definition-${lineIndex}`} className={`${lineIndex > 0 ? 'mt-2 ' : ''}text-3xl font-black leading-[2.1] text-slate-900`}>
                  {line.split(/(\[[^\]]+\])/g).map((part, partIndex) => {
                    if (part === '[한 각]') {
                      return (
                        <React.Fragment key={`definition-blank-${lineIndex}-${partIndex}`}>
                          {definitionBracket('한 각', rightTriangleDefinitionBlankTarget === 'oneAngle')}
                        </React.Fragment>
                      );
                    }
                    if (part === '[직각삼각형]') {
                      return (
                        <React.Fragment key={`definition-blank-${lineIndex}-${partIndex}`}>
                          {definitionBracket('직각삼각형', rightTriangleDefinitionBlankTarget === 'rightTriangle')}
                        </React.Fragment>
                      );
                    }
                    return <span key={`definition-text-${lineIndex}-${partIndex}`}>{part}</span>;
                  })}
                </p>
              ))}
            </div>
          </div>
        ) : isRightAngleDefinition ? (
          <div className="flex h-full min-h-[20rem] w-full items-center justify-center px-8 py-8">
            <div className="w-full max-w-[42rem] rounded-[2rem] border-4 border-slate-300 bg-white px-8 py-10 text-center shadow-[0_16px_30px_rgba(15,23,42,0.16)]">
              <p className="text-3xl font-black leading-[2.1] text-slate-900">
                종이를 [
                {definitionBracket('반듯', definitionBlankTarget === 'straight')}
                ]하게 [
                {definitionBracket('두 번', definitionBlankTarget === 'twice')}
                ] 접었을 때
              </p>
              <p className="mt-2 text-3xl font-black leading-relaxed text-slate-900">
                생기는 각을 직각이라고 합니다.
              </p>
            </div>
          </div>
        ) : (
        <svg viewBox="0 0 640 360" className="h-full min-h-[20rem] w-full">
          <rect width="640" height="360" fill="#f8fbff" />
          {Array.from({ length: 11 }, (_, i) => <line key={`gx-${i}`} x1={SHAPE_ORIGIN.x + i * SHAPE_GRID} x2={SHAPE_ORIGIN.x + i * SHAPE_GRID} y1="0" y2="360" stroke="#d7dee9" />)}
          {Array.from({ length: 6 }, (_, i) => <line key={`gy-${i}`} y1={SHAPE_ORIGIN.y + i * SHAPE_GRID} y2={SHAPE_ORIGIN.y + i * SHAPE_GRID} x1="0" x2="640" stroke="#d7dee9" />)}
          {Array.from({ length: 66 }, (_, i) => <circle key={`dot-${i}`} cx={SHAPE_ORIGIN.x + (i % 11) * SHAPE_GRID} cy={SHAPE_ORIGIN.y + Math.floor(i / 11) * SHAPE_GRID} r="3" fill="#64748b" opacity="0.45" />)}
          {isRightAngleAnimation ? (
            <g>
              <style>{`
                .fold-scene {
                  position: relative;
                  width: 230px;
                  height: 230px;
                  perspective: 1200px;
                  transform-style: preserve-3d;
                  filter: drop-shadow(0 10px 9px rgba(15, 23, 42, 0.22));
                }
                .fold-sheet,
                .fold-panel,
                .fold-face,
                .fold-final,
                .fold-line,
                .fold-ring,
                .fold-arrow {
                  position: absolute;
                  box-sizing: border-box;
                }
                .fold-sheet {
                  left: 0;
                  top: 0;
                  width: 230px;
                  height: 230px;
                  border: 3.8px solid #94a3b8;
                  background: #ffffff;
                  overflow: hidden;
                  transform-style: preserve-3d;
                  will-change: opacity;
                  animation: foldFullSheet 10.4s ease-in-out infinite;
                }
                .fold-top-half {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 230px;
                  height: 115px;
                  background: #ffffff;
                }
                .fold-bottom-half {
                  left: 0;
                  top: 115px;
                  width: 230px;
                  height: 115px;
                  transform-origin: 50% 0%;
                  transform-style: preserve-3d;
                  will-change: transform;
                  animation: foldBottomHalf 10.4s cubic-bezier(0.35, 0, 0.18, 1) infinite;
                }
                .fold-face {
                  inset: 0;
                  backface-visibility: hidden;
                  -webkit-backface-visibility: hidden;
                }
                .fold-bottom-front {
                  background: #ffffff;
                  box-shadow: 0 -8px 16px rgba(148, 163, 184, 0.12) inset;
                }
                .fold-bottom-back {
                  background: #dbeafe;
                  box-shadow: 0 8px 16px rgba(148, 163, 184, 0.14) inset;
                  transform: rotateX(180deg);
                }
                .fold-after-one {
                  left: 0;
                  top: 0;
                  width: 230px;
                  height: 115px;
                  border: 3.8px solid #94a3b8;
                  background: #dbeafe;
                  overflow: hidden;
                  transform-style: preserve-3d;
                  will-change: opacity;
                  animation: foldAfterOne 10.4s ease-in-out infinite;
                }
                .fold-left-half {
                  left: 0;
                  top: 0;
                  width: 115px;
                  height: 115px;
                  background: #bfdbfe;
                }
                .fold-right-half {
                  left: 115px;
                  top: 0;
                  width: 115px;
                  height: 115px;
                  transform-origin: 0% 50%;
                  transform-style: preserve-3d;
                  will-change: transform;
                  animation: foldRightHalf 10.4s cubic-bezier(0.35, 0, 0.18, 1) infinite;
                }
                .fold-right-front {
                  background: #dbeafe;
                  box-shadow: -8px 0 16px rgba(148, 163, 184, 0.13) inset;
                }
                .fold-right-back {
                  background: #bfdbfe;
                  box-shadow: 8px 0 16px rgba(148, 163, 184, 0.15) inset;
                  transform: rotateY(180deg);
                }
                .fold-final {
                  left: 0;
                  top: 0;
                  width: 115px;
                  height: 115px;
                  border: 3.8px solid #94a3b8;
                  background: #bfdbfe;
                  will-change: opacity;
                  animation: foldFinal 10.4s ease-in-out infinite;
                }
                .fold-line {
                  pointer-events: none;
                  background: repeating-linear-gradient(90deg, #64748b 0 8px, transparent 8px 15px);
                  height: 3.8px;
                  opacity: 0;
                  z-index: 7;
                }
                .fold-line-one {
                  left: 0;
                  top: 113px;
                  width: 230px;
                  animation: foldLineOne 10.4s ease-in-out infinite;
                }
                .fold-line-two {
                  left: 113px;
                  top: 0;
                  width: 3.8px;
                  height: 115px;
                  background: repeating-linear-gradient(180deg, #64748b 0 8px, transparent 8px 15px);
                  animation: foldLineTwo 10.4s ease-in-out infinite;
                }
                .fold-ring {
                  left: 85px;
                  top: 85px;
                  width: 60px;
                  height: 60px;
                  border: 7px solid #ef4444;
                  border-radius: 999px;
                  background: rgba(239, 68, 68, 0.08);
                  box-shadow: 0 0 0 8px #ffffff;
                  opacity: 0;
                  transform: scale(0.72);
                  animation: foldRing 10.4s ease-in-out infinite;
                }
                .fold-arrow {
                  opacity: 0;
                  z-index: 6;
                  pointer-events: none;
                }
                .fold-arrow::before,
                .fold-arrow::after {
                  content: "";
                  position: absolute;
                  display: block;
                }
                .fold-arrow-one {
                  left: 102px;
                  top: 166px;
                  width: 26px;
                  height: 62px;
                  animation: foldArrowOne 10.4s ease-in-out infinite;
                }
                .fold-arrow-one::before {
                  left: 11px;
                  top: 12px;
                  width: 5px;
                  height: 42px;
                  border-radius: 999px;
                  background: #2563eb;
                }
                .fold-arrow-one::after {
                  left: 4px;
                  top: 6px;
                  width: 18px;
                  height: 18px;
                  border-left: 5px solid #2563eb;
                  border-top: 5px solid #2563eb;
                  transform: rotate(45deg);
                }
                .fold-arrow-two {
                  left: 158px;
                  top: 44px;
                  width: 62px;
                  height: 26px;
                  animation: foldArrowTwo 10.4s ease-in-out infinite;
                }
                .fold-arrow-two::before {
                  left: 8px;
                  top: 11px;
                  width: 42px;
                  height: 5px;
                  border-radius: 999px;
                  background: #2563eb;
                }
                .fold-arrow-two::after {
                  left: 2px;
                  top: 4px;
                  width: 18px;
                  height: 18px;
                  border-left: 5px solid #2563eb;
                  border-bottom: 5px solid #2563eb;
                  transform: rotate(45deg);
                }
                @keyframes foldFullSheet {
                  0%, 42% { opacity: 1; }
                  45%, 100% { opacity: 0; }
                }
                @keyframes foldBottomHalf {
                  0%, 9% { transform: rotateX(0deg); }
                  16% { transform: rotateX(22deg); }
                  23% { transform: rotateX(56deg); }
                  30% { transform: rotateX(102deg); }
                  37% { transform: rotateX(148deg); }
                  44%, 100% { transform: rotateX(180deg); }
                }
                @keyframes foldAfterOne {
                  0%, 41% { opacity: 0; }
                  45%, 72% { opacity: 1; }
                  75%, 100% { opacity: 0; }
                }
                @keyframes foldRightHalf {
                  0%, 45% { transform: rotateY(0deg); }
                  51% { transform: rotateY(-22deg); }
                  57% { transform: rotateY(-56deg); }
                  63% { transform: rotateY(-102deg); }
                  69% { transform: rotateY(-148deg); }
                  74%, 100% { transform: rotateY(-180deg); }
                }
                @keyframes foldFinal {
                  0%, 72% { opacity: 0; }
                  75%, 96% { opacity: 1; }
                  100% { opacity: 0; }
                }
                @keyframes foldLineOne {
                  0%, 8% { opacity: 0; }
                  12%, 42% { opacity: 0.9; }
                  45%, 100% { opacity: 0; }
                }
                @keyframes foldLineTwo {
                  0%, 45% { opacity: 0; }
                  48%, 72% { opacity: 0.9; }
                  75%, 100% { opacity: 0; }
                }
                @keyframes foldRing {
                  0%, 76% { opacity: 0; transform: scale(0.72); }
                  77.5% { opacity: 1; transform: scale(1.08); }
                  79%, 90% { opacity: 1; transform: scale(1); }
                  96%, 100% { opacity: 0; transform: scale(0.95); }
                }
                @keyframes foldArrowOne {
                  0%, 9% { opacity: 0; transform: translateY(10px); }
                  13%, 40% { opacity: 0.9; transform: translateY(-10px); }
                  44%, 100% { opacity: 0; transform: translateY(-18px); }
                }
                @keyframes foldArrowTwo {
                  0%, 46% { opacity: 0; transform: translateX(10px); }
                  50%, 70% { opacity: 0.9; transform: translateX(-10px); }
                  74%, 100% { opacity: 0; transform: translateX(-18px); }
                }
              `}</style>
              <foreignObject x="205" y="64" width="230" height="230" style={{ overflow: 'visible' }}>
                <div xmlns="http://www.w3.org/1999/xhtml" className="fold-scene">
                  <div className="fold-sheet">
                    <div className="fold-top-half" />
                    <div className="fold-panel fold-bottom-half">
                      <div className="fold-face fold-bottom-front" />
                      <div className="fold-face fold-bottom-back" />
                    </div>
                    <div className="fold-line fold-line-one" />
                    <div className="fold-arrow fold-arrow-one" />
                  </div>
                  <div className="fold-panel fold-after-one">
                    <div className="fold-panel fold-left-half" />
                    <div className="fold-panel fold-right-half">
                      <div className="fold-face fold-right-front" />
                      <div className="fold-face fold-right-back" />
                    </div>
                    <div className="fold-line fold-line-two" />
                    <div className="fold-arrow fold-arrow-two" />
                  </div>
                  <div className="fold-final" />
                  <div className="fold-ring" />
                </div>
              </foreignObject>
            </g>
          ) : isLineFigure ? (
            <g>
              <line x1={ends.a.x} y1={ends.a.y} x2={ends.b.x} y2={ends.b.y} stroke="#f97316" strokeWidth="4.2" strokeLinecap="round" />
              <ShapePointView point={givenLine.start} />
              <ShapePointView point={givenLine.end} />
            </g>
          ) : isAngleFigure ? (
            <g>
              {givenAngleArms.map((line, index) => {
                const rayEnds = lineEnds(line);
                return <line key={`angle-arm-${index}`} x1={rayEnds.a.x} y1={rayEnds.a.y} x2={rayEnds.b.x} y2={rayEnds.b.y} stroke="#f97316" strokeWidth="4.2" strokeLinecap="round" />;
              })}
              <ShapePointView point={givenAngleArms[0].end} />
              <ShapePointView point={givenAngleVertex} />
              <ShapePointView point={givenAngleArms[1].end} />
            </g>
          ) : isRightAngleFigure ? (
            <g>
              {givenRightAngleArms.map((line, index) => {
                const rayEnds = lineEnds(line);
                return <line key={`right-angle-arm-${index}`} x1={rayEnds.a.x} y1={rayEnds.a.y} x2={rayEnds.b.x} y2={rayEnds.b.y} stroke="#f97316" strokeWidth="4.2" strokeLinecap="round" />;
              })}
              {renderStaticRightAngleMarker(givenRightAngleVertex, givenRightAngleArms[0].end, givenRightAngleArms[1].end)}
              <ShapePointView point={givenRightAngleArms[0].end} />
              <ShapePointView point={givenRightAngleVertex} />
              <ShapePointView point={givenRightAngleArms[1].end} />
            </g>
          ) : (
            <g>
              <polygon points={givenPolygon.map((point) => `${point.x},${point.y}`).join(' ')} fill="#bef26477" stroke="#ef5da8" strokeWidth="4" />
              {givenPolygon.map((point) => <g key={point.label}><ShapePointView point={point} /></g>)}
            </g>
          )}
        </svg>
        )}
      </div>
    </div>
  );
}

function createEstimationChoices(answer: number) {
  const roundedAnswer = clamp(
    roundToNearestUnit(answer, ESTIMATION_ROUNDING_UNIT),
    ESTIMATION_MIN_ANSWER,
    ESTIMATION_MAX_ANSWER,
  );
  const candidates = new Set<number>([roundedAnswer]);

  for (let step = 1; candidates.size < 3; step += 1) {
    const lower = roundedAnswer - ESTIMATION_ROUNDING_UNIT * step;
    if (lower >= ESTIMATION_MIN_ANSWER) {
      candidates.add(lower);
    }

    if (candidates.size >= 3) {
      break;
    }

    const upper = roundedAnswer + ESTIMATION_ROUNDING_UNIT * step;
    if (upper <= ESTIMATION_MAX_ANSWER) {
      candidates.add(upper);
    }
  }

  return {
    answer: roundedAnswer,
    options: shuffleNumbers([...candidates]),
  };
}

function createEstimationOperand(anchor: number) {
  const minValue = Math.max(ESTIMATION_MIN_ANSWER, anchor - ESTIMATION_ROUNDING_UNIT / 2 + 1);
  const maxValue = Math.min(999, anchor + ESTIMATION_ROUNDING_UNIT / 2 - 1);
  const candidates: number[] = [];

  for (let value = minValue; value <= maxValue; value += 1) {
    if (isEstimationBoundaryValue(value)) {
      continue;
    }

    if (Math.abs(value - anchor) < ESTIMATION_MIN_DISTANCE_FROM_ANCHOR) {
      continue;
    }

    if (roundToNearestUnit(value, ESTIMATION_ROUNDING_UNIT) !== anchor) {
      continue;
    }

    candidates.push(value);
  }

  if (candidates.length === 0) {
    return anchor;
  }

  return candidates[randomIntInRange(0, candidates.length - 1)];
}

function createEstimationProblem(): EstimationProblem {
  const anchors = Array.from(
    { length: (ESTIMATION_MAX_ANSWER - ESTIMATION_MIN_ANSWER) / ESTIMATION_ROUNDING_UNIT + 1 },
    (_, index) => ESTIMATION_MIN_ANSWER + index * ESTIMATION_ROUNDING_UNIT,
  );

  for (let attempt = 0; attempt < ESTIMATION_MAX_GENERATION_ATTEMPTS; attempt += 1) {
    const leftAnchor = anchors[randomIntInRange(0, anchors.length - 1)];
    const rightAnchor = anchors[randomIntInRange(0, anchors.length - 1)];
    const left = createEstimationOperand(leftAnchor);
    const right = createEstimationOperand(rightAnchor);
    const isAddition = Math.random() > 0.5;

    if (isAddition) {
      const exactAnswer = left + right;
      const estimatedAnswer = leftAnchor + rightAnchor;
      if (
        estimatedAnswer < ESTIMATION_MIN_ANSWER
        || estimatedAnswer > ESTIMATION_MAX_ANSWER
        || exactAnswer > ESTIMATION_MAX_RAW_ANSWER
        || isEstimationBoundaryValue(exactAnswer)
        || roundToNearestUnit(exactAnswer, ESTIMATION_ROUNDING_UNIT) !== estimatedAnswer
      ) {
        continue;
      }

      const choices = createEstimationChoices(exactAnswer);
      return {
        prompt: ESTIMATION_PROMPT,
        question: `${left} + ${right}`,
        options: choices.options,
        answer: choices.answer,
      };
    }

    const largerAnchor = Math.max(leftAnchor, rightAnchor);
    const smallerAnchor = Math.min(leftAnchor, rightAnchor);
    const leftValue = largerAnchor === leftAnchor ? left : right;
    const rightValue = largerAnchor === leftAnchor ? right : left;
    const exactAnswer = leftValue - rightValue;
    const estimatedAnswer = largerAnchor - smallerAnchor;
    if (
      estimatedAnswer < ESTIMATION_MIN_ANSWER
      || estimatedAnswer > ESTIMATION_MAX_ANSWER
      || exactAnswer < ESTIMATION_MIN_ANSWER
      || exactAnswer > ESTIMATION_MAX_RAW_ANSWER
      || isEstimationBoundaryValue(exactAnswer)
      || roundToNearestUnit(exactAnswer, ESTIMATION_ROUNDING_UNIT) !== estimatedAnswer
    ) {
      continue;
    }

    const choices = createEstimationChoices(exactAnswer);
    return {
      prompt: ESTIMATION_PROMPT,
      question: `${leftValue} - ${rightValue}`,
      options: choices.options,
      answer: choices.answer,
    };
  }

  return {
    prompt: ESTIMATION_PROMPT,
    question: '320 + 180',
    options: shuffleNumbers([400, 500, 600]),
    answer: 500,
  };
}

export default function App() {
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const lowHealthPulsePlayedRef = useRef(false);
  const countdownDangerPlayedRef = useRef(false);
  const zeroTensBorrowCoachmarkLevelsRef = useRef(new Set<number>());
  const unitSelectionChallengeLevelsRef = useRef(new Set<number>());
  const unit1ProblemSequenceRef = useRef<Record<number, number>>({});
  const unit3ProblemSequenceRef = useRef<Record<number, number>>({});
  const unit3Level12RoundTemplateOrderRef = useRef<Level12TemplateId[] | null>(null);
  const unit3Level12PreviousTemplateOrderRef = useRef<Level12TemplateId[]>([]);
  const developerProblemHistoryRef = useRef<DeveloperProblemSnapshot[]>([]);
  const developerProblemHistoryIndexRef = useRef(-1);
  const currentPlayRunIdRef = useRef(0);
  const recordedPlayRunIdRef = useRef<number | null>(null);
  const gameStateRef = useRef<GameState>('start');
  const battleTimeoutIdsRef = useRef<number[]>([]);
  const recordClearHoldTimeoutRef = useRef<number | null>(null);
  const didClearRecordsByHoldRef = useRef(false);
  const isDeveloperShortcutEnabled = true;
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [isReadingActivityBlocked, setIsReadingActivityBlocked] = useState(() => isReadingActivityTime());
  const [gameState, setGameState] = useState<GameState>('start');
  const [playerName, setPlayerName] = useState(DEFAULT_PLAYER_NAME);
  const [pendingPlayerName, setPendingPlayerName] = useState('');
  const [isNamePromptOpen, setIsNamePromptOpen] = useState(false);
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [specialOpponentSelections, setSpecialOpponentSelections] = useState<SpecialOpponentSelections>(DEFAULT_SPECIAL_OPPONENT_SELECTIONS);
  const [level, setLevel] = useState(1);
  const [problem, setProblem] = useState<Problem>(() => getProblemForTurn(DEFAULT_LEARNING_UNIT_ID, 1, 100));
  const [inputValue, setInputValue] = useState('');
  const [unitInputValue, setUnitInputValue] = useState('');
  const [shapeDrawNotice, setShapeDrawNotice] = useState('');
  const [resolvedShapeRouletteKey, setResolvedShapeRouletteKey] = useState<string | null>(null);
  const [isRightAngleFoldAnswerEnabled, setIsRightAngleFoldAnswerEnabled] = useState(true);
  const [clockAnswerInput, setClockAnswerInput] = useState<ClockReadingAnswerInput>({ hours: '', minutes: '', seconds: '' });
  const [isUnitMenuOpen, setIsUnitMenuOpen] = useState(false);
  const [builderSlotValues, setBuilderSlotValues] = useState<Record<string, string>>({});
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [message, setMessage] = useState(() => getOpponentEntranceMessage(DEFAULT_LEARNING_UNIT_ID, 1, DEFAULT_SPECIAL_OPPONENT_SELECTIONS));
  const [showMsg, setShowMsg] = useState(true);
  const [problemCoachmark, setProblemCoachmark] = useState<string | null>(null);
  const [battleDifficulty, setBattleDifficulty] = useState<BattleDifficulty>('normal');
  const [hasLegacyChampionGoma] = useState(readChampionGomaUnlock);
  const [unlockedPlayerSkinIds, setUnlockedPlayerSkinIds] = useState<PlayerSkinId[]>(() => readUnlockedPlayerSkinIds(hasLegacyChampionGoma));
  const [selectedPlayerSkinId, setSelectedPlayerSkinId] = useState<PlayerSkinId>(() => readSelectedPlayerSkinId(readUnlockedPlayerSkinIds(readChampionGomaUnlock())));
  const [isSkinPickerOpen, setIsSkinPickerOpen] = useState(false);
  const [pendingRewardSkin, setPendingRewardSkin] = useState<PlayerSkinConfig | null>(null);
  const [isRewardPoolDepleted, setIsRewardPoolDepleted] = useState(false);
  const [rewardRoulettePhase, setRewardRoulettePhase] = useState<RewardRoulettePhase>('spinning');
  const [rewardRouletteSpinKey, setRewardRouletteSpinKey] = useState(0);
  const [storedPlayRecords, setStoredPlayRecords] = useState<StoredPlayRecord[]>(readStoredPlayRecords);
  const [selectedLearningUnitId, setSelectedLearningUnitId] = useState<LearningUnitId | null>(null);
  const activeLearningUnitId = selectedLearningUnitId ?? DEFAULT_LEARNING_UNIT_ID;
  const [isEstimation, setIsEstimation] = useState(false);
  const [estimationProblem, setEstimationProblem] = useState<EstimationProblem | null>(null);
  const [isUnitSelectionChallenge, setIsUnitSelectionChallenge] = useState(false);
  const [unitSelectionChallenge, setUnitSelectionChallenge] = useState<UnitSelectionChallenge | null>(null);
  const [isSpecialChallengeResolving, setIsSpecialChallengeResolving] = useState(false);
  const [timeLeft, setTimeLeft] = useState(ESTIMATION_TIME_LIMIT_SECONDS);
  const [isSecretCodePromptOpen, setIsSecretCodePromptOpen] = useState(false);
  const [secretCodeInput, setSecretCodeInput] = useState('');
  const [secretCodeError, setSecretCodeError] = useState('');
  const [isCaterpillarEvolutionOpen, setIsCaterpillarEvolutionOpen] = useState(false);
  const [isMetamonTransformOpen, setIsMetamonTransformOpen] = useState(false);
  const [pendingLevelTransition, setPendingLevelTransition] = useState<{
    nextLevel: number;
    shouldQueueEstimation: boolean;
  } | null>(null);

  const updateMessage = (msg: string) => {
    setMessage(msg);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  useEffect(() => {
    let boundaryTimeoutId: number | null = null;

    const refreshReadingActivityBlock = () => {
      setIsReadingActivityBlocked(isReadingActivityTime());
    };

    const scheduleNextReadingActivityBoundary = () => {
      if (boundaryTimeoutId !== null) {
        window.clearTimeout(boundaryTimeoutId);
      }

      boundaryTimeoutId = window.setTimeout(() => {
        refreshReadingActivityBlock();
        scheduleNextReadingActivityBoundary();
      }, getMillisecondsUntilNextReadingActivityBoundary());
    };

    refreshReadingActivityBlock();
    scheduleNextReadingActivityBoundary();
    const intervalId = window.setInterval(refreshReadingActivityBlock, 1_000);
    window.addEventListener('focus', refreshReadingActivityBlock);
    document.addEventListener('visibilitychange', refreshReadingActivityBlock);

    return () => {
      if (boundaryTimeoutId !== null) {
        window.clearTimeout(boundaryTimeoutId);
      }
      window.clearInterval(intervalId);
      window.removeEventListener('focus', refreshReadingActivityBlock);
      document.removeEventListener('visibilitychange', refreshReadingActivityBlock);
    };
  }, []);

  useEffect(() => {
    gameStateRef.current = gameState;
    if (gameState !== 'playing') {
      setIsCaterpillarEvolutionOpen(false);
      setIsMetamonTransformOpen(false);
      clearBattleTimeouts();
    }
  }, [gameState]);

  const isActivePlayRun = (runId: number) => (
    currentPlayRunIdRef.current === runId && gameStateRef.current === 'playing'
  );

  const clearBattleTimeouts = () => {
    battleTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    battleTimeoutIdsRef.current = [];
  };

  const scheduleBattleTimeout = (
    callback: () => void,
    delayMs: number,
    runId = currentPlayRunIdRef.current,
  ) => {
    const timeoutId = window.setTimeout(() => {
      battleTimeoutIdsRef.current = battleTimeoutIdsRef.current.filter((id) => id !== timeoutId);
      if (!isActivePlayRun(runId)) {
        return;
      }

      callback();
    }, delayMs);

    battleTimeoutIdsRef.current.push(timeoutId);
    return timeoutId;
  };

  useEffect(() => clearBattleTimeouts, []);

  const recordBattleResult = (result: 'win' | 'lose', reachedLevel: number) => {
    if (recordedPlayRunIdRef.current === currentPlayRunIdRef.current) {
      return;
    }

    recordedPlayRunIdRef.current = currentPlayRunIdRef.current;
    const unit = LEARNING_UNITS.find((learningUnit) => learningUnit.id === activeLearningUnitId);
    const levelDescription = getLevelDescriptionsForUnit(activeLearningUnitId)[reachedLevel] ?? `${reachedLevel}단계`;
    const topic = levelDescription.replace(/^\d+단계:\s*/, '');
    const playedAt = new Date().toISOString();
    const record: StoredPlayRecord = {
      id: `${playedAt}-${currentPlayRunIdRef.current}`,
      playerName: playerName.trim() || DEFAULT_PLAYER_NAME,
      unitId: activeLearningUnitId,
      unitTitle: unit?.title ?? activeLearningUnitId,
      result,
      level: reachedLevel,
      totalLevels: getTotalLevelsForUnit(activeLearningUnitId),
      topic,
      playedAt,
    };

    setStoredPlayRecords((previousRecords) => {
      const nextRecords = [record, ...previousRecords].slice(0, MAX_STORED_PLAY_RECORDS);
      saveStoredPlayRecords(nextRecords);
      if (result === 'win') {
        prepareRandomSkinRewardForClear(activeLearningUnitId);
      }
      return nextRecords;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMsg(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!message.endsWith('등장!')) {
      return;
    }

    const nextEntranceMessage = getOpponentEntranceMessage(activeLearningUnitId, level, specialOpponentSelections);
    if (message !== nextEntranceMessage) {
      setMessage(nextEntranceMessage);
    }
  }, [activeLearningUnitId, level, message, specialOpponentSelections]);

  useEffect(() => {
    if (!audioEngineRef.current) {
      audioEngineRef.current = createAudioEngine();
    }

    return () => {
      closeAudioEngine(audioEngineRef.current);
      audioEngineRef.current = null;
    };
  }, []);

  useEffect(() => {
    const normalizedSkinId = isDeveloperMode
      ? selectedPlayerSkinId
      : normalizeSelectedPlayerSkinId(selectedPlayerSkinId, unlockedPlayerSkinIds);
    if (normalizedSkinId !== selectedPlayerSkinId) {
      setSelectedPlayerSkinId(normalizedSkinId);
      saveSelectedPlayerSkinId(normalizedSkinId);
    }
  }, [isDeveloperMode, selectedPlayerSkinId, unlockedPlayerSkinIds]);

  useEffect(() => cancelRecordClearHold, []);

  const ensureAudioEngine = () => {
    if (
      !audioEngineRef.current ||
      audioEngineRef.current.context.state === 'closed' ||
      audioEngineRef.current.version !== AUDIO_ENGINE_VERSION
    ) {
      closeAudioEngine(audioEngineRef.current);
      audioEngineRef.current = createAudioEngine();
    }

    return audioEngineRef.current;
  };

  const warmAudio = () => {
    const engine = ensureAudioEngine();
    if (!engine || engine.context.state !== 'suspended') {
      return;
    }

    void engine.context.resume().catch(() => undefined);
  };

  const playSound = (effectName: SoundEffectName, options: SoundPlaybackOptions = {}) => {
    const engine = ensureAudioEngine();
    if (!engine) return;

    const startPlayback = () => playEffect(engine, effectName, options);

    if (engine.context.state === 'suspended') {
      void engine.context.resume().then(startPlayback).catch(() => undefined);
      return;
    }

    startPlayback();
  };

  const queueSound = (effectName: SoundEffectName, delayMs: number, options: SoundPlaybackOptions = {}) => {
    window.setTimeout(() => playSound(effectName, options), delayMs);
  };

  const selectPlayerSkin = (skinId: PlayerSkinId) => {
    const nextSkin = PLAYER_SKINS.find((skin) => skin.id === skinId);
    if (!nextSkin || (!isDeveloperMode && !isPlayerSkinUnlocked(nextSkin, unlockedPlayerSkinIds))) {
      return;
    }

    setSelectedPlayerSkinId(skinId);
    saveSelectedPlayerSkinId(skinId);
  };

  const prepareRandomSkinRewardForClear = (unitId: LearningUnitId) => {
    const rewardSkin = pickRandomLockedRewardSkin(unitId, unlockedPlayerSkinIds);
    if (!rewardSkin) {
      setPendingRewardSkin(null);
      setIsRewardPoolDepleted(true);
      return;
    }

    setIsRewardPoolDepleted(false);
    setPendingRewardSkin(rewardSkin);
    setRewardRoulettePhase('spinning');
    setRewardRouletteSpinKey((spinKey) => spinKey + 1);
  };

  const unlockRouletteRewardSkin = (rewardSkin: PlayerSkinConfig) => {
    setUnlockedPlayerSkinIds((previousUnlockedSkinIds) => {
      if (previousUnlockedSkinIds.includes(rewardSkin.id)) {
        return previousUnlockedSkinIds;
      }

      const nextUnlockedSkinIds = normalizeUnlockedPlayerSkinIds(
        [...previousUnlockedSkinIds, rewardSkin.id],
        hasLegacyChampionGoma,
      );
      saveUnlockedPlayerSkinIds(nextUnlockedSkinIds);
      setSelectedPlayerSkinId(rewardSkin.id);
      saveSelectedPlayerSkinId(rewardSkin.id);
      return nextUnlockedSkinIds;
    });
  };

  useEffect(() => {
    if (gameState !== 'win' || !pendingRewardSkin || rewardRoulettePhase !== 'spinning') {
      return;
    }

    playSound('rouletteStart', { gainMultiplier: 0.45, detune: 8 });

    const tickDelays = [120, 250, 370, 480, 590, 710, 850, 1010, 1190, 1390, 1620, 1880, 2180, 2520, 2890];
    const tickTimeoutIds = tickDelays.map((delay, index) =>
      window.setTimeout(() => {
        playSound('rouletteTick', {
          gainMultiplier: Math.max(0.16, 0.38 - index * 0.012),
          detune: index * 9,
        });
      }, delay),
    );

    const revealTimeoutId = window.setTimeout(() => {
      unlockRouletteRewardSkin(pendingRewardSkin);
      setRewardRoulettePhase('revealed');
      playSound('rouletteWin', { gainMultiplier: 0.5, detune: 18 });
      queueSound('levelUp', 180, { gainMultiplier: 0.7, detune: 68 });
    }, 3400);

    return () => {
      tickTimeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.clearTimeout(revealTimeoutId);
    };
  }, [gameState, pendingRewardSkin, rewardRoulettePhase, rewardRouletteSpinKey]);

  const triggerBattleVictory = (detune: number) => {
    recordBattleResult('win', level);
    gameStateRef.current = 'win';
    setGameState('win');
    playSound('win', { gainMultiplier: 1.14, detune });
    queueSound('levelUp', 240, {
      gainMultiplier: 0.78,
      detune: detune + 42,
    });
  };

  const pushDeveloperProblemSnapshot = (snapshot: DeveloperProblemSnapshot) => {
    const currentHistory = developerProblemHistoryRef.current;
    const currentIndex = developerProblemHistoryIndexRef.current;
    const trimmedHistory =
      currentIndex >= 0 && currentIndex < currentHistory.length - 1
        ? currentHistory.slice(0, currentIndex + 1)
        : currentHistory.slice();

    const lastSnapshot = trimmedHistory[trimmedHistory.length - 1];
    if (
      lastSnapshot &&
      lastSnapshot.level === snapshot.level &&
      lastSnapshot.opponentHP === snapshot.opponentHP &&
      lastSnapshot.problem === snapshot.problem &&
      lastSnapshot.problemCoachmark === snapshot.problemCoachmark
    ) {
      developerProblemHistoryRef.current = trimmedHistory;
      developerProblemHistoryIndexRef.current = trimmedHistory.length - 1;
      return;
    }

    const nextHistory = [...trimmedHistory, snapshot];
    developerProblemHistoryRef.current = nextHistory;
    developerProblemHistoryIndexRef.current = nextHistory.length - 1;
  };

  const resetDeveloperProblemHistory = () => {
    developerProblemHistoryRef.current = [];
    developerProblemHistoryIndexRef.current = -1;
  };

  const getNextProblemForTurn = (targetUnitId: LearningUnitId, targetLevel: number, targetOpponentHP: number) => {
    if (targetUnitId === 'unit1') {
      const nextProblemSequence =
        targetOpponentHP === 100
          ? 1
          : (unit1ProblemSequenceRef.current[targetLevel] ?? 1) + 1;

      unit1ProblemSequenceRef.current[targetLevel] = nextProblemSequence;
      return getProblemForTurn(targetUnitId, targetLevel, targetOpponentHP, nextProblemSequence);
    }

    if (targetUnitId !== 'unit3') {
      return getProblemForTurn(targetUnitId, targetLevel, targetOpponentHP);
    }

    const nextProblemSequence =
      targetOpponentHP === 100
        ? 1
        : (unit3ProblemSequenceRef.current[targetLevel] ?? 1) + 1;

    unit3ProblemSequenceRef.current[targetLevel] = nextProblemSequence;

    if (targetLevel === 12) {
      if (nextProblemSequence === 1 || !unit3Level12RoundTemplateOrderRef.current) {
        const nextTemplateOrder = buildLevel12RoundTemplateOrder(unit3Level12PreviousTemplateOrderRef.current);
        unit3Level12RoundTemplateOrderRef.current = nextTemplateOrder;
        unit3Level12PreviousTemplateOrderRef.current = nextTemplateOrder;
      }

      return createLevel12TimeMixedProblem(
        nextProblemSequence,
        targetOpponentHP,
        unit3Level12RoundTemplateOrderRef.current ?? LEVEL12_DEFAULT_TEMPLATE_ORDER,
      );
    }

    return getProblemForTurn(targetUnitId, targetLevel, targetOpponentHP, nextProblemSequence);
  };

  const setProblemWithCoachmark = (
    nextProblem: Problem,
    nextLevel: number,
    options: {
      opponentHP?: number;
      recordInDeveloperHistory?: boolean;
    } = {},
  ) => {
    const nextOpponentHP = options.opponentHP ?? opponentHP;
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setShapeDrawNotice('');
    setIsUnitMenuOpen(false);

    if (activeLearningUnitId !== 'unit2') {
      setProblem(nextProblem);
      setProblemCoachmark(null);
      if (options.recordInDeveloperHistory !== false) {
        pushDeveloperProblemSnapshot({
          level: nextLevel,
          opponentHP: nextOpponentHP,
          problem: nextProblem,
          problemCoachmark: null,
        });
      }
      return;
    }

    const shouldForceZeroTensBorrowProblem =
      zeroTensBorrowCoachmarkLevelsRef.current.size < MAX_ZERO_TENS_BORROW_COACHMARKS &&
      !zeroTensBorrowCoachmarkLevelsRef.current.has(nextLevel) &&
      nextProblem.kind !== 'builder' &&
      (nextLevel === 6 || nextLevel === 7);

    const resolvedProblem =
      shouldForceZeroTensBorrowProblem && !isZeroTensBorrowProblem(nextProblem)
        ? generateRegularProblem(nextLevel, { requireZeroTensBorrow: true })
        : nextProblem;

    setProblem(resolvedProblem);

    const shouldShowZeroTensBorrowCoachmark =
      isZeroTensBorrowProblem(resolvedProblem) &&
      zeroTensBorrowCoachmarkLevelsRef.current.size < MAX_ZERO_TENS_BORROW_COACHMARKS &&
      !zeroTensBorrowCoachmarkLevelsRef.current.has(nextLevel);

    if (shouldShowZeroTensBorrowCoachmark) {
      zeroTensBorrowCoachmarkLevelsRef.current.add(nextLevel);
      setProblemCoachmark(ZERO_TENS_BORROW_COACHMARK_TEXT);
      if (options.recordInDeveloperHistory !== false) {
        pushDeveloperProblemSnapshot({
          level: nextLevel,
          opponentHP: nextOpponentHP,
          problem: resolvedProblem,
          problemCoachmark: ZERO_TENS_BORROW_COACHMARK_TEXT,
        });
      }
      return;
    }

    setProblemCoachmark(null);
    if (options.recordInDeveloperHistory !== false) {
      pushDeveloperProblemSnapshot({
        level: nextLevel,
        opponentHP: nextOpponentHP,
        problem: resolvedProblem,
        problemCoachmark: null,
      });
    }
  };

  const syncCurrentProblemSnapshot = (nextOpponentHP: number) => {
    const currentIndex = developerProblemHistoryIndexRef.current;
    const currentHistory = developerProblemHistoryRef.current;
    const currentSnapshot = currentHistory[currentIndex];

    if (
      currentSnapshot &&
      currentSnapshot.level === level &&
      currentSnapshot.problem === problem &&
      currentSnapshot.problemCoachmark === problemCoachmark
    ) {
      const nextHistory = currentHistory.slice();
      nextHistory[currentIndex] = {
        ...currentSnapshot,
        opponentHP: nextOpponentHP,
      };
      developerProblemHistoryRef.current = nextHistory;
      return;
    }

    pushDeveloperProblemSnapshot({
      level,
      opponentHP: nextOpponentHP,
      problem,
      problemCoachmark,
    });
  };

  const playVisualControlSound = (sound: VisualControlSound) => {
    const effectName: SoundEffectName =
      sound === 'regroup'
        ? 'hintCarry'
        : sound === 'borrow'
          ? 'hintBorrow'
          : sound === 'resolve'
            ? 'hintResolve'
            : 'hintStep';

    playSound(effectName, sound === 'regroup'
      ? { gainMultiplier: 1.04, detune: 24 }
      : sound === 'borrow'
        ? { gainMultiplier: 1.02, detune: -18 }
        : sound === 'resolve'
          ? { gainMultiplier: 1.08, detune: 18 }
          : { gainMultiplier: 1, detune: 8 });
  };

  const [startTime, setStartTime] = useState(Date.now());
  const [isCritical, setIsCritical] = useState(false);
  const [isShortViewport, setIsShortViewport] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.innerWidth >= 1024 && window.innerHeight <= 820;
  });

  const [isAttacking, setIsAttacking] = useState(false);
  const [isOpponentAttacking, setIsOpponentAttacking] = useState(false);
  const [isOpponentHit, setIsOpponentHit] = useState(false);
  const [isPlayerHit, setIsPlayerHit] = useState(false);
  const unitMenuRef = useRef<HTMLDivElement | null>(null);
  const selectedPlayerSkin = PLAYER_SKINS.find((skin) => skin.id === selectedPlayerSkinId) ?? PLAYER_SKINS[0];
  const playerSpriteSet = selectedPlayerSkin.spriteSet;
  const availablePlayerSkins = PLAYER_SKINS.filter((skin) => isDeveloperMode || isPlayerSkinUnlocked(skin, unlockedPlayerSkinIds));
  const playerCharacterImage = isPlayerHit
    ? playerSpriteSet.hit
    : isAttacking
      ? playerSpriteSet.attack
      : playerSpriteSet.default;
  const opponentSpriteSet = getOpponentSpriteSetForLevel(activeLearningUnitId, level, specialOpponentSelections);
  const opponentCharacterImage = opponentSpriteSet
    ? isOpponentHit
      ? opponentSpriteSet.hit
      : isOpponentAttacking
        ? opponentSpriteSet.attack
        : opponentSpriteSet.default
    : null;
  const currentSpecialOpponent = getConfiguredOpponentForUnit(activeLearningUnitId, level, specialOpponentSelections);
  const currentOpponentName = getOpponentNameForLevel(activeLearningUnitId, level, specialOpponentSelections);
  const opponentImageClassName = currentSpecialOpponent?.spriteClassName ?? '';
  const defeatSceneImageClassName = currentSpecialOpponent?.defeatSceneClassName ?? '';
  const displayPlayerName = playerName.trim() || DEFAULT_PLAYER_NAME;
  const trimmedPendingPlayerName = pendingPlayerName.trim();
  const hasPendingPlayerName = trimmedPendingPlayerName.length > 0;
  const selectedLearningUnit = selectedLearningUnitId
    ? LEARNING_UNITS.find((unit) => unit.id === selectedLearningUnitId) ?? null
    : null;
  const levelDescriptions = getLevelDescriptionsForUnit(activeLearningUnitId);
  const totalLevels = getTotalLevelsForUnit(activeLearningUnitId);
  const maxHealth = 100;
  const battleDifficultyConfig = BATTLE_DIFFICULTY_CONFIG[battleDifficulty];
  const regularAttackDamage = battleDifficultyConfig.regularAttackDamage;
  const regularHitDamage = battleDifficultyConfig.regularHitDamage;
  const estimationAttackDamage = battleDifficultyConfig.estimationAttackDamage;
  const estimationHitDamage = battleDifficultyConfig.estimationHitDamage;

  const [showHint, setShowHint] = useState(false);
  const isSpecialChallengeActive = isEstimation || isUnitSelectionChallenge;
  const isFinalUnit2LevelProblem = activeLearningUnitId === 'unit2' && opponentHP <= FINAL_BUILDER_HP;
  const canUseHint = activeLearningUnitId === 'unit2' && level <= 7 && !isFinalUnit2LevelProblem;
  const isHintForced = canUseHint && opponentHP > 50;
  const shouldRenderHorizontalEquation = activeLearningUnitId === 'unit2' && level === 7 && !isHintForced && problem.kind === 'equation';
  const isResultScreen = gameState === 'win' || gameState === 'lose';
  const isWinResult = gameState === 'win';
  const defeatSceneImage = gameState === 'lose' ? getDefeatSceneImageForLevel(activeLearningUnitId, level, specialOpponentSelections) : null;
  const processedOpponentCharacterImage = useEdgeBlackTransparentImage(
    opponentCharacterImage,
    currentSpecialOpponent?.removeSpriteBlackBackground ?? false,
  );
  const processedDefeatSceneImage = useEdgeBlackTransparentImage(
    defeatSceneImage,
    currentSpecialOpponent?.removeDefeatSceneBlackBackground ?? false,
  );
  const currentLevelDescription = levelDescriptions[level] ?? `${level}단계`;
  const finalRecordLabel = gameState === 'win' ? `${level}단계 클리어` : `${level}단계 도달`;
  const finalRecordTopic = currentLevelDescription.replace(/^\d+단계:\s*/, '');
  const rewardRouletteSkins = getRewardPlayerSkinsForUnit(activeLearningUnitId);
  const rewardSlotMachineItems = pendingRewardSkin
    ? [...rewardRouletteSkins, ...rewardRouletteSkins, ...rewardRouletteSkins, pendingRewardSkin]
    : rewardRouletteSkins;
  const rewardSlotMachineStopY = -Math.max(0, rewardSlotMachineItems.length - 1) * 128;
  const visibleStoredPlayRecords = storedPlayRecords.slice(0, 30);
  const hasStoredPlayRecords = visibleStoredPlayRecords.length > 0;
  const visibleStoredPlayRecordSections = visibleStoredPlayRecords.reduce<Array<{
    unitId: LearningUnitId;
    unitTitle: string;
    records: StoredPlayRecord[];
  }>>((sections, record) => {
    const existingSection = sections.find((section) => section.unitId === record.unitId);
    if (existingSection) {
      existingSection.records.push(record);
    } else {
      sections.push({
        unitId: record.unitId,
        unitTitle: record.unitTitle,
        records: [record],
      });
    }

    return sections;
  }, []).sort((a, b) => LEARNING_UNITS.findIndex((unit) => unit.id === a.unitId) - LEARNING_UNITS.findIndex((unit) => unit.id === b.unitId));
  const visibleStoredPlayRecordSummary = getStoredPlayRecordSummary(visibleStoredPlayRecordSections, visibleStoredPlayRecords.length);
  const builderSlotsById =
    problem.kind === 'builder' && problem.builder
      ? Object.fromEntries(problem.builder.slots.map((slot) => [slot.id, slot])) as Record<string, BuildSlotConfig>
      : {};
  const builderEvaluation = evaluateBuilderProblem(problem, builderSlotValues);

  const resetSecretCodePrompt = () => {
    setIsSecretCodePromptOpen(false);
    setSecretCodeInput('');
    setSecretCodeError('');
    setPendingLevelTransition(null);
  };

  const resetDeveloperBattleState = () => {
    setIsAttacking(false);
    setIsOpponentAttacking(false);
    setIsOpponentHit(false);
    setIsPlayerHit(false);
    setIsEstimation(false);
    setEstimationProblem(null);
    setIsUnitSelectionChallenge(false);
    setUnitSelectionChallenge(null);
    setIsSpecialChallengeResolving(false);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    setIsRewardPoolDepleted(false);
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setIsUnitMenuOpen(false);
    resetSecretCodePrompt();
  };

  const restoreDeveloperProblemSnapshot = useEffectEvent((historyIndex: number) => {
    const snapshot = developerProblemHistoryRef.current[historyIndex];
    if (!snapshot) {
      updateMessage('이전 문제 기록이 없어요.');
      playSound('ui', { gainMultiplier: 0.78, detune: -14 });
      return;
    }

    resetDeveloperBattleState();
    developerProblemHistoryIndexRef.current = historyIndex;
    setLevel(snapshot.level);
    setOpponentHP(snapshot.opponentHP);
    setProblem(snapshot.problem);
    setProblemCoachmark(snapshot.problemCoachmark);
  });

  const toggleDeveloperMode = useEffectEvent(() => {
    const nextMode = !isDeveloperMode;
    setIsDeveloperMode(nextMode);
    playSound('ui', {
      gainMultiplier: 0.82,
      detune: nextMode ? 18 : -18,
    });
    updateMessage(nextMode ? '개발자 모드 켜짐' : '개발자 모드 꺼짐');
  });

  const moveToDeveloperLevel = useEffectEvent((targetLevel: number) => {
    if (targetLevel < 1 || targetLevel > totalLevels) {
      updateMessage(`현재 단원에는 ${targetLevel}단계가 없어요.`);
      playSound('ui', { gainMultiplier: 0.78, detune: -12 });
      return;
    }

    resetDeveloperBattleState();
    setPlayerHP(100);
    setLevel(targetLevel);
    setOpponentHP(100);
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, targetLevel, 100), targetLevel, { opponentHP: 100 });
    playSound('ui', { gainMultiplier: 0.84, detune: 16 });
    updateMessage(`개발자 모드: ${targetLevel}단계로 이동!`);
  });

  const moveToPreviousDeveloperProblem = useEffectEvent(() => {
    const previousIndex = developerProblemHistoryIndexRef.current - 1;
    if (previousIndex < 0) {
      updateMessage('이전 문제는 더 없어요.');
      playSound('ui', { gainMultiplier: 0.78, detune: -14 });
      return;
    }

    restoreDeveloperProblemSnapshot(previousIndex);
    playSound('ui', { gainMultiplier: 0.8, detune: -8 });
    updateMessage('이전 문제로 이동!');
  });

  const moveToNextDeveloperProblem = useEffectEvent(() => {
    const nextIndex = developerProblemHistoryIndexRef.current + 1;
    if (nextIndex < developerProblemHistoryRef.current.length) {
      restoreDeveloperProblemSnapshot(nextIndex);
      playSound('ui', { gainMultiplier: 0.8, detune: 8 });
      updateMessage('다음 문제로 이동!');
      return;
    }

    resetDeveloperBattleState();
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, level, opponentHP), level, { opponentHP });
    playSound('ui', { gainMultiplier: 0.8, detune: 8 });
    updateMessage('다음 문제로 이동!');
  });

  const attackAndMoveToNextDeveloperProblem = useEffectEvent(() => {
    if (isSpecialChallengeResolving || isAttacking || isOpponentAttacking || isOpponentHit || isPlayerHit) {
      return;
    }

    if (isEstimation) {
      resolveEstimationResult(true);
      return;
    }

    if (isUnitSelectionChallenge) {
      resolveUnitSelectionResult(true);
      return;
    }

    resolveProblemResult(true, { skipSpecialChallenges: true });
  });

  const hintProblemText =
    problem.kind === 'builder'
      ? builderEvaluation?.status === 'ready'
        ? builderEvaluation.text
        : null
      : problem.text;
  const isInternalShapeAnswerToken =
    inputValue === SHAPE_CLASSIFY_CORRECT_TOKEN ||
    inputValue === SHAPE_CLASSIFY_INCORRECT_TOKEN ||
    inputValue === SHAPE_DRAW_MIXED_TOKEN;
  const isCurrentProblemShapeDragClassify =
    problem.kind === 'shapeDraw' &&
    (problem.shapeDraw?.mode === 'rightTriangle' || problem.shapeDraw?.mode === 'rectangle' || problem.shapeDraw?.mode === 'square') &&
    problem.shapeDraw.task === 'identify' &&
    (problem.shapeDraw.identifyVariant === 'rightTriangleClassify' || problem.shapeDraw.identifyVariant === 'shapeClassify');
  const displayedInputValue = isInternalShapeAnswerToken && !isCurrentProblemShapeDragClassify ? '' : inputValue;
  const normalizedInputValue = displayedInputValue.trim();
  const normalizedUnitInputValue = normalizeAnswerUnit(unitInputValue);
  const normalizedSecretCodeInput = normalizeSecretCode(secretCodeInput);
  const parsedInputAnswer = Number.parseInt(normalizedInputValue, 10);
  const isClockReadingProblem = problem.kind === 'clockReading' && problem.clockReading !== undefined;
  const isTimeAdditionProblem = problem.kind === 'timeAddition' && problem.timeAddition !== undefined;
  const parsedClockAnswer = {
    hours: Number.parseInt(clockAnswerInput.hours.trim(), 10),
    minutes: Number.parseInt(clockAnswerInput.minutes.trim(), 10),
    seconds: Number.parseInt(clockAnswerInput.seconds.trim(), 10),
  };
  const editableClockParts =
    problem.kind === 'clockReading' && problem.clockReading
      ? problem.clockReading.editableParts
      : problem.kind === 'timeAddition' && problem.timeAddition
        ? problem.timeAddition.editableParts
        : [];
  const isStructuredTimeAnswerProblem = isClockReadingProblem || isTimeAdditionProblem;
  const isShapeReadProblem = problem.kind === 'shapeDraw' && problem.shapeDraw?.task === 'identify';
  const currentShapeDrawRouletteKey =
    problem.kind === 'shapeDraw' &&
    problem.shapeDraw?.task === 'draw' &&
    problem.shapeDraw.drawVariant === 'gacha'
      ? [
          activeLearningUnitId,
          level,
          opponentHP,
          problem.shapeDraw.mode,
          problem.shapeDraw.answerToken,
          problem.shapeDraw.figureVariant ?? 0,
        ].join(':')
      : null;
  const isRightAngleFoldIdentifyProblem =
    problem.kind === 'shapeDraw' &&
    problem.shapeDraw?.mode === 'rightAngle' &&
    problem.shapeDraw.task === 'identify' &&
    problem.shapeDraw.identifyVariant === 'fold';
  const isShapeDragClassifyProblem =
    problem.kind === 'shapeDraw' &&
    (problem.shapeDraw?.mode === 'rightTriangle' || problem.shapeDraw?.mode === 'rectangle' || problem.shapeDraw?.mode === 'square') &&
    problem.shapeDraw.task === 'identify' &&
    (problem.shapeDraw.identifyVariant === 'rightTriangleClassify' || problem.shapeDraw.identifyVariant === 'shapeClassify');
  const shapeReadInputPlaceholder = (() => {
    if (!isShapeReadProblem) {
      return '정답 입력';
    }

    const identifyVariant = problem.shapeDraw?.identifyVariant;
    if (identifyVariant === 'definition') {
      return '빈칸 답 쓰기';
    }
    if (identifyVariant === 'rightAngleMark') {
      return '개수 쓰기';
    }
    if (identifyVariant === 'rightAngleCount') {
      return '차례대로 개수 쓰기';
    }
    if (identifyVariant === 'rightAngleNames') {
      return '각 이름 쓰기';
    }
    if (identifyVariant === 'clockRightAngles') {
      return '시각 쓰기';
    }
    if (identifyVariant === 'rightTriangleClassify' || identifyVariant === 'shapeClassify') {
      return '카드 분류하기';
    }
    if (identifyVariant === 'rightTriangleDefinition' || identifyVariant === 'shapeDefinition') {
      return '빈칸 답 쓰기';
    }
    return '이름 쓰기';
  })();
  const hasValidStructuredTimeInput =
    isStructuredTimeAnswerProblem &&
    editableClockParts.every((part) => {
      const value = clockAnswerInput[part].trim();
      return value.length > 0 && !Number.isNaN(Number.parseInt(value, 10));
    });
  const currentTimeAddition = problem.kind === 'timeAddition' ? problem.timeAddition ?? null : null;
  const isVerticalTimeAdditionProblem = currentTimeAddition?.mode === 'vertical';
  const isStoryTimeAdditionProblem = currentTimeAddition?.mode === 'story';
  const usesBattleStructuredTimeInput = activeLearningUnitId === 'unit3' && level === 12 && isStoryTimeAdditionProblem;
  const currentDistanceWorksheetPrompt =
    problem.kind === 'distanceWorksheet' ? problem.distanceWorksheet?.prompt ?? null : null;
  const normalizedDistanceWorksheetInput = currentDistanceWorksheetPrompt
    ? normalizeDistanceWorksheetAnswer(normalizedInputValue, currentDistanceWorksheetPrompt.kind)
    : '';
  const selectedAnswerUnit = problem.kind === 'builder' ? null : problem.answerUnit ?? null;
  const requiresUnitSelection = problem.kind !== 'builder' && problem.requiresUnitSelection === true && selectedAnswerUnit !== null;
  const answerUnitOptions = requiresUnitSelection && selectedAnswerUnit ? getAnswerUnitOptions(selectedAnswerUnit) : [];
  const hasValidUnitInput = requiresUnitSelection ? normalizedUnitInputValue.length > 0 : true;
  const hasValidAnswerInput = normalizedInputValue.length > 0 && !Number.isNaN(parsedInputAnswer) && hasValidUnitInput;
  const hasValidDistanceWorksheetInput =
    currentDistanceWorksheetPrompt !== null &&
    normalizedDistanceWorksheetInput.length > 0 &&
    hasValidUnitInput;
  const hasSecretCodeInput = normalizedSecretCodeInput.length > 0;
  const usesTextAnswerInput = currentDistanceWorksheetPrompt?.kind === 'place';
  const isBattleAnswerInputDisabled = isRightAngleFoldIdentifyProblem && !isRightAngleFoldAnswerEnabled;
  const canAttemptAttack =
    problem.kind === 'shapeDraw'
      ? problem.shapeDraw?.task === 'identify'
        ? inputValue.length > 0 && (!isRightAngleFoldIdentifyProblem || isRightAngleFoldAnswerEnabled)
        : true
      : isStructuredTimeAnswerProblem
      ? hasValidStructuredTimeInput
      : problem.kind === 'distanceWorksheet'
      ? Boolean(hasValidDistanceWorksheetInput)
      : problem.kind === 'builder'
      ? hasValidAnswerInput && builderEvaluation?.status === 'ready'
      : hasValidAnswerInput;
  const storyPromptSections = problem.kind === 'story' ? splitStoryPromptSections(problem.prompt) : null;
  const hasNumberedStoryOptions = Boolean(storyPromptSections && storyPromptSections.optionLines.length >= 2);
  const storyTableLineSet = problem.storyTable
    ? new Set(
        problem.storyTable.rows
          .filter((row) => row.cells.length >= 2)
          .map((row) => `${row.cells[0]}: ${row.cells[1]}`),
      )
    : null;
  const filteredNumberedStoryIntroLines = storyPromptSections
    ? storyPromptSections.introLines.filter((line) => !storyTableLineSet?.has(line))
    : [];
  const numberedStoryInfoLines =
    problem.storyTable && filteredNumberedStoryIntroLines.length > 1
      ? filteredNumberedStoryIntroLines.slice(0, -1)
      : [];
  const numberedStoryQuestionLine = problem.storyTable
    ? filteredNumberedStoryIntroLines[filteredNumberedStoryIntroLines.length - 1] ?? ''
    : '';
  const shouldHighlightPromptNumbers = !(activeLearningUnitId === 'unit3' && level === 8);
  const shouldUseCompactUnit3Viewport = activeLearningUnitId === 'unit3' && level >= 8 && !isStoryTimeAdditionProblem;
  const isCompactBattleViewport =
    isShortViewport || shouldUseCompactUnit3Viewport || hasNumberedStoryOptions;
  const numberedStoryOptionCount = storyPromptSections?.optionLines.length ?? 0;
  const isDenseNumberedStoryLayout = Boolean(
    isCompactBattleViewport && problem.kind === 'story' && problem.storyTable && numberedStoryOptionCount >= 4,
  );
  const numberedStoryShellGapClass = isDenseNumberedStoryLayout
    ? 'gap-2 sm:gap-2.5'
    : isCompactBattleViewport
      ? 'gap-3'
      : 'gap-4 sm:gap-5';
  const numberedStoryCardPaddingClass = isDenseNumberedStoryLayout
    ? 'px-3 py-2.5 sm:px-4 sm:py-3'
    : isCompactBattleViewport
      ? 'px-4 py-3 sm:px-5 sm:py-4'
      : 'px-5 py-4 sm:px-6 sm:py-5';
  const numberedStoryInfoTextClass = isDenseNumberedStoryLayout
    ? 'text-[0.92rem] font-bold leading-[1.48] text-slate-700 sm:text-[1rem] lg:text-[1.08rem]'
    : isCompactBattleViewport
      ? 'text-[1rem] font-bold leading-[1.62] text-slate-700 sm:text-[1.2rem] lg:text-[1.45rem]'
      : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.35rem] lg:text-[1.75rem]';
  const numberedStoryQuestionTextClass = isDenseNumberedStoryLayout
    ? 'text-[1.05rem] font-black leading-[1.38] text-slate-900 sm:text-[1.18rem] lg:text-[1.35rem]'
    : isCompactBattleViewport
      ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.55rem] lg:text-[1.9rem]'
      : 'text-[1.35rem] font-black leading-[1.52] text-slate-900 sm:text-[1.75rem] lg:text-[2.2rem]';
  const numberedStoryOptionCardPaddingClass = isDenseNumberedStoryLayout
    ? 'px-3 py-2.5 sm:px-4 sm:py-3'
    : isCompactBattleViewport
      ? 'px-4 py-3 sm:px-5'
      : 'px-5 py-4 sm:px-6';
  const numberedStoryOptionTextClass = isDenseNumberedStoryLayout
    ? 'text-[0.98rem] font-black leading-[1.34] text-slate-900 sm:text-[1.08rem] lg:text-[1.2rem]'
    : isCompactBattleViewport
      ? 'text-[1.2rem] font-black leading-[1.42] text-slate-900 sm:text-[1.5rem] lg:text-[1.85rem]'
      : 'text-[1.35rem] font-black leading-[1.48] text-slate-900 sm:text-[1.7rem] lg:text-[2.15rem]';
  const numberedStoryOptionGridClass = isDenseNumberedStoryLayout
    ? 'grid min-h-0 flex-1 auto-rows-fr gap-2 sm:grid-cols-2 sm:gap-3'
    : `grid min-h-0 flex-1 ${isCompactBattleViewport ? 'gap-3' : 'gap-4'}`;
  const battleShellWidthClass = isCompactBattleViewport ? 'max-w-7xl' : 'max-w-[78rem]';
  const battleShellResponsiveClass = isShortViewport
    ? 'lg:h-auto lg:max-h-none lg:gap-2 lg:p-3'
    : isCompactBattleViewport
      ? 'lg:h-[48rem] lg:max-h-[calc(100svh-3rem)] lg:gap-2 lg:p-3'
      : 'lg:h-[47.5rem] lg:max-h-[calc(100svh-2.5rem)] lg:gap-4 lg:p-6';
  const battleSidebarResponsiveClass = isCompactBattleViewport
    ? 'lg:w-[27%] lg:p-2.5'
    : 'lg:w-[29.5%] lg:p-4';
  const battleSectionResponsiveClass = isCompactBattleViewport ? 'p-2.5 sm:p-3' : 'p-3 sm:p-4';
  const battleStageResponsiveClass = isCompactBattleViewport
    ? 'lg:h-[clamp(12rem,25vh,16rem)]'
    : 'lg:h-[clamp(18.5rem,33vh,23rem)]';
  const battleStageImageResponsiveClass = isCompactBattleViewport
    ? 'h-auto max-h-[calc(100%-1rem)]'
    : 'h-auto max-h-[calc(100%-1rem)]';
  const battleRightPanelResponsiveClass = isCompactBattleViewport ? 'gap-2' : 'gap-3';
  const battleTopGroupResponsiveClass = isCompactBattleViewport ? 'gap-2' : 'gap-3';
  const battleInputResponsiveClass = isCompactBattleViewport ? 'gap-2' : 'gap-3';

  useEffect(() => {
    setShowHint(isHintForced);
  }, [problem, isHintForced]);

  useEffect(() => {
    setShapeDrawNotice('');
  }, [problem]);

  useEffect(() => {
    if (!isRightAngleFoldIdentifyProblem) {
      setIsRightAngleFoldAnswerEnabled(true);
      return;
    }

    setIsRightAngleFoldAnswerEnabled(false);
    const enableAnswerTimeoutId = window.setTimeout(() => {
      setIsRightAngleFoldAnswerEnabled(true);
    }, RIGHT_ANGLE_FOLD_ANSWER_ENABLE_DELAY_MS);

    return () => {
      window.clearTimeout(enableAnswerTimeoutId);
    };
  }, [isRightAngleFoldIdentifyProblem, problem]);

  useEffect(() => {
    if (
      inputValue !== SHAPE_DRAW_MIXED_TOKEN &&
      inputValue !== SHAPE_CLASSIFY_INCORRECT_TOKEN
    ) {
      setShapeDrawNotice('');
    }
  }, [inputValue]);

  useEffect(() => {
    if (!shapeDrawNotice) {
      return;
    }

    const noticeTimeoutId = window.setTimeout(() => {
      setShapeDrawNotice('');
    }, 3000);

    return () => {
      window.clearTimeout(noticeTimeoutId);
    };
  }, [shapeDrawNotice]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const syncViewportDensity = () => {
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      setIsShortViewport(viewportWidth >= 1024 && viewportHeight <= 820);
    };

    syncViewportDensity();
    window.addEventListener('resize', syncViewportDensity);

    return () => {
      window.removeEventListener('resize', syncViewportDensity);
    };
  }, []);

  useEffect(() => {
    if (problem.kind === 'builder' && problem.builder) {
      setBuilderSlotValues(Object.fromEntries(problem.builder.slots.map((slot) => [slot.id, ''])));
      return;
    }

    setBuilderSlotValues({});
  }, [problem]);

  useEffect(() => {
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
  }, [problem]);

  useEffect(() => {
    if (isSpecialChallengeActive && !isSpecialChallengeResolving && timeLeft > 0) {
      if (timeLeft === 5 && !countdownDangerPlayedRef.current) {
        countdownDangerPlayedRef.current = true;
        playSound('dangerPulse', { gainMultiplier: 0.95, detune: -40 });
      }

      if (timeLeft <= 3) {
        playSound('tick', {
          gainMultiplier: 1 + (3 - timeLeft) * 0.18,
          detune: (3 - timeLeft) * 80,
          noisePlaybackRateMultiplier: 1 + (3 - timeLeft) * 0.03,
        });
      }
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSpecialChallengeActive && !isSpecialChallengeResolving && timeLeft === 0) {
      if (isEstimation) {
        checkEstimation(0);
      } else if (isUnitSelectionChallenge) {
        resolveUnitSelectionResult(false);
      }
    } else {
      countdownDangerPlayedRef.current = false;
    }
  }, [isEstimation, isSpecialChallengeActive, isSpecialChallengeResolving, isUnitSelectionChallenge, timeLeft]);

  useEffect(() => {
    const shouldPulseLowHealth = gameState === 'playing' && !isSpecialChallengeActive && playerHP > 0 && playerHP <= 30;
    setIsCritical(shouldPulseLowHealth || (isSpecialChallengeActive && timeLeft <= 5));

    if (shouldPulseLowHealth && !lowHealthPulsePlayedRef.current) {
      lowHealthPulsePlayedRef.current = true;
      playSound('dangerPulse', { gainMultiplier: 1.05, detune: -70 });
      return;
    }

    if (!shouldPulseLowHealth) {
      lowHealthPulsePlayedRef.current = false;
    }
  }, [gameState, isSpecialChallengeActive, playerHP, timeLeft]);

  const toggleHint = () => {
    playSound('ui');
    setShowHint(prev => !prev);
  };

  const changeBattleDifficulty = (nextDifficulty: BattleDifficulty) => {
    playSound('ui');
    setBattleDifficulty(nextDifficulty);
  };

  const completeLevelTransition = (nextLevel: number, shouldQueueEstimation = false) => {
    setIsOpponentHit(false);
    setIsOpponentAttacking(false);
    setLevel(nextLevel);
    setOpponentHP(100);
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, nextLevel, 100), nextLevel, { opponentHP: 100 });
    queueSound('levelUp', 180, {
      gainMultiplier: 1 + nextLevel * 0.025,
      detune: Math.min(nextLevel * 10, 90),
    });
    updateMessage(getOpponentEntranceMessage(activeLearningUnitId, nextLevel, specialOpponentSelections));
    if (shouldQueueEstimation) {
      queueEstimationChallenge();
    }
  };

  const requestSecretCodeForNextLevel = (nextLevel: number, shouldQueueEstimation = false) => {
    setIsOpponentHit(false);
    setIsOpponentAttacking(false);
    setSecretCodeInput('');
    setSecretCodeError('');
    setPendingLevelTransition({ nextLevel, shouldQueueEstimation });
    setIsSecretCodePromptOpen(true);
    playSound('alert', { gainMultiplier: 0.94, detune: 12 });
    updateMessage('3단원 8단계로 가려면 비밀암호를 입력해야 해!');
  };

  const playCaterpillarEvolutionTransition = (nextLevel: number, shouldQueueEstimation = false) => {
    const runId = currentPlayRunIdRef.current;

    setIsOpponentHit(false);
    setIsOpponentAttacking(false);
    setIsCaterpillarEvolutionOpen(true);
    playSound('levelUp', { gainMultiplier: 0.92, detune: 52 });
    queueSound('correct', 620, { gainMultiplier: 0.74, detune: 96 });
    queueSound('levelUp', 1180, { gainMultiplier: 1.02, detune: 112 });
    updateMessage('배추흰나비 애벌레가 변신한다!');

    scheduleBattleTimeout(() => {
      setIsCaterpillarEvolutionOpen(false);
      completeLevelTransition(nextLevel, shouldQueueEstimation);
      updateMessage('배추흰나비 등장!');
    }, 3100, runId);
  };

  const playMetamonTransformTransition = (nextLevel: number, shouldQueueEstimation = false) => {
    const runId = currentPlayRunIdRef.current;

    setIsOpponentHit(false);
    setIsOpponentAttacking(false);
    setIsMetamonTransformOpen(true);
    playSound('levelUp', { gainMultiplier: 0.9, detune: 36 });
    queueSound('correct', 620, { gainMultiplier: 0.72, detune: 84 });
    queueSound('levelUp', 1220, { gainMultiplier: 1.04, detune: 120 });
    updateMessage('메타몬이 변신한다!');

    scheduleBattleTimeout(() => {
      setIsMetamonTransformOpen(false);
      completeLevelTransition(nextLevel, shouldQueueEstimation);
      updateMessage('메타고마 등장!');
    }, 3100, runId);
  };

  const submitSecretCode = () => {
    if (!pendingLevelTransition) {
      return;
    }

    if (!hasSecretCodeInput) {
      setSecretCodeError('비밀암호를 입력해 주세요.');
      playSound('ui');
      updateMessage('비밀암호를 입력해야 8단계로 갈 수 있어!');
      return;
    }

    if (normalizedSecretCodeInput !== normalizeSecretCode(UNIT3_SECRET_CODE_GATE.answer)) {
      setSecretCodeError('비밀암호가 맞지 않아요. 다시 입력해 보세요.');
      playSound('wrong', { gainMultiplier: 0.9, detune: -18 });
      updateMessage('비밀암호가 틀렸어. 다시 확인해 보자!');
      return;
    }

    const { nextLevel, shouldQueueEstimation } = pendingLevelTransition;
    resetSecretCodePrompt();
    playSound('submit', { gainMultiplier: 0.82, detune: 18 });
    completeLevelTransition(nextLevel, shouldQueueEstimation);
  };

  const handleBuilderSlotChange = (slotId: string, nextValue: string) => {
    if (problem.kind !== 'builder' || !problem.builder) return;

    const slot = problem.builder.slots.find((item) => item.id === slotId);
    if (!slot) return;

    const sanitized = nextValue.replace(/\D/g, '').slice(-1);
    if (sanitized && !slot.digits.includes(sanitized)) {
      return;
    }

    setBuilderSlotValues((prev) => ({ ...prev, [slotId]: sanitized }));
  };

  const handleClockAnswerChange = (part: ClockInputPart, nextValue: string) => {
    const sanitized = nextValue.replace(/\D/g, '').slice(0, 2);
    setClockAnswerInput((prev) => ({ ...prev, [part]: sanitized }));
  };

  const selectEstimationOption = (selected: number) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    playSound('submit', { gainMultiplier: 0.78, detune: 20 });
    playSound('ui');
    checkEstimation(selected);
  };

  const selectUnitSelectionOption = (selected: string) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    playSound('submit', { gainMultiplier: 0.8, detune: 12 });
    playSound('ui');
    resolveUnitSelectionResult(selected === unitSelectionChallenge?.answer);
  };

  const queueEstimationChallenge = () => {
    const runId = currentPlayRunIdRef.current;
    scheduleBattleTimeout(() => {
      triggerEstimation();
    }, 700, runId);
  };

  const queueUnitSelectionChallenge = (challengeLevel: number) => {
    const runId = currentPlayRunIdRef.current;
    scheduleBattleTimeout(() => {
      triggerUnitSelectionChallenge(challengeLevel);
    }, 700, runId);
  };

  const scheduleNextLevelTransition = (nextLevel: number, shouldQueueEstimation = false) => {
    const currentLevel = level;
    const currentUnitId = activeLearningUnitId;
    const runId = currentPlayRunIdRef.current;

    scheduleBattleTimeout(() => {
      if (requiresSecretCodeForLevelTransition(currentUnitId, currentLevel, nextLevel)) {
        requestSecretCodeForNextLevel(nextLevel, shouldQueueEstimation);
        return;
      }

      if (currentUnitId === 'unit1' && currentLevel === 8 && nextLevel === 9) {
        playCaterpillarEvolutionTransition(nextLevel, shouldQueueEstimation);
        return;
      }

      if (currentUnitId === 'unit1' && currentLevel === 6 && nextLevel === 7) {
        playMetamonTransformTransition(nextLevel, shouldQueueEstimation);
        return;
      }

      completeLevelTransition(nextLevel, shouldQueueEstimation);
    }, HIT_POSE_DURATION_MS, runId);
  };

  const triggerEstimation = () => {
    const nextEstimationProblem = createEstimationProblem();

    playSound('alert', { gainMultiplier: 1.08, detune: 25 });
    setIsSpecialChallengeResolving(false);
    setEstimationProblem(nextEstimationProblem);
    setIsEstimation(true);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    updateMessage('갑작스러운 어림잡기 도전!');
  };

  const triggerUnitSelectionChallenge = (challengeLevel: number) => {
    const nextChallenge = createUnitSelectionChallenge(challengeLevel);

    playSound('alert', { gainMultiplier: 1.03, detune: 5 });
    setIsSpecialChallengeResolving(false);
    setUnitSelectionChallenge(nextChallenge);
    setIsUnitSelectionChallenge(true);
    setTimeLeft(UNIT_SELECTION_TIME_LIMIT_SECONDS);
    updateMessage('갑작스러운 단위 선택 도전!');
  };

  const resolveEstimationResult = (isCorrectEstimation: boolean) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    const runId = currentPlayRunIdRef.current;
    setIsSpecialChallengeResolving(true);
    if (isCorrectEstimation) {
      playSound('correct', {
        gainMultiplier: 1.04 + level * 0.02,
        detune: Math.min(level * 8, 60),
      });
      setIsAttacking(true);
      scheduleBattleTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit', {
          gainMultiplier: 1.1 + level * 0.02,
          detune: Math.min(level * 10, 80),
          noisePlaybackRateMultiplier: 1 + level * 0.01,
        });
        scheduleBattleTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS, runId);

        const newOpponentHP = Math.max(0, opponentHP - estimationAttackDamage);
        setOpponentHP(newOpponentHP);
        updateMessage('정확한 어림잡기! 공격 성공!');

        if (newOpponentHP === 0) {
          if (level < totalLevels) {
            scheduleNextLevelTransition(level + 1);
          } else {
            triggerBattleVictory(20);
          }
        } else {
          syncCurrentProblemSnapshot(newOpponentHP);
        }

        setIsEstimation(false);
        setEstimationProblem(null);
        setIsSpecialChallengeResolving(false);
      }, ATTACK_POSE_DURATION_MS, runId);
    } else {
      playSound('wrong', {
        gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.08 : 1,
        detune: -30,
      });
      setIsOpponentAttacking(true);
      scheduleBattleTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit', {
          gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.12 : 1.04,
          detune: -Math.min(level * 10, 70),
          noisePlaybackRateMultiplier: 0.98,
        });
        scheduleBattleTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS, runId);

        const newPlayerHP = Math.max(0, playerHP - estimationHitDamage);
        setPlayerHP(newPlayerHP);
        updateMessage('어림잡기 실패! 반격당했다!');

        if (newPlayerHP === 0) {
          recordBattleResult('lose', level);
          gameStateRef.current = 'lose';
          setGameState('lose');
          playSound('lose', { gainMultiplier: 1.06, detune: -20 });
        }

        setIsEstimation(false);
        setEstimationProblem(null);
        setIsSpecialChallengeResolving(false);
      }, ATTACK_POSE_DURATION_MS, runId);
    }
  };

  const checkEstimation = (selected: number) => {
    resolveEstimationResult(selected === estimationProblem?.answer);
  };

  const resolveUnitSelectionResult = (isCorrectSelection: boolean) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    const runId = currentPlayRunIdRef.current;
    setIsSpecialChallengeResolving(true);
    if (isCorrectSelection) {
      playSound('correct', {
        gainMultiplier: 1.02 + level * 0.02,
        detune: Math.min(level * 7, 55),
      });
      setIsAttacking(true);
      scheduleBattleTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit', {
          gainMultiplier: 1.08 + level * 0.02,
          detune: Math.min(level * 10, 80),
          noisePlaybackRateMultiplier: 1 + level * 0.01,
        });
        scheduleBattleTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS, runId);

        const newOpponentHP = Math.max(0, opponentHP - estimationAttackDamage);
        setOpponentHP(newOpponentHP);
        updateMessage('알맞은 단위를 골랐다! 추가 공격 성공!');

        if (newOpponentHP === 0) {
          if (level < totalLevels) {
            scheduleNextLevelTransition(level + 1);
          } else {
            triggerBattleVictory(22);
          }
        } else {
          syncCurrentProblemSnapshot(newOpponentHP);
        }

        setIsUnitSelectionChallenge(false);
        setUnitSelectionChallenge(null);
        setIsSpecialChallengeResolving(false);
      }, ATTACK_POSE_DURATION_MS, runId);
      return;
    }

    playSound('wrong', {
      gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.08 : 1,
      detune: -24,
    });
    setIsOpponentAttacking(true);
    scheduleBattleTimeout(() => {
      setIsOpponentAttacking(false);
      setIsPlayerHit(true);
      playSound('playerHit', {
        gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.12 : 1.04,
        detune: -Math.min(level * 10, 70),
        noisePlaybackRateMultiplier: 0.98,
      });
      scheduleBattleTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS, runId);

      const newPlayerHP = Math.max(0, playerHP - estimationHitDamage);
      setPlayerHP(newPlayerHP);
      updateMessage('단위 선택 실패! 상대의 반격!');

      if (newPlayerHP === 0) {
        recordBattleResult('lose', level);
        gameStateRef.current = 'lose';
        setGameState('lose');
        playSound('lose', { gainMultiplier: 1.06, detune: -20 });
      }

      setIsUnitSelectionChallenge(false);
      setUnitSelectionChallenge(null);
      setIsSpecialChallengeResolving(false);
    }, ATTACK_POSE_DURATION_MS, runId);
  };

  const resolveProblemResult = (
    isCorrect: boolean,
    options: {
      skipSpecialChallenges?: boolean;
    } = {},
  ) => {
    const skipSpecialChallenges = options.skipSpecialChallenges === true;
    const runId = currentPlayRunIdRef.current;

    if (isCorrect) {
      playSound('correct', {
        gainMultiplier: 1 + level * 0.018,
        detune: Math.min(level * 7, 55),
      });
      setIsAttacking(true);
      scheduleBattleTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit', {
          gainMultiplier: 1.06 + level * 0.02,
          detune: Math.min(level * 10, 80),
          noisePlaybackRateMultiplier: 1 + level * 0.01,
        });
        scheduleBattleTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS, runId);
        
        const currentUnit1ProblemSequence = unit1ProblemSequenceRef.current[level] ?? 1;
        const currentUnit3ProblemSequence = unit3ProblemSequenceRef.current[level] ?? 1;
        const unit1ProblemCount = UNIT1_PROBLEM_COUNTS[level] ?? 1;
        const newOpponentHP =
          activeLearningUnitId === 'unit1'
            ? currentUnit1ProblemSequence >= unit1ProblemCount
              ? 0
              : Math.max(1, Math.round(100 - (currentUnit1ProblemSequence / unit1ProblemCount) * 100))
            : isUnit3FixedTimeSequenceLevel(activeLearningUnitId, level)
            ? getUnit3FixedTimeOpponentHPAfterCorrect(currentUnit3ProblemSequence)
            : Math.max(0, opponentHP - regularAttackDamage);
        setOpponentHP(newOpponentHP);
        updateMessage('공격 성공! 데미지를 입혔다!');
        
        if (newOpponentHP === 0) {
          if (level < totalLevels) {
            scheduleNextLevelTransition(
              level + 1,
              !skipSpecialChallenges &&
                activeLearningUnitId === 'unit2' &&
                canOfferEstimation(activeLearningUnitId, 100) &&
                Math.random() < 0.15,
            );
          } else {
            triggerBattleVictory(18);
          }
        } else {
          setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, level, newOpponentHP), level, { opponentHP: newOpponentHP });
          if (
            !skipSpecialChallenges &&
            activeLearningUnitId === 'unit2' &&
            canOfferEstimation(activeLearningUnitId, newOpponentHP) &&
            Math.random() < 0.15
          ) {
            queueEstimationChallenge();
          }
          if (
            !skipSpecialChallenges &&
            activeLearningUnitId === 'unit3' &&
            UNIT_SELECTION_CHALLENGE_LEVELS.has(level) &&
            !unitSelectionChallengeLevelsRef.current.has(level)
          ) {
            unitSelectionChallengeLevelsRef.current.add(level);
            queueUnitSelectionChallenge(level);
          }
        }
      }, ATTACK_POSE_DURATION_MS, runId);
    } else {
      playSound('wrong', {
        gainMultiplier: previewRemainingHP(playerHP, regularHitDamage) <= 30 ? 1.06 : 1,
        detune: -24,
      });
      setIsOpponentAttacking(true);
      scheduleBattleTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit', {
          gainMultiplier: previewRemainingHP(playerHP, regularHitDamage) <= 30 ? 1.1 : 1.03,
          detune: -Math.min(level * 10, 70),
          noisePlaybackRateMultiplier: 0.98,
        });
        scheduleBattleTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS, runId);
        
        const newPlayerHP = Math.max(0, playerHP - regularHitDamage);
        setPlayerHP(newPlayerHP);
        updateMessage('앗! 공격이 빗나갔다! 상대의 반격!');
        if (newPlayerHP === 0) {
          recordBattleResult('lose', level);
          gameStateRef.current = 'lose';
          setGameState('lose');
          playSound('lose', { gainMultiplier: 1.06, detune: -18 });
        }
      }, ATTACK_POSE_DURATION_MS, runId);
    }
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
  };

  const checkAnswer = () => {
    if (problem.kind === 'shapeDraw' && problem.shapeDraw) {
      if (problem.shapeDraw.task === 'identify') {
        if (isRightAngleFoldIdentifyProblem && !isRightAngleFoldAnswerEnabled) {
          playSound('ui');
          setShapeDrawNotice('종이가 다 접힌 뒤에 답을 써요.');
          return;
        }
        if (isShapeDragClassifyProblem) {
          if (!inputValue) {
            playSound('ui');
            setShapeDrawNotice('모든 카드를 알맞은 칸에 옮긴 뒤 공격해요.');
            return;
          }
          if (inputValue === SHAPE_CLASSIFY_CORRECT_TOKEN) {
            playSound('submit', {
              gainMultiplier: 0.9,
              detune: 10,
            });
            setShapeDrawNotice('');
            resolveProblemResult(true);
            return;
          }
          playSound('submit', {
            gainMultiplier: 0.9,
            detune: 10,
          });
          setShapeDrawNotice('');
          resolveProblemResult(false);
          return;
        }
        if (!normalizedInputValue) {
          playSound('ui');
          setShapeDrawNotice(`${shapeReadInputPlaceholder} 후 공격해요!`);
          return;
        }
        if (isShapeReadAnswerMissingPointNames(problem.shapeDraw.mode, displayedInputValue)) {
          playSound('ui');
          setShapeDrawNotice('점 이름까지 함께 써 보세요.');
          return;
        }
        playSound('submit', {
          gainMultiplier: 0.9,
          detune: 10,
        });
        resolveProblemResult(isShapeReadAnswerCorrect(displayedInputValue, problem.shapeDraw.answerToken));
        return;
      }
      if (inputValue === SHAPE_DRAW_MIXED_TOKEN) {
        playSound('ui');
        setShapeDrawNotice('다른 것이 섞였어요. 필요한 것만 남겨요.');
        updateMessage('다른 것이 섞였어요. 필요한 것만 남겨요.');
        return;
      }
      setShapeDrawNotice('');
      playSound('submit', {
        gainMultiplier: 0.9,
        detune: 10,
      });
      resolveProblemResult(inputValue === problem.shapeDraw.answerToken);
      return;
    }

    if (problem.kind === 'clockReading' && problem.clockReading) {
      if (!hasValidStructuredTimeInput) {
        playSound('ui');
        updateMessage('빈칸을 모두 채워야 공격할 수 있어!');
        return;
      }

      const isCorrect = problem.clockReading.editableParts.every((part) => {
        const expectedValue = getClockReadingPartValue(problem.clockReading!, part);
        const answerValue = parsedClockAnswer[part];
        return answerValue === expectedValue;
      });

      playSound('submit', {
        gainMultiplier: 0.9,
        detune: 10,
      });
      resolveProblemResult(isCorrect);
      return;
    }

    if (problem.kind === 'timeAddition' && problem.timeAddition) {
      if (!hasValidStructuredTimeInput) {
        playSound('ui');
        updateMessage('빈칸을 모두 채워야 공격할 수 있어!');
        return;
      }

      const isCorrect = problem.timeAddition.editableParts.every((part) => {
        const expectedValue = getTimeValuePartValue(problem.timeAddition!.result, part);
        const answerValue = parsedClockAnswer[part];
        return answerValue === expectedValue;
      });

      playSound('submit', {
        gainMultiplier: 0.9,
        detune: 10,
      });
      resolveProblemResult(isCorrect);
      return;
    }

    if (problem.kind === 'distanceWorksheet' && problem.distanceWorksheet) {
      if (!hasValidDistanceWorksheetInput) {
        playSound('ui');
        updateMessage(requiresUnitSelection ? '숫자를 쓰고 단위 버튼도 골라야 공격할 수 있어!' : '정답을 입력해야 공격할 수 있어!');
        return;
      }

      let isCorrect =
        normalizeDistanceWorksheetAnswer(normalizedInputValue, problem.distanceWorksheet.prompt.kind)
        === normalizeDistanceWorksheetAnswer(problem.distanceWorksheet.prompt.answer, problem.distanceWorksheet.prompt.kind);

      if (requiresUnitSelection && selectedAnswerUnit) {
        isCorrect = isCorrect && normalizedUnitInputValue === normalizeAnswerUnit(selectedAnswerUnit);
      }

      playSound('submit', {
        gainMultiplier: 0.9,
        detune: 10,
      });
      resolveProblemResult(isCorrect);
      return;
    }

    if (!hasValidAnswerInput) {
      playSound('ui');
      updateMessage(requiresUnitSelection ? '숫자를 쓰고 단위 버튼도 골라야 공격할 수 있어!' : '정답을 입력해야 공격할 수 있어!');
      return;
    }

    let isCorrect = parsedInputAnswer === problem.answer;

    if (problem.kind === 'builder') {
      if (!builderEvaluation || builderEvaluation.status === 'incomplete' || builderEvaluation.status === 'invalid') {
        playSound('ui');
        updateMessage(builderEvaluation?.message ?? '빈칸에 숫자를 넣어주세요.');
        return;
      }

      isCorrect = parsedInputAnswer === builderEvaluation.answer;
    }

    if (requiresUnitSelection && selectedAnswerUnit) {
      isCorrect = isCorrect && normalizedUnitInputValue === normalizeAnswerUnit(selectedAnswerUnit);
    }

    playSound('submit', {
      gainMultiplier: problem.kind === 'builder' ? 0.82 : 0.9,
      detune: problem.kind === 'builder' ? -10 : 10,
    });
    resolveProblemResult(isCorrect);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!unitMenuRef.current) {
        return;
      }

      if (!unitMenuRef.current.contains(event.target as Node)) {
        setIsUnitMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsUnitMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!requiresUnitSelection) {
      setIsUnitMenuOpen(false);
    }
  }, [requiresUnitSelection]);

  useEffect(() => {
    if (!isDeveloperShortcutEnabled) {
      return;
    }

    const handleDeveloperShortcut = (event: KeyboardEvent) => {
      if (event.repeat) {
        return;
      }

      if (event.key === 'Enter' && event.ctrlKey && event.altKey) {
        event.preventDefault();
        toggleDeveloperMode();
        return;
      }

      if (!isDeveloperMode || gameState !== 'playing') {
        return;
      }

      const targetLevel = getDeveloperLevelFromShortcut(event);
      if (targetLevel !== null) {
        event.preventDefault();
        moveToDeveloperLevel(targetLevel);
        return;
      }

      if (!event.ctrlKey && !event.altKey && !event.metaKey && event.key === 'ArrowRight') {
        event.preventDefault();
        attackAndMoveToNextDeveloperProblem();
        return;
      }

      if (!event.ctrlKey && !event.altKey && !event.metaKey && event.key === 'ArrowLeft') {
        event.preventDefault();
        moveToPreviousDeveloperProblem();
      }
    };

    window.addEventListener('keydown', handleDeveloperShortcut);
    return () => window.removeEventListener('keydown', handleDeveloperShortcut);
  }, [gameState, isDeveloperMode, isDeveloperShortcutEnabled]);

  const startGame = () => {
    const nextSpecialOpponentSelections = pickSpecialOpponentSelections();

    clearBattleTimeouts();
    currentPlayRunIdRef.current += 1;
    recordedPlayRunIdRef.current = null;
    warmAudio();
    playSound('start', { gainMultiplier: 0.8, detune: 12 });
    gameStateRef.current = 'playing';
    setGameState('playing');
    setPendingRewardSkin(null);
    setIsRewardPoolDepleted(false);
    setRewardRoulettePhase('spinning');
    setIsAttacking(false);
    setIsOpponentAttacking(false);
    setIsOpponentHit(false);
    setIsPlayerHit(false);
    setSpecialOpponentSelections(nextSpecialOpponentSelections);
    setLevel(1);
    setPlayerHP(100);
    setOpponentHP(100);
    resetDeveloperProblemHistory();
    zeroTensBorrowCoachmarkLevelsRef.current.clear();
    unitSelectionChallengeLevelsRef.current.clear();
    resetUnit1ProblemOrders();
    unit1ProblemSequenceRef.current = {};
    unit3ProblemSequenceRef.current = {};
    unit3Level12RoundTemplateOrderRef.current = null;
    setIsEstimation(false);
    setEstimationProblem(null);
    setIsUnitSelectionChallenge(false);
    setUnitSelectionChallenge(null);
    setIsSpecialChallengeResolving(false);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    resetSecretCodePrompt();
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, 1, 100), 1, { opponentHP: 100 });
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setIsUnitMenuOpen(false);
    updateMessage(getOpponentEntranceMessage(activeLearningUnitId, 1, nextSpecialOpponentSelections));
  };

  const returnToStartScreen = () => {
    clearBattleTimeouts();
    currentPlayRunIdRef.current += 1;
    warmAudio();
    playSound('ui');
    gameStateRef.current = 'start';
    setGameState('start');
    setPendingRewardSkin(null);
    setIsRewardPoolDepleted(false);
    setRewardRoulettePhase('spinning');
    setIsNamePromptOpen(false);
    setIsRecordModalOpen(false);
    setBattleDifficulty('normal');
    setSelectedLearningUnitId(null);
    resetDeveloperProblemHistory();
    zeroTensBorrowCoachmarkLevelsRef.current.clear();
    unitSelectionChallengeLevelsRef.current.clear();
    resetUnit1ProblemOrders();
    unit1ProblemSequenceRef.current = {};
    unit3ProblemSequenceRef.current = {};
    unit3Level12RoundTemplateOrderRef.current = null;
    setIsEstimation(false);
    setEstimationProblem(null);
    setIsUnitSelectionChallenge(false);
    setUnitSelectionChallenge(null);
    setIsSpecialChallengeResolving(false);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    resetSecretCodePrompt();
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setIsUnitMenuOpen(false);
  };

  const openNamePrompt = () => {
    warmAudio();
    setPendingPlayerName(playerName === DEFAULT_PLAYER_NAME ? '' : playerName);
    setIsNamePromptOpen(true);
  };

  const closeNamePrompt = () => {
    setIsNamePromptOpen(false);
  };

  const openRecordModal = () => {
    warmAudio();
    playSound('ui');
    setIsRecordModalOpen(true);
  };

  const closeRecordModal = () => {
    warmAudio();
    playSound('ui');
    setIsRecordModalOpen(false);
  };

  function cancelRecordClearHold() {
    if (recordClearHoldTimeoutRef.current !== null) {
      window.clearTimeout(recordClearHoldTimeoutRef.current);
      recordClearHoldTimeoutRef.current = null;
    }
  }

  const startRecordClearHold = () => {
    cancelRecordClearHold();
    didClearRecordsByHoldRef.current = false;
    recordClearHoldTimeoutRef.current = window.setTimeout(() => {
      recordClearHoldTimeoutRef.current = null;
      didClearRecordsByHoldRef.current = true;
      setStoredPlayRecords([]);
      saveStoredPlayRecords([]);
      playSound('ui', { gainMultiplier: 0.85, detune: -18 });
      updateMessage('기록을 모두 지웠어요.');
    }, RECORD_CLEAR_HOLD_DURATION_MS);
  };

  const finishRecordClosePress = () => {
    cancelRecordClearHold();
    if (didClearRecordsByHoldRef.current) {
      didClearRecordsByHoldRef.current = false;
      return;
    }

    closeRecordModal();
  };

  const confirmPlayerNameAndContinue = () => {
    if (!trimmedPendingPlayerName) return;

    warmAudio();
    playSound('ui');
    setPlayerName(trimmedPendingPlayerName);
    setIsNamePromptOpen(false);
    setSelectedLearningUnitId(null);
    gameStateRef.current = 'unitSelect';
    setGameState('unitSelect');
  };

  const selectLearningUnit = (unitId: LearningUnitId) => {
    const nextUnit = LEARNING_UNITS.find((unit) => unit.id === unitId);
    if (!nextUnit?.isAvailable) {
      return;
    }

    warmAudio();
    playSound('ui');
    setSelectedLearningUnitId(unitId);
  };

  const startSelectedUnit = () => {
    if (!selectedLearningUnitId) {
      return;
    }

    startGame();
  };

  return (
    <div className={`spotify-app flex min-h-[100svh] flex-col items-center overflow-x-hidden bg-slate-950 font-sans text-white ${
      isResultScreen
        ? 'justify-center overflow-y-hidden p-2 sm:p-3'
        : isShortViewport
          ? 'justify-start overflow-y-auto p-3 sm:p-4 lg:p-4'
          : 'justify-start overflow-y-auto p-3 sm:p-4 lg:justify-center lg:p-6'
    }`}>
      {gameState === 'start' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border-4 border-emerald-200/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.96))] shadow-[0_30px_80px_rgba(15,23,42,0.48)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_28%)]" />

          <div className="relative flex flex-col gap-5 p-3 sm:gap-6 sm:p-5 lg:p-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.28, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(2,6,23,0.34)]"
            >
              <img
                src={startHeroImage}
                alt="숲속에서 동물 친구들이 숫자와 수학 기호를 들고 있는 수학 게임 인트로 그림"
                className="block w-full rounded-[2rem] object-cover"
                draggable={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.28, ease: 'easeOut' }}
              className="flex flex-col items-center px-2 pb-2 pt-1 text-center"
            >
              <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <button
                  onPointerDown={warmAudio}
                  onClick={openNamePrompt}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-8 py-4 text-xl font-black text-slate-950 transition hover:scale-[1.01] hover:bg-yellow-300 sm:w-auto sm:min-w-[17rem] sm:px-10 sm:py-5 sm:text-2xl"
                >
                  <Play className="h-6 w-6" />
                  배틀 시작!
                </button>
                <button
                  type="button"
                  onPointerDown={warmAudio}
                  onClick={openRecordModal}
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-emerald-200/55 bg-slate-950/45 px-7 py-4 text-xl font-black text-emerald-50 transition hover:scale-[1.01] hover:border-emerald-200 hover:bg-emerald-400/15 sm:w-auto sm:min-w-[12rem] sm:px-8 sm:py-5 sm:text-2xl"
                >
                  <History className="h-6 w-6" />
                  나의 기록
                </button>
              </div>
            </motion.div>
          </div>

          <AnimatePresence>
            {isRecordModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-stretch justify-center overflow-hidden bg-slate-950/82 p-3 backdrop-blur-md sm:p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 12 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="relative my-auto flex max-h-[calc(100svh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-cyan-100/16 bg-slate-950/92 p-4 text-left shadow-[0_28px_90px_rgba(2,8,23,0.62)] sm:max-h-[calc(100svh-2rem)] sm:p-5"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="my-records-title"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/35 to-transparent" />

                  <div className="relative flex min-h-0 flex-col overflow-hidden">
                    <div className="flex items-start justify-between gap-4 pr-12">
                      <div className="min-w-0">
                        <h2 id="my-records-title" className="text-2xl font-black text-white sm:text-3xl">나의 기록</h2>
                        {visibleStoredPlayRecordSummary ? (
                          <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-black text-slate-100 sm:text-base">{visibleStoredPlayRecordSummary}</p>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        aria-label="닫기 또는 길게 눌러 기록 모두 지우기"
                        title="닫기 / 길게 누르면 기록 삭제"
                        onPointerDown={startRecordClearHold}
                        onPointerUp={finishRecordClosePress}
                        onPointerLeave={cancelRecordClearHold}
                        onPointerCancel={cancelRecordClearHold}
                        className="record-close-button absolute right-4 top-4 z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate-900/95 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.38)] transition hover:border-cyan-200/45 hover:bg-slate-800 sm:right-6 sm:top-6"
                      >
                        <X className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="skin-scrollbar mt-4 min-h-0 max-h-[min(66svh,38rem)] overflow-y-auto overscroll-contain pr-1">
                      {hasStoredPlayRecords ? (
                        <div className="space-y-3">
                          {visibleStoredPlayRecordSections.map((section) => {
                            const recordUnitTheme = STORED_PLAY_RECORD_UNIT_THEMES[section.unitId];

                            return (
                              <section
                                key={section.unitId}
                                className="rounded-lg border border-white/10 bg-white/[0.035] p-3 shadow-[0_10px_24px_rgba(2,8,23,0.2)]"
                              >
                                <div className="flex items-center gap-3">
                                  <h3 className={`truncate text-base font-black ${recordUnitTheme.labelClassName}`}>{section.unitTitle} · {section.records.length}번</h3>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {section.records.map((record) => {
                                    const isLatestRecord = record.id === visibleStoredPlayRecords[0]?.id;
                                    const isFullClearRecord = record.result === 'win' && record.level >= record.totalLevels;

                                    return (
                                      <div
                                        key={record.id}
                                        aria-label={`${formatStoredPlayRecordDate(record.playedAt)} ${record.unitTitle} ${record.level}단계${isFullClearRecord ? ' 클리어' : ''}`}
                                        title={`${formatStoredPlayRecordDate(record.playedAt)} · ${record.level}단계${isFullClearRecord ? ' 클리어' : ''}`}
                                        className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border text-center shadow-[0_8px_18px_rgba(2,8,23,0.2)] sm:h-14 sm:w-14 ${
                                          isLatestRecord ? 'ring-2 ring-cyan-200/70' : ''
                                        } ${recordUnitTheme.cardClassName}`}
                                      >
                                        <div className={`absolute inset-x-0 top-0 h-1 ${recordUnitTheme.accentClassName}`} />
                                        {isFullClearRecord ? (
                                          <Crown className="absolute top-1.5 h-3 w-3 text-amber-300 drop-shadow-[0_1px_4px_rgba(251,191,36,0.45)]" strokeWidth={3} aria-hidden="true" />
                                        ) : null}
                                        <p className={`text-2xl font-black leading-none text-white ${isFullClearRecord ? 'pt-2.5' : ''}`}>{record.level}</p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </section>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="rounded-2xl border border-dashed border-slate-500/70 bg-slate-950/35 px-5 py-8 text-center">
                          <p className="text-lg font-black text-white">아직 저장된 기록이 없어요.</p>
                          <p className="mt-2 text-sm font-semibold text-slate-300">배틀을 한 번 마치면 여기에 기록이 남습니다.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isNamePromptOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/76 p-4 backdrop-blur-sm sm:p-6"
              >
                <motion.form
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 12 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onSubmit={(event) => {
                    event.preventDefault();
                    confirmPlayerNameAndContinue();
                  }}
                  className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.94))] p-5 text-left shadow-[0_24px_80px_rgba(15,23,42,0.45)] sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_28%)]" />

                  <div className="relative">
                    <h2 className="text-3xl font-black text-white">이름 입력</h2>
                    <p className="mt-2 text-sm font-semibold text-slate-300">최대 8글자</p>

                    <input
                      autoFocus
                      type="text"
                      value={pendingPlayerName}
                      onChange={(event) => setPendingPlayerName(event.target.value.slice(0, 8))}
                      placeholder="이름"
                      className="mt-4 w-full rounded-2xl border-2 border-slate-600 bg-slate-950 px-4 py-3 text-xl font-black text-white outline-none transition focus:border-emerald-400 sm:mt-5 sm:px-5 sm:py-4 sm:text-2xl"
                    />
                    <div className={`mt-5 flex flex-col-reverse gap-3 ${
                      hasPendingPlayerName
                        ? 'sm:grid sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]'
                        : 'sm:flex sm:justify-end'
                    }`}>
                      <button
                        type="button"
                        onClick={closeNamePrompt}
                        className={`w-full rounded-2xl border border-slate-600 px-5 py-3 text-base font-black text-slate-200 transition hover:bg-slate-800 ${
                          hasPendingPlayerName ? 'sm:w-full' : 'sm:w-auto sm:min-w-[9rem]'
                        }`}
                      >
                        취소
                      </button>
                      <AnimatePresence initial={false}>
                        {hasPendingPlayerName && (
                          <motion.button
                            initial={{ opacity: 0, x: 18, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 18, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            type="submit"
                            onPointerDown={warmAudio}
                            className="w-full rounded-2xl bg-emerald-500 px-6 py-3 text-base font-black text-slate-950 transition hover:bg-emerald-400 sm:w-full"
                          >
                            시작
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {gameState === 'unitSelect' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-slate-700/80 bg-slate-950/95 shadow-[0_24px_70px_rgba(2,8,23,0.52)]"
        >
          <div className="relative flex flex-col gap-4 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-black tracking-[0.16em] text-emerald-300">학습 시작</p>
                <h2 className="mt-1 truncate text-2xl font-black text-white sm:text-3xl">단원 선택</h2>
              </div>
              <button
                type="button"
                onClick={returnToStartScreen}
                className="unit-select-action shrink-0 rounded-full border border-slate-600 bg-slate-900 px-5 py-2.5 text-sm font-black text-slate-100 shadow-none transition duration-200 hover:border-slate-400 hover:bg-slate-800"
              >
                처음으로
              </button>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {LEARNING_UNITS.map((unit) => (
                <motion.button
                  key={unit.id}
                  type="button"
                  disabled={!unit.isAvailable}
                  onPointerDown={unit.isAvailable ? warmAudio : undefined}
                  onClick={() => selectLearningUnit(unit.id)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className={`unit-select-card group relative flex h-full min-h-[6rem] flex-col overflow-hidden rounded-[1.15rem] border p-4 text-left shadow-none transition duration-200 sm:min-h-[6.5rem] ${
                    selectedLearningUnitId === unit.id
                      ? 'border-emerald-400 bg-emerald-400/10 ring-1 ring-emerald-300/35'
                      : unit.isAvailable
                        ? 'border-slate-700 bg-slate-900 hover:border-slate-500 hover:bg-slate-800/90'
                        : 'cursor-not-allowed border-slate-800 bg-slate-900/65 opacity-70 saturate-75'
                  }`}
                >
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="max-w-[85%]">
                        <p className={`text-xs font-black tracking-[0.18em] ${
                          selectedLearningUnitId === unit.id
                            ? 'text-emerald-200'
                            : 'text-slate-400'
                        }`}>
                          {unit.chapterLabel}
                        </p>
                        <h3 className="mt-1.5 text-xl font-black leading-tight text-white">
                          {unit.title}
                        </h3>
                      </div>
                      <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        selectedLearningUnitId === unit.id
                          ? 'border-emerald-300 bg-emerald-400 text-slate-950'
                          : 'border-slate-600 bg-slate-950/40 text-slate-500'
                      }`}>
                        {selectedLearningUnitId === unit.id ? <Check className="h-4 w-4" /> : null}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {selectedLearningUnit?.isAvailable && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="relative overflow-hidden rounded-[1.15rem] border border-slate-700 bg-slate-900/85 p-4 shadow-none"
                >
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-black tracking-[0.18em] text-emerald-200">난이도</p>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 rounded-[0.95rem] bg-slate-950/38 p-1.5">
                      {BATTLE_DIFFICULTY_ORDER.map((difficultyOption) => {
                        const difficultyOptionConfig = BATTLE_DIFFICULTY_CONFIG[difficultyOption];
                        const isSelectedDifficulty = battleDifficulty === difficultyOption;
                        const selectedDifficultyClass = 'border-emerald-300 bg-emerald-500 text-slate-950 shadow-none';

                        return (
                          <button
                            key={difficultyOption}
                            type="button"
                            onPointerDown={warmAudio}
                            onClick={() => changeBattleDifficulty(difficultyOption)}
                            className={`unit-select-action min-h-[3rem] rounded-[0.8rem] border px-3 py-2 text-center text-sm font-black transition duration-200 ${
                              isSelectedDifficulty
                                ? selectedDifficultyClass
                                : 'border-transparent bg-transparent text-slate-300 shadow-none hover:bg-slate-800 hover:text-white'
                            }`}
                          >
                            {difficultyOptionConfig.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        onPointerDown={warmAudio}
                        onClick={() => setIsSkinPickerOpen((isOpen) => !isOpen)}
                        aria-expanded={isSkinPickerOpen}
                        className="unit-select-action flex w-full items-center justify-between gap-3 rounded-[0.95rem] border border-slate-700 bg-slate-950/55 px-3 py-2.5 text-left text-slate-100 shadow-none transition hover:border-slate-500 hover:bg-slate-900"
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.75rem] bg-slate-900">
                            <img
                              src={selectedPlayerSkin.spriteSet.default}
                              alt={`${selectedPlayerSkin.label} 스킨`}
                              className="h-9 w-auto object-contain drop-shadow-[0_8px_14px_rgba(2,8,23,0.35)]"
                              draggable={false}
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-xs font-black tracking-[0.16em] text-emerald-200">고마 스킨</span>
                            <span className="block truncate text-sm font-black text-white">{selectedPlayerSkin.label}</span>
                          </span>
                        </span>
                        <span className="flex shrink-0 items-center gap-2">
                          <span className="rounded-full border border-slate-600 bg-slate-950/50 px-3 py-1 text-xs font-black text-slate-200">
                            변경
                          </span>
                          <ChevronDown className={`h-4 w-4 text-slate-300 transition-transform ${isSkinPickerOpen ? 'rotate-180' : ''}`} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isSkinPickerOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="skin-scrollbar mt-2 max-h-[18.5rem] overflow-y-auto overscroll-contain rounded-[0.95rem] border border-slate-700 bg-slate-950/35 p-2 pr-1 [scrollbar-gutter:stable]">
                              <div className="grid grid-cols-[repeat(auto-fill,minmax(5.8rem,1fr))] gap-2 sm:grid-cols-[repeat(auto-fill,minmax(6.4rem,1fr))]">
                              {PLAYER_SKINS.map((skin) => {
                                const isSkinUnlocked = isDeveloperMode || isPlayerSkinUnlocked(skin, unlockedPlayerSkinIds);
                                const isSelectedSkin = selectedPlayerSkinId === skin.id;
                                const displaySkinLabel = isSkinUnlocked ? skin.label : '비공개';
                                const lockedRewardUnitLabel = !isSkinUnlocked ? getRewardUnitLabelForSkin(skin.id) : null;

                                return (
                                  <button
                                    key={skin.id}
                                    type="button"
                                    disabled={!isSkinUnlocked}
                                    onPointerDown={isSkinUnlocked ? warmAudio : undefined}
                                    onClick={() => selectPlayerSkin(skin.id)}
                                    className={`unit-select-action relative flex h-[6.25rem] w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-[0.85rem] border px-2 py-2 text-center transition duration-200 ${
                                      isSelectedSkin
                                        ? 'border-emerald-300 bg-emerald-400/12 text-white ring-1 ring-emerald-300/35'
                                        : isSkinUnlocked
                                          ? 'border-slate-700 bg-slate-900/70 text-slate-200 hover:border-slate-500 hover:bg-slate-800'
                                          : 'cursor-not-allowed border-slate-800 bg-slate-950/30 text-slate-500 opacity-70'
                                    }`}
                                  >
                                    <span className="flex h-12 w-full items-center justify-center">
                                      {isSkinUnlocked ? (
                                        <img
                                          src={skin.spriteSet.default}
                                          alt={`${skin.label} 스킨`}
                                          className="h-full w-auto object-contain"
                                          draggable={false}
                                        />
                                      ) : (
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400">
                                          <Lock className="h-4 w-4" />
                                        </span>
                                      )}
                                    </span>
                                    <span className="w-full truncate text-[11px] font-black leading-tight">{displaySkinLabel}</span>
                                    {lockedRewardUnitLabel && (
                                      <span className="w-full truncate text-[9px] font-black leading-none text-emerald-300/85">
                                        {lockedRewardUnitLabel} 보상
                                      </span>
                                    )}
                                    {isSelectedSkin && (
                                      <span className="absolute right-1.5 top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
                                        <Check className="h-3 w-3" />
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="button"
                      onPointerDown={warmAudio}
                      onClick={startSelectedUnit}
                      className="unit-select-action mt-4 flex min-h-[3.75rem] w-full items-center justify-center gap-2 rounded-[1rem] border border-emerald-100/20 bg-emerald-500 px-6 py-3 text-lg font-black text-slate-950 shadow-none transition duration-200 hover:bg-emerald-400"
                    >
                      <Play className="h-5 w-5" />
                      시작
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {gameState === 'playing' && (
        <div className={`flex w-full min-h-0 flex-col gap-3 overflow-visible rounded-3xl border-4 border-slate-700 bg-slate-800 p-3 shadow-2xl sm:p-4 lg:flex-row lg:overflow-hidden ${battleShellWidthClass} ${battleShellResponsiveClass}`}>
          {/* Left: Character Visuals & Messages */}
          <div className={`relative flex w-full min-h-0 flex-col gap-3 overflow-visible rounded-2xl border-2 border-slate-600 bg-slate-900 p-3 lg:overflow-hidden ${battleSidebarResponsiveClass}`}>
            <section className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] ${battleSectionResponsiveClass}`}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="inline-flex items-center gap-2 font-semibold text-slate-300">
                  <Heart className="h-4 w-4 text-red-400" />
                  HP
                </div>
                <p className="font-black text-slate-100">{opponentHP} / {maxHealth}</p>
              </div>

              <div className="mt-2 h-3.5 w-full overflow-hidden rounded-full bg-slate-700/80">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-rose-400 via-red-500 to-rose-500 shadow-[0_0_16px_rgba(239,68,68,0.35)]"
                  animate={{ width: `${opponentHP}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>

              <div className={`relative mt-3 flex h-[clamp(10.75rem,30vh,16rem)] min-h-0 items-center justify-center overflow-hidden rounded-[1.5rem] border border-red-400/10 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.14),transparent_52%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.78))] px-2 py-1.5 sm:h-[clamp(13.75rem,32vh,19rem)] sm:px-3 sm:py-2.5 ${battleStageResponsiveClass}`}>
                <p className="pointer-events-none absolute left-4 top-3 z-10 text-sm font-bold text-red-200/85">
                  {currentOpponentName}
                </p>
                <motion.div
                  animate={{
                    x: isOpponentAttacking ? [0, 50, -300, 0] : isOpponentHit ? [0, -20, 20, -20, 0] : 0,
                    rotate: isOpponentAttacking ? [0, 30, -60, 0] : 0,
                    scale: isOpponentAttacking ? [1, 0.7, 2.5, 1] : isOpponentHit ? [1, 0.9, 1] : 1,
                    filter: isOpponentAttacking ? 'brightness(1.06) drop-shadow(0 0 4px rgba(239, 68, 68, 0.22))' : isOpponentHit ? 'brightness(1.75) saturate(1.65)' : 'brightness(1)'
                  }}
                  transition={{ duration: isOpponentAttacking ? ATTACK_MOTION_DURATION_S : HIT_MOTION_DURATION_S, ease: "backOut" }}
                  className="relative flex h-full max-h-full w-full max-w-full items-center justify-center overflow-visible"
                >
                  {opponentSpriteSet && opponentCharacterImage ? (
                    <img
                      src={processedOpponentCharacterImage ?? opponentCharacterImage}
                      alt={`${currentOpponentName} 캐릭터`}
                      className={`${battleStageImageResponsiveClass} w-auto max-w-full translate-y-2 object-contain select-none drop-shadow-[0_18px_24px_rgba(15,23,42,0.35)] ${opponentImageClassName}`}
                      draggable={false}
                    />
                  ) : (
                    <span className="text-[clamp(4rem,10vw,8rem)] leading-none">{getOpponentEmojiForLevel(level)}</span>
                  )}
                  {isOpponentAttacking && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.38, scale: 1.1 }}
                        className="pointer-events-none absolute -top-2 -left-2 h-10 w-10 rounded-full bg-red-300 blur-lg"
                    />
                  )}
                </motion.div>
              </div>
            </section>

            <div className="shrink-0 py-1">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-slate-700" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showMsg ? message : 'vs'}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className={`relative max-w-[calc(100%-1.5rem)] rounded-full bg-slate-950 text-center ${
                      showMsg
                        ? 'border border-yellow-400/45 px-4 py-2 text-xs font-bold leading-relaxed text-yellow-100 shadow-[0_10px_24px_rgba(15,23,42,0.24)] sm:px-5 sm:text-sm'
                        : 'border border-yellow-500/40 px-3 py-1 text-[10px] font-black tracking-[0.28em] text-yellow-300 sm:px-4 sm:text-xs sm:tracking-[0.35em]'
                    }`}
                  >
                    {showMsg ? message : 'VS'}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <section className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] ${battleSectionResponsiveClass}`}>
              <div className={`relative flex h-[clamp(10.75rem,30vh,16rem)] min-h-0 items-center justify-center overflow-hidden rounded-[1.5rem] border border-emerald-400/10 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.14),transparent_54%),linear-gradient(180deg,rgba(15,23,42,0.78),rgba(15,23,42,0.98))] px-2 py-1.5 sm:h-[clamp(13.75rem,32vh,19rem)] sm:px-3 sm:py-2.5 ${battleStageResponsiveClass}`}>
                <p
                  className="pointer-events-none absolute left-4 top-3 z-10 max-w-[65%] truncate text-xs font-bold text-emerald-200/85 sm:max-w-[55%] sm:text-sm"
                  title={displayPlayerName}
                >
                  {displayPlayerName}
                </p>
                <motion.div
                  animate={{
                    x: isAttacking ? [0, -100, 300, 0] : isPlayerHit ? [0, -20, 20, -20, 0] : 0,
                    rotate: isAttacking ? [0, -30, 60, 0] : 0,
                    scale: isAttacking ? [1, 0.8, 2, 1] : isPlayerHit ? [1, 0.9, 1] : 1,
                    filter: isAttacking ? 'brightness(1.65) drop-shadow(0 0 8px rgba(16, 185, 129, 0.28))' : isPlayerHit ? 'brightness(1.75) saturate(1.65)' : 'brightness(1)'
                  }}
                  transition={{ duration: isAttacking ? ATTACK_MOTION_DURATION_S : HIT_MOTION_DURATION_S, ease: "backOut" }}
                  className="relative flex h-full max-h-full w-full max-w-full items-center justify-center overflow-visible"
                >
                  <img
                    src={playerCharacterImage}
                    alt="플레이어 캐릭터"
                    className={`${battleStageImageResponsiveClass} w-auto max-w-full translate-y-2 object-contain select-none drop-shadow-[0_18px_24px_rgba(15,23,42,0.35)]`}
                    draggable={false}
                  />
                </motion.div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                <div className="inline-flex items-center gap-2 font-semibold text-slate-300">
                  <Heart className="h-4 w-4 text-emerald-400" />
                  HP
                </div>
                <p className="font-black text-slate-100">{playerHP} / {maxHealth}</p>
              </div>

              <div className="mt-2 h-3.5 w-full overflow-hidden rounded-full bg-slate-700/80">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-emerald-500 to-teal-400 shadow-[0_0_16px_rgba(16,185,129,0.35)]"
                  animate={{ width: `${playerHP}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </section>
          </div>

          {/* Right: Math Problem & Input */}
          <div className={`flex min-h-0 min-w-0 flex-1 flex-col ${battleRightPanelResponsiveClass}`}>
            <div className={`shrink-0 flex flex-col ${battleTopGroupResponsiveClass}`}>
              <div className="min-w-0 flex-1 rounded-2xl border-2 border-slate-700 bg-slate-900 px-3 py-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <p className="min-w-0 max-w-full truncate text-xs font-black text-yellow-400 sm:max-w-[38%] sm:text-sm" title={currentLevelDescription}>{currentLevelDescription}</p>
                  {isDeveloperShortcutEnabled && isDeveloperMode && (
                    <span className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-1 text-[10px] font-black tracking-[0.18em] text-emerald-200">
                      DEV
                    </span>
                  )}
                  <div className="flex flex-1 gap-1 min-w-0">
                  {[...Array(totalLevels)].map((_, i) => (
                      <div key={i} className={`h-2 flex-1 rounded-full ${i < level ? 'bg-yellow-500' : 'bg-slate-700'}`} />
                  ))}
                  </div>
                  <span className="shrink-0 text-xs font-bold text-slate-300 sm:text-sm">{level} / {totalLevels}</span>
                </div>
              </div>{/*

                  <p className="text-xs font-black tracking-[0.18em] text-emerald-300">난이도</p>
              */}{!isSpecialChallengeActive && canUseHint && !isHintForced && (
                <button
                  onClick={toggleHint}
                  className="inline-flex w-full shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-auto"
                >
                  {showHint ? '힌트 닫기' : '힌트 보기'}
                </button>
              )}
            </div>

            {!isSpecialChallengeActive && problemCoachmark && (
              <div className="rounded-[28px] border border-sky-200 bg-sky-50 px-4 py-3 shadow-sm sm:px-5 sm:py-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-400 text-2xl font-black text-white sm:h-11 sm:w-11">
                    !
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xl font-black text-pink-400 sm:text-[1.9rem]">{ZERO_TENS_BORROW_COACHMARK_TITLE}</p>
                    <p className="mt-1 break-keep text-lg font-bold leading-8 text-slate-700 sm:text-[1.45rem]">
                      {problemCoachmark}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-1 min-h-0 flex-col">
              {isEstimation ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-3xl border-4 border-yellow-500 bg-slate-900 p-5 text-center text-slate-100 shadow-inner sm:p-6 lg:p-8">
                <h2 className="text-4xl font-black text-yellow-400 mb-4">어림잡기 도전! ({timeLeft}초)</h2>
                <p className="mb-3 text-base font-bold text-amber-100 sm:text-lg">{estimationProblem?.prompt}</p>
                <p className="mb-6 text-[clamp(2.5rem,12vw,4.5rem)] font-mono font-bold sm:mb-8">{estimationProblem?.question} = ?</p>
                {isSpecialChallengeResolving && (
                  <p className="mb-4 text-sm font-bold text-yellow-200 sm:text-base">결과를 확인하는 중입니다...</p>
                )}
                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                  {estimationProblem?.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => selectEstimationOption(opt)}
                      disabled={isSpecialChallengeResolving}
                      className="rounded-2xl border-2 border-slate-500 bg-slate-700 p-6 text-3xl font-bold disabled:cursor-wait disabled:opacity-60 enabled:hover:bg-slate-600"
                    >
                      약 {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : isUnitSelectionChallenge ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-3xl border-4 border-cyan-400 bg-slate-900 p-5 text-center text-slate-100 shadow-inner sm:p-6 lg:p-8"
              >
                <p className="mb-3 rounded-full bg-cyan-400/15 px-4 py-1 text-sm font-black tracking-[0.08em] text-cyan-200 sm:text-base">
                  {unitSelectionChallenge?.badge} ({timeLeft}초)
                </p>
                <h2 className="mb-4 text-4xl font-black text-cyan-300">단위 선택 도전!</h2>
                <p className="mb-8 max-w-3xl break-keep text-[1.2rem] font-black leading-[1.6] text-slate-100 sm:text-[1.65rem] md:text-[2.15rem]">
                  {unitSelectionChallenge?.prompt}
                </p>
                {isSpecialChallengeResolving && (
                  <p className="mb-4 text-sm font-bold text-cyan-100 sm:text-base">결과를 확인하는 중입니다...</p>
                )}
                <div className={`grid w-full gap-3 ${unitSelectionChallenge && unitSelectionChallenge.options.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} sm:gap-4`}>
                  {unitSelectionChallenge?.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectUnitSelectionOption(option)}
                      disabled={isSpecialChallengeResolving}
                      className="rounded-2xl border-2 border-cyan-200/30 bg-slate-700 p-5 text-lg font-black leading-[1.45] text-white transition disabled:cursor-wait disabled:opacity-60 enabled:hover:bg-slate-600 sm:min-h-[7rem] sm:text-2xl"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : canUseHint && showHint ? (
              hintProblemText ? (
                <ErrorBoundary
                  resetKey={hintProblemText}
                  fallbackRender={({ resetError }) => (
                    <div className="flex min-h-0 flex-1 items-center justify-center rounded-3xl border-4 border-amber-300 bg-amber-50 p-5 text-center text-slate-900 sm:p-8">
                      <div className="max-w-2xl">
                        <p className="text-3xl font-black text-amber-700">힌트를 표시하는 중 문제가 생겼어요</p>
                        <p className="mt-3 text-lg font-bold leading-8 text-slate-600">
                          현재 문제는 계속 풀 수 있습니다. 다시 시도하거나 힌트를 닫고 진행해 주세요.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                          <button
                            type="button"
                            onClick={resetError}
                            className="rounded-full bg-amber-500 px-6 py-3 text-base font-black text-slate-950 transition hover:bg-amber-400"
                          >
                            힌트 다시 시도
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setShowHint(false);
                              resetError();
                            }}
                            className="rounded-full border border-slate-300 px-6 py-3 text-base font-black text-slate-700 transition hover:bg-white"
                          >
                            문제만 계속하기
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                >
                  <VisualCalculator
                    problemText={hintProblemText}
                    onControlSound={playVisualControlSound}
                    condensed={isCompactBattleViewport}
                  />
                </ErrorBoundary>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex min-h-0 flex-1 items-center justify-center rounded-3xl border-4 border-dashed border-sky-300 bg-sky-50 p-5 text-center text-sky-800 sm:p-8"
                >
                  <div className="max-w-2xl">
                    <p className="text-3xl font-black">빈칸에 숫자를 먼저 넣어 주세요.</p>
                    <p className="mt-3 text-lg font-bold leading-8 text-slate-600">문제를 완성하면 단계별 힌트와 모형 계산 화면을 바로 볼 수 있어요.</p>
                  </div>
                </motion.div>
              )
            ) : (
              <motion.div 
                key={`${problem.kind}-${problem.prompt}`} 
                initial={{ opacity: 0, scale: 0.9, y: 10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className={`flex min-h-0 flex-1 rounded-3xl ${isDenseNumberedStoryLayout ? 'border-4' : 'border-8'} border-slate-200 bg-white shadow-inner ${
                  problem.kind === 'distanceMap' || problem.kind === 'distanceWorksheet'
                    ? 'flex flex-col overflow-y-auto p-2 sm:p-3 lg:p-3'
                    : problem.kind === 'shapeDraw' || problem.kind === 'shapeRain'
                      ? 'flex flex-col overflow-hidden p-3 sm:p-4 lg:p-5'
                    : problem.kind === 'timeAddition' && isStoryTimeAdditionProblem
                      ? `flex flex-col justify-center ${isCompactBattleViewport ? 'overflow-hidden p-3 sm:p-4 lg:p-5' : 'overflow-y-auto p-4 sm:p-6 lg:p-8'}`
                    : problem.kind === 'timeAddition' && isVerticalTimeAdditionProblem
                      ? 'flex flex-col items-center justify-center overflow-y-auto p-3 sm:p-4 lg:p-5'
                    : problem.kind === 'clockReading' || problem.kind === 'timeAddition'
                      ? 'flex flex-col overflow-y-auto p-2 sm:p-3 lg:p-3'
                    : hasNumberedStoryOptions
                      ? `flex flex-col overflow-hidden ${isDenseNumberedStoryLayout ? 'p-2 sm:p-3 lg:p-4' : 'p-3 sm:p-4 lg:p-5'}`
                    : problem.kind !== 'equation'
                      ? `flex flex-col justify-center ${isCompactBattleViewport ? 'overflow-hidden p-3 sm:p-4 lg:p-5' : 'overflow-y-auto p-4 sm:p-6 lg:p-8'}`
                      : shouldRenderHorizontalEquation
                      ? 'items-center justify-center overflow-y-auto p-4 text-center text-[clamp(3.6rem,12vw,6.8rem)] leading-tight font-black font-mono text-slate-900 sm:p-6 lg:p-8'
                      : 'flex flex-col items-center justify-center p-4 text-[clamp(3.5rem,18vw,8rem)] leading-none font-black font-mono text-slate-900 sm:p-6 lg:p-8'
                }`}
              >
                {problem.kind === 'shapeRain' && problem.shapeRain ? (
                  <ShapeRainGameCard
                    shapeRain={problem.shapeRain}
                    playAnimationSound={playSound}
                    onClear={() => resolveProblemResult(true)}
                    onFail={() => resolveProblemResult(false)}
                  />
                ) : problem.kind === 'shapeDraw' && problem.shapeDraw ? (
                  <div className="flex h-full min-h-0 w-full flex-col gap-3">
                    {shapeDrawNotice ? (
                      <div className="shrink-0 rounded-2xl border-2 border-yellow-300 bg-slate-950/95 px-4 py-2 text-center text-lg font-black text-white shadow-sm">
                        {shapeDrawNotice}
                      </div>
                    ) : null}
                    <div className="min-h-0 flex-1">
                      {problem.shapeDraw.task === 'identify' ? (
                        <ShapeIdentifyProblemCard
                          shapeDraw={problem.shapeDraw}
                          onAnswerChange={setInputValue}
                        />
                      ) : (
                        <ShapeDrawProblemCardV2
                          shapeDraw={problem.shapeDraw}
                          answerValue={inputValue}
                          playAnimationSound={playSound}
                          rouletteAlreadyResolved={currentShapeDrawRouletteKey !== null && resolvedShapeRouletteKey === currentShapeDrawRouletteKey}
                          onRouletteResolved={() => {
                            if (currentShapeDrawRouletteKey !== null) {
                              setResolvedShapeRouletteKey(currentShapeDrawRouletteKey);
                            }
                          }}
                          onAnswerChange={setInputValue}
                          onSubmit={checkAnswer}
                        />
                      )}
                    </div>
                  </div>
                ) : problem.kind === 'distanceWorksheet' && problem.distanceWorksheet ? (
                    <DistanceWorksheetProblemCard
                      distanceWorksheet={problem.distanceWorksheet}
                      condensed={isCompactBattleViewport}
                    />
                ) : problem.kind === 'distanceMap' && problem.distanceMap ? (
                    <DistanceMapProblemCard
                      distanceMap={problem.distanceMap}
                      answerValue={inputValue}
                      onAnswerChange={setInputValue}
                      onSubmit={checkAnswer}
                    />
                ) : problem.kind === 'measurement' && problem.measurement ? (
                  <MeasurementProblemCard measurement={problem.measurement} />
                ) : problem.kind === 'clockReading' && problem.clockReading ? (
                  <ClockReadingProblemCard
                    clockReading={problem.clockReading}
                    answerValue={clockAnswerInput}
                    onAnswerChange={handleClockAnswerChange}
                    onSubmit={checkAnswer}
                  />
                ) : problem.kind === 'timeAddition' && currentTimeAddition ? (
                  <TimeAdditionProblemCard
                    timeAddition={currentTimeAddition}
                    answerValue={clockAnswerInput}
                    onAnswerChange={handleClockAnswerChange}
                    onSubmit={checkAnswer}
                    playAnimationSound={playSound}
                    condensed={isCompactBattleViewport}
                    showAnswerFields={!usesBattleStructuredTimeInput}
                  />
                ) : problem.kind === 'story' ? (
                  hasNumberedStoryOptions && storyPromptSections ? (
                    problem.storyTable ? (
                      <div className={`mx-auto flex h-full w-full max-w-[56rem] flex-col text-left text-slate-900 ${numberedStoryShellGapClass}`}>
                        <div className={`flex shrink-0 flex-col ${numberedStoryShellGapClass}`}>
                          {numberedStoryInfoLines.length > 0 ? (
                            <div
                              className={`rounded-[1.75rem] border border-slate-200 bg-slate-50/85 shadow-sm ${numberedStoryCardPaddingClass}`}
                            >
                              <div className={`flex flex-col ${isDenseNumberedStoryLayout ? 'gap-2' : isCompactBattleViewport ? 'gap-3' : 'gap-4'}`}>
                                {numberedStoryInfoLines.map((line, index) => (
                                  <p
                                    key={`${line}-${index}`}
                                    className={`break-keep tracking-[-0.01em] ${numberedStoryInfoTextClass}`}
                                  >
                                    {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          <StoryPromptTableCard
                            table={problem.storyTable}
                            condensed={isCompactBattleViewport}
                            dense={isDenseNumberedStoryLayout}
                          />
                          {numberedStoryQuestionLine ? (
                            <div
                              className={`rounded-[1.75rem] border border-amber-200 bg-amber-50/85 shadow-sm ${numberedStoryCardPaddingClass}`}
                            >
                              <p className={`break-keep tracking-[-0.01em] ${numberedStoryQuestionTextClass}`}>
                                {renderPromptWithHighlight(numberedStoryQuestionLine, shouldHighlightPromptNumbers)}
                              </p>
                            </div>
                          ) : null}
                        </div>
                        <div
                          className={numberedStoryOptionGridClass}
                          style={
                            isDenseNumberedStoryLayout
                              ? undefined
                              : { gridTemplateRows: `repeat(${storyPromptSections.optionLines.length}, minmax(0, 1fr))` }
                          }
                        >
                          {storyPromptSections.optionLines.map((line, index) => (
                            <div
                              key={`${line}-${index}`}
                              className={`flex min-h-0 items-center rounded-[1.75rem] border border-slate-200 bg-slate-50/90 shadow-sm ${numberedStoryOptionCardPaddingClass}`}
                            >
                              <p className={`break-keep tracking-[-0.01em] ${numberedStoryOptionTextClass}`}>
                                {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={`mx-auto flex h-full w-full max-w-[54rem] flex-col text-left text-slate-900 ${isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-5'}`}>
                        <div className={`flex shrink-0 flex-col ${isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-5'}`}>
                          {storyPromptSections.introLines.length > 0 ? (
                            <div
                              className={`rounded-[1.75rem] border border-slate-200 bg-slate-50/85 shadow-sm ${
                                isCompactBattleViewport
                                  ? 'px-4 py-3 sm:px-5 sm:py-4'
                                  : 'px-5 py-4 sm:px-6 sm:py-5'
                              }`}
                            >
                              <div className={`flex flex-col ${isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-5'}`}>
                                {storyPromptSections.introLines.map((line, index) => {
                                  const isQuestionLine = index === storyPromptSections.introLines.length - 1;

                                  return (
                                    <p
                                      key={`${line}-${index}`}
                                      className={`break-keep tracking-[-0.01em] ${
                                        isQuestionLine
                                          ? isCompactBattleViewport
                                            ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.55rem] lg:text-[1.9rem]'
                                            : 'text-[1.35rem] font-black leading-[1.52] text-slate-900 sm:text-[1.75rem] lg:text-[2.2rem]'
                                          : isCompactBattleViewport
                                            ? 'text-[1rem] font-bold leading-[1.62] text-slate-700 sm:text-[1.2rem] lg:text-[1.45rem]'
                                            : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.35rem] lg:text-[1.75rem]'
                                      }`}
                                    >
                                      {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          ) : null}
                        </div>
                        <div
                          className={`grid min-h-0 flex-1 ${isCompactBattleViewport ? 'gap-3' : 'gap-4'}`}
                          style={{ gridTemplateRows: `repeat(${storyPromptSections.optionLines.length}, minmax(0, 1fr))` }}
                        >
                          {storyPromptSections.optionLines.map((line, index) => (
                            <div
                              key={`${line}-${index}`}
                              className={`flex min-h-0 items-center rounded-[1.75rem] border border-slate-200 bg-slate-50/90 shadow-sm ${
                                isCompactBattleViewport
                                  ? 'px-4 py-3 sm:px-5'
                                  : 'px-5 py-4 sm:px-6'
                              }`}
                            >
                              <p
                                className={`break-keep tracking-[-0.01em] text-slate-900 ${
                                  isCompactBattleViewport
                                    ? 'text-[1.2rem] font-black leading-[1.42] sm:text-[1.5rem] lg:text-[1.85rem]'
                                    : 'text-[1.35rem] font-black leading-[1.48] sm:text-[1.7rem] lg:text-[2.15rem]'
                                }`}
                              >
                                {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ) : (
                    <div className={`mx-auto flex w-full max-w-[52rem] flex-col text-left text-slate-900 ${
                      isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-6'
                    }`}>
                      {(() => {
                        const storyLines = getStoryPromptLines(problem.prompt);

                        return (
                          <div
                            className={`rounded-[2rem] border border-slate-200 bg-slate-50/85 shadow-sm ${
                              isCompactBattleViewport
                                ? 'px-4 py-3 sm:px-5 sm:py-4'
                                : 'px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7'
                            }`}
                          >
                            <div className={`flex flex-col ${isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-5'}`}>
                              {storyLines.map((line, index) => {
                                const isQuestionLine = storyLines.length === 1 || index === storyLines.length - 1;

                                return (
                                  <p
                                    key={`${line}-${index}`}
                                    className={`break-keep tracking-[-0.01em] ${
                                      isQuestionLine
                                        ? isCompactBattleViewport
                                          ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.5rem] lg:text-[1.9rem]'
                                          : 'text-[1.3rem] font-black leading-[1.55] text-slate-900 sm:text-[1.75rem] md:text-[2.45rem]'
                                        : isCompactBattleViewport
                                          ? 'text-[1rem] font-bold leading-[1.58] text-slate-700 sm:text-[1.15rem] lg:text-[1.45rem]'
                                          : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.45rem] md:text-[2rem]'
                                    }`}
                                  >
                                    {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )
                ) : problem.kind === 'builder' && problem.builder ? (
                  <div className="flex h-full w-full flex-col gap-3 text-left text-slate-900 sm:gap-4">
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 sm:text-3xl md:text-[3.5rem]">{problem.builder.title}</h2>
                      <p className="mt-2 break-keep text-lg font-bold leading-[1.45] text-slate-700 sm:text-[1.35rem] md:text-[1.9rem]">
                        {problem.builder.instruction}
                      </p>
                    </div>

                    <div className="grid flex-1 gap-4 xl:grid-cols-[minmax(0,1fr)_220px]">
                      <div className="rounded-[34px] border-4 border-slate-200 bg-slate-50 p-4 sm:p-6 md:p-10">
                        <div className="flex h-full items-center justify-end">
                          <div className="inline-flex flex-col items-end gap-4 sm:gap-6">
                            <BuilderNumberRow
                              template={problem.builder.topTemplate}
                              slotsById={builderSlotsById}
                              slotValues={builderSlotValues}
                              onSlotChange={handleBuilderSlotChange}
                            />
                            <div className="flex items-center justify-end gap-3 sm:gap-5">
                              <span className="text-4xl font-black text-slate-500 sm:text-5xl md:text-7xl">{problem.builder.op}</span>
                              <BuilderNumberRow
                                template={problem.builder.bottomTemplate}
                                slotsById={builderSlotsById}
                                slotValues={builderSlotValues}
                                onSlotChange={handleBuilderSlotChange}
                              />
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-900" />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[30px] border border-sky-200 bg-sky-50 p-4 md:p-5">
                        <div className="flex flex-col gap-3">
                          {problem.builder.slots.map((slot) => (
                            <div key={slot.id} className="rounded-2xl border border-sky-200 bg-white px-4 py-4">
                              <div className="text-sm font-black text-slate-500">{slot.label}</div>
                              <div className="mt-1 text-2xl font-black text-sky-700 sm:text-3xl">{formatDigitChoices(slot.digits)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : shouldRenderHorizontalEquation ? (
                  <div className="flex w-full items-center justify-center text-center">
                    <span>{problem.text}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col items-end">
                      <span>{problem.text.split(' ')[0]}</span>
                      <div className="flex items-center gap-4">
                        <span>{problem.text.split(' ')[1]}</span>
                        <span>{problem.text.split(' ')[2]}</span>
                      </div>
                    </div>
                    <div className="w-full h-4 bg-slate-900 my-6 rounded-full"></div>
                  </>
                )}
              </motion.div>
            )}
            </div>

            {!isSpecialChallengeActive && problem.kind !== 'shapeRain' && (problem.kind !== 'shapeDraw' || isShapeReadProblem) && (
              <div className={`shrink-0 flex flex-col ${battleInputResponsiveClass}`}>
                {usesBattleStructuredTimeInput ? (
                  <BattleStructuredTimeInput
                    parts={editableClockParts}
                    answerValue={clockAnswerInput}
                    onAnswerChange={handleClockAnswerChange}
                    onSubmit={checkAnswer}
                    canSubmit={canAttemptAttack}
                    condensed={isCompactBattleViewport}
                  />
                ) : isStructuredTimeAnswerProblem || isShapeDragClassifyProblem ? (
                  <button
                    type="button"
                    disabled={!canAttemptAttack}
                    onClick={checkAnswer}
                    className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-lg font-black text-white shadow-lg sm:px-6 sm:text-xl ${
                      canAttemptAttack
                        ? 'bg-emerald-600 hover:bg-emerald-500'
                        : 'cursor-not-allowed bg-slate-500 opacity-60'
                    }`}
                  >
                    <Sword size={22} /> 공격!
                  </button>
                ) : (
                  <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-stretch ${isDenseNumberedStoryLayout ? 'gap-2' : battleInputResponsiveClass}`}>
                    <div className={`flex min-w-0 items-center rounded-2xl border-4 border-slate-500 bg-slate-700 px-4 focus-within:border-emerald-500 ${
                      isDenseNumberedStoryLayout
                        ? 'gap-2 py-1'
                        : isCompactBattleViewport
                          ? 'gap-2 py-1.5'
                          : 'gap-3 py-2'
                    }`}>
                      <input
                        type={usesTextAnswerInput || isShapeReadProblem ? 'text' : 'number'}
                        inputMode={usesTextAnswerInput || isShapeReadProblem ? 'text' : 'numeric'}
                        value={displayedInputValue}
                        disabled={isBattleAnswerInputDisabled}
                        onChange={e => {
                          if (isBattleAnswerInputDisabled) return;
                          setInputValue(e.target.value);
                        }}
                        onKeyDown={e => {
                          if (isBattleAnswerInputDisabled) {
                            e.preventDefault();
                            return;
                          }
                          if (e.key === 'Enter' && !e.ctrlKey && !e.altKey) {
                            e.preventDefault();
                            checkAnswer();
                          }
                        }}
                        className={`min-w-0 flex-1 bg-transparent text-center font-black text-slate-100 outline-none placeholder:text-slate-400 ${
                          isDenseNumberedStoryLayout
                            ? 'py-1 text-lg sm:text-xl'
                            : isCompactBattleViewport
                              ? 'py-1.5 text-xl sm:text-2xl'
                              : 'py-2 text-2xl sm:text-3xl'
                        } disabled:cursor-not-allowed disabled:text-slate-400`}
                        placeholder={
                          isBattleAnswerInputDisabled
                            ? '종이가 접히는 중'
                            : problem.kind === 'builder'
                            ? '답'
                            : isShapeReadProblem
                              ? shapeReadInputPlaceholder
                            : problem.kind === 'distanceWorksheet'
                              ? usesTextAnswerInput
                                ? '장소 이름 입력'
                                : '숫자 입력'
                              : requiresUnitSelection
                                ? '숫자 입력'
                                : '정답 입력'
                        }
                      />
                      {requiresUnitSelection && (
                        <div ref={unitMenuRef} className="relative shrink-0 pl-1">
                          <button
                            type="button"
                            onClick={() => setIsUnitMenuOpen((prev) => !prev)}
                            className={`flex min-h-[3.75rem] min-w-[7.75rem] items-center justify-between rounded-2xl border-2 px-4 py-3 text-lg font-black outline-none transition sm:min-h-[4rem] sm:min-w-[8.5rem] sm:text-xl ${
                              unitInputValue
                                ? 'border-cyan-300 bg-[linear-gradient(180deg,#67e8f9,#22d3ee)] text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.22)]'
                                : 'border-slate-300/60 bg-[linear-gradient(180deg,#334155,#1e293b)] text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                            }`}
                            aria-haspopup="listbox"
                            aria-expanded={isUnitMenuOpen}
                          >
                            <span className="truncate">{unitInputValue || '단위'}</span>
                            <ChevronDown
                              size={20}
                              className={`shrink-0 transition-transform ${isUnitMenuOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {isUnitMenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                transition={{ duration: 0.16, ease: 'easeOut' }}
                                className="absolute bottom-[calc(100%+0.7rem)] right-0 z-30 w-[8.5rem] overflow-hidden rounded-[1.35rem] border-2 border-cyan-200/80 bg-[linear-gradient(180deg,rgba(30,41,59,0.98),rgba(15,23,42,0.98))] p-2 shadow-[0_18px_44px_rgba(15,23,42,0.42)]"
                              >
                                {answerUnitOptions.map((option) => {
                                  const isSelected = normalizeAnswerUnit(unitInputValue) === normalizeAnswerUnit(option);
                                  return (
                                    <button
                                      key={option}
                                      type="button"
                                      onClick={() => {
                                        setUnitInputValue(option);
                                        setIsUnitMenuOpen(false);
                                      }}
                                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-black transition ${
                                        isSelected
                                          ? 'bg-[linear-gradient(180deg,#3b82f6,#2563eb)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'
                                          : 'text-slate-100 hover:bg-white/10'
                                      }`}
                                      role="option"
                                      aria-selected={isSelected}
                                    >
                                      <span>{option}</span>
                                      {isSelected ? <Check size={18} className="shrink-0" /> : <span className="w-[18px]" aria-hidden="true" />}
                                    </button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      disabled={!canAttemptAttack}
                      onClick={checkAnswer}
                      className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl font-black text-white shadow-lg ${
                        isDenseNumberedStoryLayout
                          ? 'px-4 py-2 text-base sm:min-w-[150px] sm:w-auto sm:px-5 sm:text-lg'
                          : 'px-5 py-3 text-lg sm:min-w-[170px] sm:w-auto sm:px-6 sm:text-xl'
                      } ${
                        canAttemptAttack
                          ? 'bg-emerald-600 hover:bg-emerald-500'
                          : 'cursor-not-allowed bg-slate-500 opacity-60'
                      }`}
                    >
                      <Sword size={22} /> 공격!
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <AnimatePresence>
        {gameState === 'playing' && isMetamonTransformOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_50%_42%,rgba(168,85,247,0.25),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(24,18,44,0.98))] p-4"
          >
            <div className="relative flex w-full max-w-3xl flex-col items-center justify-center text-center">
              <div className="relative grid h-[min(62svh,30rem)] w-full place-items-center">
                <motion.div
                  className="absolute h-[min(48svh,23rem)] w-[min(48svh,23rem)] rounded-full border-[10px] border-dashed border-violet-200/70"
                  initial={{ opacity: 0, scale: 0.42, rotate: 0 }}
                  animate={{ opacity: [0, 1, 0.18], scale: [0.42, 1.12, 1.7], rotate: 320 }}
                  transition={{ duration: 2.75, ease: 'easeInOut' }}
                />
                <motion.img
                  src={unit1Level6MetamonTransformImage}
                  alt="메타몬 변신"
                  className="relative z-10 h-[min(56svh,26rem)] w-auto object-contain drop-shadow-[0_28px_42px_rgba(0,0,0,0.42)]"
                  initial={{ opacity: 0, scale: 0.64, rotate: -8 }}
                  animate={{ opacity: [0, 1, 1, 0.92], scale: [0.64, 1.08, 1, 1.06], rotate: [-8, 5, -3, 0] }}
                  transition={{ duration: 2.45, times: [0, 0.28, 0.72, 1], ease: 'easeInOut' }}
                  draggable={false}
                />
                {Array.from({ length: 12 }, (_, index) => (
                  <motion.div
                    key={`metamon-transform-spark-${index}`}
                    className="absolute h-3 w-3 rounded-sm bg-violet-200"
                    style={{
                      left: `${14 + (index * 11) % 72}%`,
                      top: `${16 + (index * 17) % 60}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.45, 1.6, 0.35],
                      rotate: [0, 45, -28],
                      y: [14, -18, -34],
                    }}
                    transition={{ repeat: Infinity, duration: 1.35, delay: index * 0.08, ease: 'easeInOut' }}
                  />
                ))}
              </div>
              <motion.h2
                className="text-3xl font-black text-white sm:text-5xl"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                메타고마로 변신!
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gameState === 'playing' && isCaterpillarEvolutionOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(30,41,59,0.98))] p-4"
          >
            <div className="relative flex w-full max-w-3xl flex-col items-center justify-center text-center">
              <div className="relative grid h-[min(62svh,28rem)] w-full place-items-center">
                <motion.img
                  src={unit1Level8CaterpillarDefaultImage}
                  alt="배추흰나비 애벌레"
                  className="absolute h-[min(48svh,20rem)] w-auto object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.35)]"
                  initial={{ opacity: 1, scale: 1, rotate: 0 }}
                  animate={{ opacity: [1, 1, 0], scale: [1, 0.9, 0.44], rotate: [0, -4, 10] }}
                  transition={{ duration: 1.15, times: [0, 0.58, 1], ease: 'easeInOut' }}
                  draggable={false}
                />
                <motion.div
                  className="absolute grid h-[min(42svh,18rem)] w-[min(42svh,18rem)] place-items-center"
                  initial={{ opacity: 0, scale: 0.45, y: 18, rotate: -4 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.45, 1.08, 1, 0.62], y: [18, 0, 0, -10], rotate: [-4, 2, -2, 8] }}
                  transition={{ duration: 1.8, times: [0, 0.22, 0.68, 1], delay: 0.72, ease: 'easeInOut' }}
                  aria-label="번데기"
                >
                  <svg viewBox="0 0 240 240" className="h-full w-full drop-shadow-[0_24px_34px_rgba(0,0,0,0.34)]" aria-hidden="true">
                    <path
                      d="M119 22 C156 28 184 70 178 115 C173 158 148 207 120 218 C91 207 66 158 62 116 C58 71 83 29 119 22 Z"
                      fill="#f8fff1"
                      stroke="#ffffff"
                      strokeWidth="22"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M119 22 C156 28 184 70 178 115 C173 158 148 207 120 218 C91 207 66 158 62 116 C58 71 83 29 119 22 Z"
                      fill="#d9ef95"
                      stroke="#4f6f37"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                    <path d="M88 76 C108 64 139 64 158 78" fill="none" stroke="#789348" strokeWidth="7" strokeLinecap="round" />
                    <path d="M78 113 C105 101 142 102 169 116" fill="none" stroke="#789348" strokeWidth="6" strokeLinecap="round" opacity="0.75" />
                    <path d="M85 150 C109 160 138 160 159 148" fill="none" stroke="#789348" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
                    <path d="M112 35 C104 66 106 169 121 207" fill="none" stroke="#f3f6bf" strokeWidth="12" strokeLinecap="round" opacity="0.78" />
                    <circle cx="149" cy="93" r="7" fill="#789348" />
                    <circle cx="96" cy="130" r="5" fill="#789348" opacity="0.75" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute h-72 w-72 rounded-full border-[10px] border-dashed border-emerald-100/70"
                  initial={{ opacity: 0, scale: 0.45, rotate: 0 }}
                  animate={{ opacity: [0, 1, 0.15], scale: [0.45, 1.18, 1.72], rotate: 300 }}
                  transition={{ duration: 2.65, ease: 'easeInOut' }}
                />
                <motion.img
                  src={unit1Level9ButterflyDefaultImage}
                  alt="배추흰나비"
                  className="absolute h-[min(50svh,21rem)] w-auto object-contain drop-shadow-[0_26px_38px_rgba(0,0,0,0.38)]"
                  initial={{ opacity: 0, scale: 0.45, y: 18 }}
                  animate={{ opacity: [0, 0, 0, 1, 1], scale: [0.45, 0.5, 0.72, 1.12, 1], y: [18, 18, 10, -8, 0] }}
                  transition={{ duration: 2.85, times: [0, 0.38, 0.62, 0.84, 1], ease: 'easeOut' }}
                  draggable={false}
                />
                {Array.from({ length: 10 }, (_, index) => (
                  <motion.div
                    key={`evolution-spark-${index}`}
                    className="absolute h-3 w-3 rounded-sm bg-yellow-200"
                    style={{
                      left: `${18 + (index * 7) % 64}%`,
                      top: `${18 + (index * 13) % 58}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.45, 0.4],
                      rotate: [0, 35, -20],
                      y: [12, -16, -28],
                    }}
                    transition={{ repeat: Infinity, duration: 1.45, delay: index * 0.09, ease: 'easeInOut' }}
                  />
                ))}
              </div>
              <motion.h2
                className="text-3xl font-black text-white sm:text-5xl"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                배추흰나비로 변신!
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gameState === 'playing' && isSecretCodePromptOpen && pendingLevelTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onSubmit={(event) => {
                event.preventDefault();
                submitSecretCode();
              }}
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-amber-300/30 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.96))] p-5 text-left shadow-[0_24px_80px_rgba(15,23,42,0.48)] sm:p-7"
              role="dialog"
              aria-modal="true"
              aria-labelledby="secret-code-title"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_30%)]" />

              <div className="relative">
                <div className="inline-flex rounded-full border border-amber-200/30 bg-amber-300/10 px-3 py-1 text-xs font-black tracking-[0.18em] text-amber-200">
                  SECRET CODE
                </div>
                <h2 id="secret-code-title" className="mt-4 text-3xl font-black text-white sm:text-[2rem]">
                  3단원 8단계 입장
                </h2>
                <p className="mt-3 break-keep text-base font-bold leading-7 text-slate-200 sm:text-lg">
                  다음 단계로 가려면 비밀암호를 입력하세요.
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-400">띄어쓰기는 달라도 괜찮아요.</p>

                <input
                  autoFocus
                  type="text"
                  value={secretCodeInput}
                  onChange={(event) => {
                    setSecretCodeInput(event.target.value);
                    if (secretCodeError) {
                      setSecretCodeError('');
                    }
                  }}
                  placeholder="비밀암호 입력"
                  className={`mt-5 w-full rounded-2xl border-2 bg-slate-950 px-4 py-3 text-xl font-black text-white outline-none transition sm:px-5 sm:py-4 sm:text-2xl ${
                    secretCodeError ? 'border-rose-400' : 'border-slate-600 focus:border-amber-400'
                  }`}
                />

                <AnimatePresence initial={false}>
                  {secretCodeError && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="mt-3 text-sm font-black text-rose-300 sm:text-base"
                    >
                      {secretCodeError}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  onPointerDown={warmAudio}
                  className={`mt-5 flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-black transition sm:py-4 sm:text-lg ${
                    hasSecretCodeInput
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  확인하고 다음 단계로
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {isResultScreen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className={`relative flex w-full max-w-xl max-h-[calc(100svh-1rem)] flex-col justify-center overflow-x-hidden overflow-y-auto rounded-[2.5rem] border-4 p-4 text-center shadow-2xl sm:max-w-2xl sm:p-6 lg:p-8 ${
            isWinResult
              ? 'border-yellow-200/35 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_30%),linear-gradient(180deg,rgba(49,46,129,0.92),rgba(30,41,59,0.98))] shadow-[0_40px_120px_rgba(245,158,11,0.3)]'
              : 'border-slate-600 bg-slate-800'
          }`}
        >
          {isWinResult && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_50%_32%,rgba(250,204,21,0.22),transparent_28%)]" />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(250,204,21,0),rgba(253,224,71,0.55),rgba(250,204,21,0),rgba(244,114,182,0.35),rgba(250,204,21,0))] blur-[2px]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
              />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-yellow-100/30"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
              />
              {VICTORY_CONFETTI.map((item) => (
                <motion.div
                  key={`${item.left}-${item.top}`}
                  className={`pointer-events-none absolute ${item.className}`}
                  style={{ left: item.left, top: item.top }}
                  animate={{
                    y: [0, -10, 0, 8, 0],
                    x: [0, item.drift, 0],
                    rotate: [0, 14, -10, 0],
                    opacity: [0.45, 1, 0.8, 1, 0.45],
                  }}
                  transition={{ repeat: Infinity, duration: item.duration, delay: item.delay, ease: 'easeInOut' }}
                />
              ))}
              {VICTORY_SPARKLES.map((item) => (
                <motion.div
                  key={`${item.left}-${item.top}-sparkle`}
                  className={`pointer-events-none absolute ${item.className}`}
                  style={{ left: item.left, top: item.top }}
                  animate={{ scale: [0.7, 1.18, 0.7], opacity: [0.2, 1, 0.2], rotate: [0, 16, -16, 0] }}
                  transition={{ repeat: Infinity, duration: item.duration, delay: item.delay, ease: 'easeInOut' }}
                >
                  <Sparkles size={item.size} />
                </motion.div>
              ))}
            </>
          )}

          {gameState === 'win' ? (
            <div className="relative mb-3 sm:mb-4">
              <div className="relative mx-auto mb-3 flex h-28 w-28 items-center justify-center sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-300/25 blur-3xl"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-5 rounded-full border border-yellow-100/40 bg-white/10 backdrop-blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                />
                <motion.div
                  animate={{ rotate: [0, -10, 12, -8, 0], scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                >
                  <Star className="h-20 w-20 fill-current text-yellow-300 drop-shadow-[0_0_35px_rgba(253,224,71,0.75)] sm:h-24 sm:w-24 lg:h-28 lg:w-28" />
                </motion.div>
              </div>
              <motion.p
                className="mb-1 text-xs font-black tracking-[0.55em] text-yellow-100/80 sm:text-sm"
                animate={{ letterSpacing: ['0.45em', '0.6em', '0.45em'], opacity: [0.75, 1, 0.75] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
              >
                CHAMPION
              </motion.p>
              <motion.h1
                className="text-[clamp(3.5rem,12vw,5.8rem)] font-black leading-none tracking-[-0.08em] text-transparent bg-[linear-gradient(180deg,#fef9c3_0%,#facc15_36%,#fb7185_100%)] bg-clip-text"
                style={{ textShadow: '0 18px 40px rgba(251,191,36,0.22)' }}
                animate={{ scale: [1, 1.04, 1], y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.7, ease: 'easeInOut' }}
              >
                배틀 승리!
              </motion.h1>
            </div>
          ) : processedDefeatSceneImage ? (
            <div className="relative mb-4 sm:mb-5">
              <motion.div
                className="mx-auto w-full max-w-[20rem] overflow-hidden rounded-[1.75rem] border border-slate-500/80 bg-slate-900/80 p-2 shadow-[0_22px_60px_rgba(15,23,42,0.4)] sm:max-w-[22rem]"
                animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
              >
                <img
                  src={processedDefeatSceneImage}
                  alt="1단계 패배 장면"
                  className={`mx-auto aspect-square max-h-[34svh] w-full rounded-[1.35rem] object-contain sm:max-h-[38svh] ${defeatSceneImageClassName}`}
                  draggable={false}
                />
              </motion.div>
              {/*
              <h1 className="text-5xl font-black text-slate-300 sm:text-6xl lg:text-7xl">?꾩쟾 醫낅즺</h1>
            </div>
              */}
            </div>
          ) : (
            <motion.div 
              animate={{ 
                opacity: [1, 0.3, 1],
                y: [0, 20, 0],
                filter: ['grayscale(0%)', 'grayscale(100%)']
              }} 
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Heart className="mx-auto mb-6 h-28 w-28 fill-current text-slate-500 sm:mb-7 sm:h-36 sm:w-36 lg:mb-8 lg:h-48 lg:w-48" />
              <h1 className="mb-8 text-6xl font-black text-slate-300 sm:text-7xl lg:text-8xl">도전 종료</h1>
            </motion.div>
          )}
          <AnimatePresence>
            {isWinResult && pendingRewardSkin && (
              <motion.div
                key={pendingRewardSkin.id}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="relative mb-4 overflow-hidden rounded-[1.75rem] border border-yellow-100/35 bg-[radial-gradient(circle_at_50%_0%,rgba(253,224,71,0.26),transparent_30%),radial-gradient(circle_at_16%_72%,rgba(45,212,191,0.15),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(8,13,26,0.96))] px-4 py-5 shadow-[0_24px_80px_rgba(250,204,21,0.18),inset_0_1px_0_rgba(255,255,255,0.16)] sm:px-6"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-yellow-100/60 to-transparent" />
                <div className="pointer-events-none absolute -left-16 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-emerald-300/10 blur-2xl" />
                <div className="pointer-events-none absolute -right-16 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-rose-300/10 blur-2xl" />
                <div className="relative mx-auto flex max-w-[34rem] flex-col items-center">
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute left-1/2 top-[-0.2rem] z-30 h-0 w-0 -translate-x-1/2 border-x-[0.85rem] border-t-[1.35rem] border-x-transparent border-t-yellow-200 drop-shadow-[0_0_18px_rgba(253,224,71,0.9)]" />
                    <div className="relative overflow-hidden rounded-[1.45rem] border border-yellow-100/35 bg-[linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.94))] p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_20px_54px_rgba(2,8,23,0.42)]">
                      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-14 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-3 top-1/2 z-20 h-[8rem] -translate-y-1/2 rounded-[1.1rem] border border-yellow-100/45 bg-yellow-100/8 shadow-[0_0_40px_rgba(250,204,21,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]" />
                      <div className="relative mx-auto h-[8rem] max-w-[28rem] overflow-hidden">
                        <motion.div
                          key={rewardRouletteSpinKey}
                          className="flex flex-col items-stretch"
                          initial={{ y: 0 }}
                          animate={{ y: rewardSlotMachineStopY }}
                          transition={{ duration: 3.35, ease: [0.12, 0.78, 0.18, 1] }}
                        >
                          {rewardSlotMachineItems.map((skin, slotIndex) => (
                            <div
                              key={`${skin.id}-${slotIndex}`}
                              className="flex h-[8rem] items-center justify-center gap-5 px-3"
                            >
                              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.1rem] border border-white/18 bg-slate-950/72 shadow-[0_10px_24px_rgba(2,8,23,0.32),inset_0_1px_0_rgba(255,255,255,0.08)]">
                                <img
                                  src={skin.spriteSet.default}
                                  alt={`${skin.label} 슬롯 후보`}
                                  className="h-20 w-auto object-contain drop-shadow-[0_8px_12px_rgba(2,8,23,0.42)]"
                                  draggable={false}
                                />
                              </span>
                              <span className="min-w-0 text-left">
                                <span className="block text-xs font-black tracking-[0.22em] text-emerald-200/85">보상 스킨</span>
                                <span className="mt-1 block truncate text-2xl font-black leading-tight text-white sm:text-3xl">
                                  {skin.label}
                                </span>
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-2">
                      {[0, 1, 2].map((dotIndex) => (
                        <motion.span
                          key={dotIndex}
                          className="h-2.5 w-2.5 rounded-full bg-yellow-200 shadow-[0_0_12px_rgba(253,224,71,0.65)]"
                          animate={rewardRoulettePhase === 'spinning' ? { opacity: [0.35, 1, 0.35], scale: [0.82, 1.15, 0.82] } : { opacity: 1, scale: 1 }}
                          transition={{ repeat: rewardRoulettePhase === 'spinning' ? Infinity : 0, duration: 0.72, delay: dotIndex * 0.12, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="mt-3 min-h-[1.75rem] text-center"
                    animate={rewardRoulettePhase === 'revealed' ? { y: [6, 0], opacity: [0, 1] } : { opacity: 1 }}
                    transition={{ duration: 0.34, ease: 'easeOut' }}
                  >
                    <p className={`text-sm font-black tracking-[0.2em] sm:text-base ${
                      rewardRoulettePhase === 'spinning' ? 'text-yellow-50' : 'text-emerald-200'
                    }`}>
                      {rewardRoulettePhase === 'spinning' ? '새 스킨 추첨 중' : '해금 완료'}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isWinResult && isRewardPoolDepleted && !pendingRewardSkin && (
              <motion.div
                key="reward-pool-depleted"
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="mb-4 rounded-[1.5rem] border border-emerald-200/30 bg-slate-950/70 px-4 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-6"
              >
                <p className="break-keep text-sm font-black tracking-[0.12em] text-emerald-200 sm:text-base">
                  이 단원의 모든 보상 스킨을 이미 해금했습니다
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          {!isWinResult && (
            <div className="mb-4 rounded-[1.75rem] border border-slate-500/70 bg-slate-900/80 px-4 py-4 shadow-inner sm:px-6 sm:py-5">
              <p className="text-3xl font-black text-white sm:text-4xl">{finalRecordLabel}</p>
              <p className="mt-2 break-keep text-sm font-bold leading-6 text-slate-300 sm:text-lg">
                {finalRecordTopic}
              </p>
              <p className="mt-2 text-xs font-black text-emerald-300 sm:text-sm">
                이 크롬북에 기록이 저장되었어요.
              </p>
            </div>
          )}
          <div className="mx-auto flex w-full flex-col gap-2 sm:w-auto sm:min-w-[18rem]">
            <button onPointerDown={warmAudio} onClick={openRecordModal} className={`flex w-full items-center justify-center gap-3 rounded-full px-6 py-3 text-lg font-black transition-all sm:text-xl lg:gap-4 lg:px-10 lg:py-4 lg:text-2xl ${
              isWinResult
                ? 'bg-[linear-gradient(90deg,#facc15_0%,#34d399_100%)] text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.28)] hover:scale-[1.01] hover:brightness-105'
                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
            }`}><History size={28} /> 기록 보기</button>
            <button onPointerDown={warmAudio} onClick={returnToStartScreen} className={`flex w-full items-center justify-center gap-3 rounded-full px-6 py-3 text-lg font-black text-white transition-all sm:text-xl lg:gap-4 lg:px-10 lg:py-4 lg:text-2xl ${
              isWinResult
                ? 'border border-white/15 bg-white/14 backdrop-blur-sm hover:bg-white/20'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}><RotateCcw size={28} /> 다시하기</button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {isResultScreen && isRecordModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-stretch justify-center overflow-hidden bg-slate-950/82 p-3 backdrop-blur-md sm:p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative my-auto flex max-h-[calc(100svh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-cyan-100/16 bg-slate-950/92 p-4 text-left shadow-[0_28px_90px_rgba(2,8,23,0.62)] sm:max-h-[calc(100svh-2rem)] sm:p-5"
              role="dialog"
              aria-modal="true"
              aria-labelledby="result-records-title"
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/35 to-transparent" />

              <div className="relative flex min-h-0 flex-col overflow-hidden">
                <div className="flex items-start justify-between gap-4 pr-12">
                  <div className="min-w-0">
                    <h2 id="result-records-title" className="text-2xl font-black text-white sm:text-3xl">나의 기록</h2>
                    {visibleStoredPlayRecordSummary ? (
                      <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-black text-slate-100 sm:text-base">{visibleStoredPlayRecordSummary}</p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    aria-label="닫기 또는 길게 눌러 기록 모두 지우기"
                    title="닫기 / 길게 누르면 기록 삭제"
                    onPointerDown={startRecordClearHold}
                    onPointerUp={finishRecordClosePress}
                    onPointerLeave={cancelRecordClearHold}
                    onPointerCancel={cancelRecordClearHold}
                    className="record-close-button absolute right-4 top-4 z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate-900/95 text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.38)] transition hover:border-cyan-200/45 hover:bg-slate-800 sm:right-6 sm:top-6"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="skin-scrollbar mt-4 min-h-0 max-h-[min(66svh,38rem)] overflow-y-auto overscroll-contain pr-1">
                  {hasStoredPlayRecords ? (
                    <div className="space-y-3">
                      {visibleStoredPlayRecordSections.map((section) => {
                        const recordUnitTheme = STORED_PLAY_RECORD_UNIT_THEMES[section.unitId];

                        return (
                          <section
                            key={section.unitId}
                            className="rounded-lg border border-white/10 bg-white/[0.035] p-3 shadow-[0_10px_24px_rgba(2,8,23,0.2)]"
                          >
                            <div className="flex items-center gap-3">
                              <h3 className={`truncate text-base font-black ${recordUnitTheme.labelClassName}`}>{section.unitTitle} · {section.records.length}번</h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {section.records.map((record) => {
                                const isLatestRecord = record.id === visibleStoredPlayRecords[0]?.id;
                                const isFullClearRecord = record.result === 'win' && record.level >= record.totalLevels;

                                return (
                                  <div
                                    key={record.id}
                                    aria-label={`${formatStoredPlayRecordDate(record.playedAt)} ${record.unitTitle} ${record.level}단계${isFullClearRecord ? ' 클리어' : ''}`}
                                    title={`${formatStoredPlayRecordDate(record.playedAt)} · ${record.level}단계${isFullClearRecord ? ' 클리어' : ''}`}
                                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border text-center shadow-[0_8px_18px_rgba(2,8,23,0.2)] sm:h-14 sm:w-14 ${
                                      isLatestRecord ? 'ring-2 ring-cyan-200/70' : ''
                                    } ${recordUnitTheme.cardClassName}`}
                                  >
                                    <div className={`absolute inset-x-0 top-0 h-1 ${recordUnitTheme.accentClassName}`} />
                                    {isFullClearRecord ? (
                                      <Crown className="absolute top-1.5 h-3 w-3 text-amber-300 drop-shadow-[0_1px_4px_rgba(251,191,36,0.45)]" strokeWidth={3} aria-hidden="true" />
                                    ) : null}
                                    <p className={`text-2xl font-black leading-none text-white ${isFullClearRecord ? 'pt-2.5' : ''}`}>{record.level}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </section>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-500/70 bg-slate-950/35 px-5 py-8 text-center">
                      <p className="text-lg font-black text-white">아직 저장된 기록이 없어요.</p>
                      <p className="mt-2 text-sm font-semibold text-slate-300">배틀을 한 번 마치면 여기에 기록이 남습니다.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isReadingActivityBlocked && (
          <motion.div
            key="reading-activity-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-slate-950/88 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border-4 border-red-300/70 bg-[linear-gradient(180deg,rgba(127,29,29,0.98),rgba(15,23,42,0.98))] p-4 text-center shadow-[0_32px_100px_rgba(0,0,0,0.68)] sm:p-6"
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="reading-activity-block-title"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-red-100/80 to-transparent" />
              <img
                src={readingActivityWarningImage}
                alt="잡았다 요놈 경고 이미지"
                className="mx-auto max-h-[52svh] w-full rounded-[1.5rem] border border-white/15 object-contain shadow-[0_18px_48px_rgba(0,0,0,0.38)]"
                draggable={false}
              />
              <div className="mt-5">
                <h2 id="reading-activity-block-title" className="mt-5 break-keep text-3xl font-black leading-tight text-white sm:text-5xl">
                  지금은 독서시간입니다.
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
