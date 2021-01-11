#include <iostream>
#include <algorithm>
#include <cmath>
#include <vector>

using namespace std;


int avg(vector<int> num, int n) {
	double sum = 0;

	for (int i = 0;i < n; i++) {
		sum += num[i];
	}

	return floor(sum/n + 0.5);
}

bool comp(const pair<int, int>& p1, const pair<int, int>& p2) {
	if (p1.second == p2.second) {   
		return p1.first < p2.first; 
	}
	return p1.second > p2.second;   
}


int frequency(vector<int> v) {
	vector<pair<int, int> > st;       
	vector<int>::size_type i;

	for (i = 0; i < v.size(); i++) {
		if (st.empty()) {
			st.push_back(pair<int, int>(v[i], 1));
			continue;
		}

		if (st.back().first == v[i]) {       

			pair<int, int> tmp = st.back();
			tmp.second++;                    
			st.pop_back();                   
			st.push_back(tmp);               

		}
		else {
			st.push_back(pair<int, int>(v[i], 1));
		}
	}


	sort(st.begin(), st.end(), comp);


	if (st[0].second == st[1].second) {
		return st[1].first;
	}
	else {
		return st[0].first;
	}
	
}



int boj_2108() {
	int n; cin >> n;
	int k = 0;

	vector<int> num;

	for (int i = 0; i < n; i++) {
		cin >> k;
		num.push_back(k);
	}

	sort(num.begin(), num.end());

	cout << avg(num, n) << "\n";
	cout << num[n / 2 ] << "\n";
	cout << frequency(num) << "\n";
	cout << num.back() - num.front() << "\n";

	//for (int i = 0; i < n; i++) {
	//	cout << num[i] << "\n";
	//}

	return 0;
}