#include <iostream>

using namespace std;

bool checker(string word) {
	bool isgroup = true;
	char chs[26];

	int chs_count = 1;

	char ch = word[0];
	chs[0] = ch;

	for (int i = 1; i < word.size(); i++) {
		if (word[i] == ch) continue;
		else {
			for (int j = 0; j < chs_count;j++) {
				if (word[i] == chs[j]) {
					isgroup = false;
					break;
				}
			}
			chs[chs_count] = word[i];
			chs_count++;
			ch = word[i];
		}
	}

	return isgroup;
}

int boj_1316() {

	int tcase = 0;
	int count = 0;


	cin >> tcase;

	for (int i = 0; i < tcase;i++) {
		string word;
		cin >> word;
		if (checker(word)) count++;
	}

	cout << count << endl;

	
	return 0;
}