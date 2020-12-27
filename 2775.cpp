#include <iostream>

using namespace std;

int boj_2775() {

	int tcase; cin >> tcase;
	int num = 0;

	for (tcase;tcase;tcase--) {
		int k; cin >> k;
		int n; cin >> n;
		int sum = 0;
		int *res = new int[n];
		for (int i = 0; i < n;i++) {
			res[i] = i + 1;
		}
		for (int i = 0;i < k;i++) {
			for (int j = 1; j < n; j++) {
				res[j] += res[j-1];
			}
		}
		cout << res[n - 1] << endl;
	}

	return 0;
}