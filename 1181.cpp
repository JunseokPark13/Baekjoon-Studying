#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

string arys[20001];

bool compare_s(string a, string b) {
	if (a.length() == b.length()) return a < b;
	return a.length() < b.length();
}


int boj_1181() {
	
	int n; cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> arys[i];
	}

	sort(arys, arys + n, compare_s);
	
	for (int i = 0; i < n; i++) {
		if (i > 0 && arys[i - 1] == arys[i]) continue;
		else cout << arys[i] << "\n";
	}

	return 0;
}