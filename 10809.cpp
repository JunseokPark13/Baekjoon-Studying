#include <iostream>
#include <string.h>

using namespace std;

int boj_10809() {

	string word;

	int alphabat[27];
	memset(alphabat, -1, sizeof(alphabat));

	cin >> word;


	for (int i = 0; i < word.size();i++) {
		for (int j = 0; j < 26;j++) {
			if ((int)word.at(i) == 97 + j && alphabat[j]==-1)
				alphabat[j] = i;
		}
	}

	for (int i = 0; i < 26; i++) {
		cout << alphabat[i] << " ";
	}
	cout << endl;

	return 0;
}