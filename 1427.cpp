#include <iostream>
#include <algorithm>

using namespace std;

int boj_1427() {

	string k; cin >> k;

	int num[11];

	for (int i = 0;i < k.length(); i++) {
		num[i] = k.at(i) - '0';
	}

	sort(num, num + k.length());

	for (int i = k.length()-1;i >=0 ; i--) {
		cout << num[i];
	}
	cout << "\n";

	return 0;
}