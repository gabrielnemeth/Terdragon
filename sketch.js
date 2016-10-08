
var axiom = "F";
var sentence = axiom;
var len = 100;
var angle;
var rules = [];

rules[0] = {
    a: "F",
    b: "F+F-F"
}

function turtle() {
    background(51);
    resetMatrix();
    translate(width / 2, height / 2);
    stroke(255);

    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);

        if (current == "F") {
            line(0,0,0, -len);
            translate(0, -len);
        } else if (current == "+") {
            rotate(angle);        
        } else if (current == "-") {
            rotate(-angle);
        }
    }
}


function generate() {
    len *= 0.7;
    var nextSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;

        for (var j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }

        if (!found) {
            nextSentence += current;
        }


    }

    sentence = nextSentence;
    createP(sentence);

    turtle();
}

function setup() {
    createCanvas(800, 800);
    angle = radians(120);
    background(51);
    createP(axiom);
    turtle();
    var button = createButton("generate");
    button.mousePressed(generate);
}