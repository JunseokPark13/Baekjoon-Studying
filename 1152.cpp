#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

int boj_1152() {

	string s;
	getline(cin, s);

	int i = 0;
	int count = 0;

	while (i < s.size()) {
		if (s[i] == ' ') 
			count++;
		i++;
	}

	if (s[0] == ' ') count--;
	if (s[s.size() - 1] == ' ') count--;

	cout << count+1 << endl;

	return 0;
}