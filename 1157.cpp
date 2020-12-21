#include <iostream>
#include <algorithm>
#include <string.h>

using namespace std;

int boj_1157() {

	string s;
	cin >> s;

	transform(s.begin(), s.end(), s.begin(), ::tolower);

	int chars[26];
	memset(chars, -1, sizeof(chars));


	for (int i = 0; i < s.size(); i++) {
		for (int j = 0; j < sizeof(chars) / sizeof(chars[0]); j++) {
			if (s.at(i) == 97 + j) chars[j]++;
		}
	}

	int max = -1;
	int maxc = 0;
	int dcheck = 0;

	for (int i = 0; i < sizeof(chars)/sizeof(chars[0]); i++) {
		if (max < chars[i]) {
			max = chars[i];
			maxc = i+65;
		}
	}
	for (int i = 0; i < sizeof(chars) / sizeof(chars[0]); i++) {
		if (max == chars[i]) {
			dcheck++;
		}
	}

	if (dcheck > 1) cout << "?" << endl;
	else printf("%c\n", maxc);
	return 0;
}