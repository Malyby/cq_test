
const uiRouter = require("@uirouter/angularjs");
require("angular-resource");
require('bootstrap');
//Components
import "./component/general/general.module";
import "./component/main-menu/main-menu.module";
import "./component/player/player.module";
import "./component/players-list/players-list.module";
import "./component/games-list/games-list.module";
import "./component/create-player/create-player.module";
import "./component/edit-player/edit-player.module";
import "./component/delete-player/delete-player.module";
import "./component/add-game/add-game.module";
//Services
import "./shared/services/player/playerService.module";
import "./shared/services/players/playersService.module";
import "./shared/services/games/gamesService.module";
import "./shared/services/search/searchService.module";
import "./shared/services/createPlayer/createPlayerService.module";
import "./shared/services/filterGames/filterGames.module";
//Directives
import "./shared/directives/validateUniqueEmail/validateUniqueEmail.module";
import "./shared/directives/validateUniquePhone/validateUniquePhone.module";
import "./shared/directives/validateNickname/validateNickname.module";

angular.module("app", [
    uiRouter.default,
    //Components
    "general",
    "mainMenu",
    "player",
    "playersList",
    "gamesList",
    "createPlayer",
    "editPlayer",
    "deletePlayer",
    "addGame",
    //Services
    "playerService",
    "playersService",
    "gamesService",
    "searchService",
    "createPlayerService",
    "filterGames",
    //Directives
    "validateUniqueEmail",
    "validateUniquePhone",
    "validateNickname"
]);

require("./app.config");

