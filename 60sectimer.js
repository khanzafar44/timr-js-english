var arr, stop, time_left = 60,
            arr_pointer = 0,
            correct = 0,
            incorrect = 0,
            n = 0,
            keystrokes = 0,
            accuracy = 0;

        function test_stop() {
            60 != time_left ? (minute_elapsed = Math.floor((60 - time_left) / 60), seconds_elapsed = (60 - time_left) % 60) : (minute_elapsed = Math.floor(1), seconds_elapsed = 0), time_elapsed = minute_elapsed + " minutes " + seconds_elapsed + " seconds", seconds_passed = time_left, time_left = 0
        }

        function timer() {
            var e = document.getElementById("time-elapsed");
            if (e.innerHTML = time_left, -1 == --time_left) {
                accuracy = Math.floor(correct / (correct + incorrect) * 100), clearTimeout(stop), document.getElementById("typing_space").value = "Time's up - HINDITYPINGTEST.IN";
                var t = Math.floor(correct - incorrect / 2);
                t < 0 && (t = 0), document.getElementById("display_space").innerHTML = '<div style="margin-left:10px"><table class="table table-bordered" style="font-size:20px;margin-bottom:0 ;margin-top : 7px"><tr><td><span>Correct : ' + correct + "</span></td><td><span>Incorrect = " + incorrect + "</span></td></tr><tr><td>Keystrokes : " + keystrokes + "</td><td>Accuracy : " + accuracy + '%</td></tr><tr style="text-align:center"><td colspan = "2"><span>Words Per Minute : ' + t + "</span></td></tr><div>", $('input[type="text"], textarea').attr("readonly", "readonly")
            } else stop = setTimeout("timer()", 1e3);
            time_left <= 24 && (e.style.color = "orange"), time_left <= 14 && (e.style.color = "red")
        }

        function initialize() {
            var e = new Array;
            e[1] = "My name is Mohd zafar. I have three loving sisters, their names are Parveen Bano, Ashmeen Fatima and Nasrin Fatia. In minutes, our ship was sailing on the sea waters. But to our horror, we saw the rocs following our ship overhead. They held huge rocks in their claws which they dropped on our ship. As the rocks hit the ship, it broke into pieces and sank with all my companions on board. By sheer luck I survived when large waves swept me on to the shores of an island.On the island I rested for a while and then ate some wild fruits that grew there. As I went around looking for some inhabitants on the island, I saw an old man sitting by a stream. His hairs were long and a long beard covered his cheeks. He had a blank look on his face. He looked weak and haggard. I approached him and asked him if I could help him. He signed to me and asked to be lifted on my back to help him cross the stream. I obliged but after a while he tightened his hold around my neck that I nearly choked and fainted.";
            for (var t = 0; 1 != t;) {
                var r = Math.floor(10 * Math.random() + 1);
                r >= 0 && r <= 1 && (t = 1)
            }
            for (var a = e[r], o = "", s = (arr = a.split(" ")).length, i = 0; s > 0;) {
                s -= 9;
                for (var l = 0; l < 9; l++) o += "<span id='" + i + "' class='untyped'; border-radius:10%'>" + arr[i++] + "</span> ";
                o += "</br>"
            }
            document.getElementById("display_space").innerHTML = '<p id ="display" style="text-align:center; margin-left:1px; font-size:18 ; line-height:170%; font-family:Times New Roman"> ' + o + " </p>", document.getElementById("time-elapsed").innerHTML = 60, $('input[type="text"], textarea').attr("readonly", !1), document.getElementById("typing_space").value = "", check = 0, time_left = 60, arr_pointer = 0, correct = 0, incorrect = 0, n = 0, keystrokes = 0, document.getElementById("time-elapsed").style.color = "#FF6F00", clearTimeout(stop)
        }

        function dealWithKeyboard(e) {
            if (32 == e.keyCode && time_left > 0) {
                var t = document.getElementById("typing_space"),
                    r = t.value;
                keystrokes += r.length, keystrokes++, $("#" + (n + 1)).addClass("focus"), $("#" + n).removeClass("focus"), 0 == r.trim().localeCompare(arr[arr_pointer]) ? (correct++, $("#" + n).removeClass("untyped").addClass("correct"), n++) : (incorrect++, $("#" + n).removeClass("untyped").addClass("incorrect"), n++), t.value = "", arr_pointer + 1 > 9 && (arr_pointer + 1) % 9 == 0 && scroll(), arr_pointer++
            }
        }

        function scroll() {
            var e = $("#display_space").scrollTop();
            $("#display_space").scrollTop(e + 48)
        }
        window.addEventListener("keydown", dealWithKeyboard, !1);
        var check = 0;
        $("#typing_space").keypress(function(e) {
            32 != e.keyCode && 1 != check && (check = 1, $("#0").addClass("focus"), timer(), $("#stoptest").show())
        }), $(document).on("ready", function() {});
  
