(function () {
    'use strict';
    
    angular
        .module("filterGames")
        .service("filterGames", function() {
            //Константа
            const relationGameRating = {
                "E": 0,
                "EC": 3,
                "E10+": 10,
                "T": 13,
                "M": 17,
                "AO": 18 
            };

            this.checkDateRelease = function(data_release) {
                const current_date = new Date().getTime();
                if (data_release > current_date) {
                    return false;
                }
                return true;
            }
            this.checkAgeLimit = function(game_rating, player_age) {
                if (relationGameRating[game_rating] > player_age) {
                    return false;
                }
                return true;
            }
            this.checkRepeatGame = function(id, games_id) {
                if (games_id.includes(id)) {
                    return false;
                }
                return true;
            }
        });
})();