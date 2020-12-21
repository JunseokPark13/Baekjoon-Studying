#include <iostream>

using namespace std;

int boj_2675() {
	
	int tcase;
	cin >> tcase;

	for (int i = 0; i < tcase;i++) {
		int length;
		string s;
		cin >> length;
		cin >> s;

		for (int j = 0; j < s.size(); j++) {
			for (int k = 0; k < length; k++) {
				cout << s.at(j);
			}
		}
		cout << endl;
	}

	return 0;
}