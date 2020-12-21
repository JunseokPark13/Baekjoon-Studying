#include <iostream>
#include <string>

using namespace std;

int croatia_chg(string word) {

	int count = 0;
	
	for (int i = 0; i < word.size();i++) {
		if ((i > 1) && word[i - 2] == 'd' && word[i - 1] == 'z' && word[i] == '=') count--;
		else if (word[i] == '=' || word[i] == '-') continue;
		else if ((i > 0) && (word[i - 1] == 'l') && (word[i] == 'j')) continue;
		else if ((i > 0) && (word[i - 1] == 'n') && (word[i] == 'j')) continue;
		else count++;
	}

	return count;
}

int boj_2941() {

	string word;
	cin >> word;

	cout << croatia_chg(word) << endl;
	return 0;
}