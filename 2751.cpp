#include <iostream>
#include <vector>

using namespace std;


void merge(vector<int>& v, int s, int e, int m) {
	vector<int> ret;

	int i = s, j = m + 1, copy = 0;

	while (i <= m && j <= e) {
		if (v[i] > v[j]) ret.push_back(v[j++]);
		else if(v[i] < v[j]) ret.push_back(v[i++]);
	}

	while (i <= m) ret.push_back(v[i++]);
	while (j <= e) ret.push_back(v[j++]);

	for (int a = s; a <= e; a++) {
		v[a] = ret[copy++];
	}
}

void mergesort(vector<int>& v, int s, int e) {
	if (s < e) {
		int m = (s + e) / 2;
		mergesort(v, s, m);
		mergesort(v, m + 1, e);

		merge(v, s, e, m);
	}
}

int boj_2751() {

	int n; cin >> n;

	vector<int> ary;

	for (int i = 0;i < n;i++) {
		int k; cin >> k;
		ary.push_back(k);
	}
	mergesort(ary, 0, n-1);
	

	for (int i = 0;i < n;i++) {
		cout << ary[i] << "\n";
	}
	return 0;
}