#include <iostream>
#include <cmath>

using namespace std;

int boj_2231() {

	int n; cin >> n;

	int result = n;
	int ary[7] = { 0, };

	for (int i = 1; i < n; i++){
		int sum = i;
		int k = i;
		for (int j = 0; j < 7;j++) {
			ary[j] = k % (int)pow(10, j + 1);
			ary[j] /= (int)pow(10, j);
			sum += ary[j];
			k -= (ary[j] * (int)pow(10, j));
		}
		if (sum == n && i <= result) result = i;
	}

	if(result == n) result = 0;

	cout << result << "\n";
	

	return 0;
}