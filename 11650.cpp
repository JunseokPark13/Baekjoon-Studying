#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

bool comp(pair<int, int> a, pair<int, int> b) {
	if (a.first == b.first) return a.second < b.second;
	return a.first < b.first;
}


int boj_11650() {

	int n; cin >> n;
	int x,y;
	vector<pair<int, int>> vec;
	
	for (int i = 0; i < n; i++) {
		cin >> x >> y;
		vec.push_back(make_pair(x, y));
	}

	sort(vec.begin(), vec.end(), comp);

	for (int i = 0; i < n; i++) {
		cout << vec[i].first << " " << vec[i].second << "\n";
	}

	return 0;
}