#include <iostream>

using namespace std;

int ary[100001];

int boj_10989() {

	int n; cin >> n;

	for (int i = 0;i < n;i++) {
		int x; cin >> x;
		ary[x]++;
	}

	for (int i = 0;i < n;i++) {
		while (ary[i]--) {
			cout << i << "\n";
		}
	}

	return 0;
}