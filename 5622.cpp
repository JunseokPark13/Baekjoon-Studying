#include <iostream>
#include <string>

using namespace std;

int timeCost(string word) {
	int i = 0;
	int time = 0;
	while (word[i] != NULL) {
		if (word[i] >= 65 && word[i] < 68) time += 3;
		else if(word[i] < 71) time += 4;
		else if (word[i] < 74) time += 5;
		else if (word[i] < 77) time += 6;
		else if (word[i] < 80) time += 7;
		else if (word[i] < 84) time += 8;
		else if (word[i] < 87) time += 9;
		else if (word[i] < 91) time += 10;
		i++;
	}
	return time;
}


int boj_5622() {

	string word;
	cin >> word;

	cout << timeCost(word) << endl;
	return 0;
}